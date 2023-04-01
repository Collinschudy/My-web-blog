import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../firebase/firebase.utils';
import './createpostpage.css';
import { useNavigate } from 'react-router-dom';




const CreatePost = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState([]);
    const [postImages, setPostImages] = useState([]);
    const [tag, setTag] = useState('');
    const [percent, setPercent] = useState(0);
    const [fileUrls, setFileUrls] = useState([]);
    const createdAt = new Date().toLocaleString();
    const navigate = useNavigate()

    const getInitialState = () => {
        const value = "lifestyle";
        return value;
    };


    const [value, setValue] = useState(getInitialState);

    const blogref = collection(db, `/${value}`)

    const handleSubmission = async () => {
        try {
            await addDoc(blogref, { title, body, createdAt, fileUrls, tag });
            alert('Post created successfully');
            navigate('/')
        } catch (error) {
            alert(console.error)
            console.error('failed to create', error)
        }
    }
    const handleChange = (e) => {
        for (let i = 0; e.target.files.length; i++) {
            const newImage = e.target.files[i]
            newImage['id'] = Math.random();
            setPostImages((prevState) => [...prevState, newImage]);
        }

    }


    const handleUpload = () => {
        if (!postImages) {
            alert("Please upload an image first!");
            return
        }
        postImages.map((postImage) => {
            const storageRef = ref(storage, `/files/${postImage.name}`);

            const uploadTask = uploadBytesResumable(storageRef, postImage);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setFileUrls((prevState) => [...prevState, url]); console.log(url);
                    });
                }
            );

        });


    }

    return (
        <div className="createpostpage">
            <div className="createpostcontainer">
                <h2>Create post</h2>

                <label>Choose your category:</label>

                <select value={value} name="categories" id="categories" onChange={(e) => { setValue(e.target.value) }}>

                    <option value="memoir" >Memoir</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="poetry">Poetry</option>
                    <option value="excerpts">Excerpts</option>
                </select>

                <div className="inputgroup">
                    <label>Title</label>
                    <input type="text" placeholder='title of article...'
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                    <label>Tag</label>
                    <input type="text" placeholder='Tag of article...'
                        onChange={(e) => {
                            setTag(e.target.value);
                        }}
                    />
                </div>

                <div className="inputGroup">
                    <label>part 1</label>
                    <textarea name="" id=""  placeholder='write here...'
                        onChange={(e) => {
                            setBody([e.target.value])

                        }}
                    >
                    </textarea>
                    <label>part 2</label>
                    <textarea 
                        onChange={(e) => {
                            body[1] = e.target.value
                        }}>
                    </textarea>

                    <label>part 3</label>
                    <textarea 
                        onChange={(e) => {
                            body[2] = e.target.value
                        }}>
                    </textarea>

                    <label>part 4</label>
                    <textarea 
                        onChange={(e) => {
                            body[3] = e.target.value
                        }}>
                    </textarea>

                    <label>part 5</label>
                    <textarea 
                        onChange={(e) => {
                            body[4] = e.target.value
                        }}>
                    </textarea>

                    <label>part 6</label>
                    <textarea 
                        onChange={(e) => {
                            body[5] = e.target.value
                        }}>
                    </textarea>

                    <label>part 7</label>
                    <textarea 
                        onChange={(e) => {
                            body[6] = e.target.value
                        }}>
                    </textarea>

                    <label>part 8</label>
                    <textarea 
                        onChange={(e) => {
                            body[7] = e.target.value
                        }}>
                    </textarea>

                    <label>part 9</label>
                    <textarea 
                        onChange={(e) => {
                            body[8] = e.target.value
                        }}>
                    </textarea>

                    <label>part 10</label>
                    <textarea 
                        onChange={(e) => {
                            body[9] = e.target.value
                        }}>
                    </textarea>

                    <label>part 11</label>
                    <textarea 
                        onChange={(e) => {
                            body[10] = e.target.value
                        }}>
                    </textarea>

                    <label>part 12</label>
                    <textarea 
                        onChange={(e) => {
                            body[11] = e.target.value
                        }}>
                    </textarea>

                    <label>part 13</label>
                    <textarea 
                        onChange={(e) => {
                            body[12] = e.target.value
                        }}>
                    </textarea>

                    <label>part 14</label>
                    <textarea 
                        onChange={(e) => {
                            body[13] = e.target.value
                        }}>
                    </textarea>

                    <label>part 15</label>
                    <textarea 
                        onChange={(e) => {
                            body[14] = e.target.value
                        }}>
                    </textarea>

                    <label>part 16</label>
                    <textarea 
                        onChange={(e) => {
                            body[15] = e.target.value
                        }}>
                    </textarea>

                    <label>part 17</label>
                    <textarea 
                        onChange={(e) => {
                            body[16] = e.target.value
                        }}>
                    </textarea>

                    <label>part 18</label>
                    <textarea 
                        onChange={(e) => {
                            body[17] = e.target.value
                        }}>
                    </textarea>

                    <label>part 19</label>
                    <textarea 
                        onChange={(e) => {
                            body[18] = e.target.value
                        }}>
                    </textarea>

                    <label>part 20</label>
                    <textarea 
                        onChange={(e) => {
                            body[19] = e.target.value
                        }}>
                    </textarea>

                    <label>part 21</label>
                    <textarea 
                        onChange={(e) => {
                            body[20] = e.target.value
                        }}>
                    </textarea>

                    <label>part 22</label>
                    <textarea 
                        onChange={(e) => {
                            body[21] = e.target.value
                        }}>
                    </textarea>

                    <label>part 23</label>
                    <textarea 
                        onChange={(e) => {
                            body[22] = e.target.value
                        }}>
                    </textarea>
                    <label>part 24</label>
                    <textarea 
                        onChange={(e) => {
                            body[23] = e.target.value
                        }}>
                    </textarea>

                    <label>part 25</label>
                    <textarea 
                        onChange={(e) => {
                            body[24] = e.target.value
                        }}>
                    </textarea>

                    <label>part 26</label>
                    <textarea 
                        onChange={(e) => {
                            body[25] = e.target.value
                        }}>
                    </textarea>

                    <label>part 27</label>
                    <textarea 
                        onChange={(e) => {
                            body[26] = e.target.value
                        }}>
                    </textarea>

                    <label>part 28</label>
                    <textarea 
                        onChange={(e) => {
                            body[27] = e.target.value
                        }}>
                    </textarea>

                    <label>part 29</label>
                    <textarea 
                        onChange={(e) => {
                            body[28] = e.target.value
                        }}>
                    </textarea>

                    <label>part 30</label>
                    <textarea 
                        onChange={(e) => {
                            body[29] = e.target.value
                        }}>
                    </textarea>

                    <label>part 31</label>
                    <textarea 
                        onChange={(e) => {
                            body[30] = e.target.value
                        }}>
                    </textarea>

                    <label>part 32</label>
                    <textarea 
                        onChange={(e) => {
                            body[31] = e.target.value
                        }}>
                    </textarea>

                    <label>part 33</label>
                    <textarea 
                        onChange={(e) => {
                            body[32] = e.target.value
                        }}>
                    </textarea>

                    <label>part 34</label>
                    <textarea 
                        onChange={(e) => {
                            body[33] = e.target.value
                        }}>
                    </textarea>

                    <label>part 35</label>
                    <textarea 
                        onChange={(e) => {
                            body[34] = e.target.value
                        }}>
                    </textarea>

                    <label>part 36</label>
                    <textarea 
                        onChange={(e) => {
                            body[35] = e.target.value
                        }}>
                    </textarea>

                    <label>part 37</label>
                    <textarea 
                        onChange={(e) => {
                            body[36] = e.target.value
                        }}>
                    </textarea>

                    <label>part 38</label>
                    <textarea 
                        onChange={(e) => {
                            body[37] = e.target.value
                        }}>
                    </textarea>

                    <label>part 39</label>
                    <textarea 
                        onChange={(e) => {
                            body[38] = e.target.value
                        }}>
                    </textarea>

                    <label>part 40</label>
                    <textarea 
                        onChange={(e) => {
                            body[39] = e.target.value
                        }}>
                    </textarea>

                    <label>part 41</label>
                    <textarea 
                        onChange={(e) => {
                            body[40] = e.target.value
                        }}>
                    </textarea>

                    <label>part 42</label>
                    <textarea 
                        onChange={(e) => {
                            body[41] = e.target.value
                        }}>
                    </textarea>

                    <label>part 43</label>
                    <textarea 
                        onChange={(e) => {
                            body[42] = e.target.value
                        }}>
                    </textarea>

                    <label>part 44</label>
                    <textarea 
                        onChange={(e) => {
                            body[43] = e.target.value
                        }}>
                    </textarea>
                    <label>part 45</label>
                    <textarea 
                        onChange={(e) => {
                            body[44] = e.target.value
                        }}>
                    </textarea>
                    <label>part 46</label>
                    <textarea 
                        onChange={(e) => {
                            body[45] = e.target.value
                        }}>
                    </textarea>
                    <label>part 47</label>
                    <textarea 
                        onChange={(e) => {
                            body[46] = e.target.value
                        }}>
                    </textarea>
                    <label>part 48</label>
                    <textarea 
                        onChange={(e) => {
                            body[47] = e.target.value
                        }}>
                    </textarea>
                    <label>part 49</label>
                    <textarea 
                        onChange={(e) => {
                            body[48] = e.target.value
                        }}>
                    </textarea>
                    <label>part 50</label>
                    <textarea 
                        onChange={(e) => {
                            body[49] = e.target.value
                        }}>
                    </textarea>
                    <label>part 51</label>
                    <textarea 
                        onChange={(e) => {
                            body[50] = e.target.value
                        }}>
                    </textarea>
                    <label>part 52</label>
                    <textarea 
                        onChange={(e) => {
                            body[51] = e.target.value
                        }}>
                    </textarea>

                    <label>part 53</label>
                    <textarea 
                        onChange={(e) => {
                            body[52] = e.target.value
                        }}>
                    </textarea>

                    <label>part 54</label>
                    <textarea 
                        onChange={(e) => {
                            body[53] = e.target.value
                        }}>
                    </textarea>

                    <label>part 55</label>
                    <textarea 
                        onChange={(e) => {
                            body[54] = e.target.value
                        }}>
                    </textarea>

                    <label>part 56</label>
                    <textarea 
                        onChange={(e) => {
                            body[55] = e.target.value
                        }}>
                    </textarea>

                     <label>part 57</label>
                    <textarea 
                        onChange={(e) => {
                            body[56] = e.target.value
                        }}>
                    </textarea>

                    <label>part 58</label>
                    <textarea 
                        onChange={(e) => {
                            body[57] = e.target.value
                        }}>
                    </textarea>

                    <label>part 59</label>
                    <textarea 
                        onChange={(e) => {
                            body[58] = e.target.value
                        }}>
                    </textarea>

                    <label>part 60</label>
                    <textarea 
                        onChange={(e) => {
                            body[59] = e.target.value
                        }}>
                    </textarea>

                    <label>part 61</label>
                    <textarea 
                        onChange={(e) => {
                            body[60] = e.target.value
                        }}>
                    </textarea>

                    <label>part 62</label>
                    <textarea 
                        onChange={(e) => {
                            body[61] = e.target.value
                        }}>
                    </textarea>

                    <label>part 63</label>
                    <textarea 
                        onChange={(e) => {
                            body[62] = e.target.value
                        }}>
                    </textarea>
                    
                    <label>part 64</label>
                    <textarea 
                        onChange={(e) => {
                            body[63] = e.target.value
                        }}>
                    </textarea>
                </div>
                <div className="inputGroup">
                    <input type="file" accept="image/*" multiple onChange={handleChange} />
                    <button onClick={handleUpload}>Upload to Firebase </button>
                    <p>({percent}% completed)</p>

                </div>
                <button className='submit-button' onClick={() => { handleSubmission() }
                }>Submit post </button>
            </div>

        </div>
    )
}


export default CreatePost;





