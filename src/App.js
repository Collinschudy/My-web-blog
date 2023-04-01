
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header component/header.component';
import SignIn from './pages/sign-in/signIn.component';
import { auth } from './firebase/firebase.utils';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from "firebase/firestore";
import CreatePost from './pages/create post/createpost.page';
import { createUserProfileDocument } from './firebase/firebase.utils';
import Lifestyle from './pages/lifestyle/lifestyles';
import HomePage from './pages/homepage/homepage';
import Poetry from './pages/poetry/poetry';
import CategoryPage from './pages/category-page/categorypage.';
import Excerpt from './pages/excerpts/excerpts';
import Memoir from './pages/memoir/memoir';
import BookPage from './pages/book-page/bookpage';
import { FaAngleUp } from "react-icons/fa";
import Footer from './components/footer-section/footer.component';
import ContactUs from './pages/send-email-page/sendemail';

import FirstPost from './pages/lifestyle-blog-posts/firstpost';
import SecondPost from './pages/lifestyle-blog-posts/secondpost';
import ThirdPost from './pages/lifestyle-blog-posts/thirdpost';
import FourthPost from './pages/lifestyle-blog-posts/fourthpost';
import FifthPost from './pages/lifestyle-blog-posts/fifthpost';
import SixthPost from './pages/lifestyle-blog-posts/sixthpost';


import FirstPoetryPost from './pages/poetry-posts/firstpost';
import SecondPoetryPost from './pages/poetry-posts/secondpost';
import ThirdPoetryPost from './pages/poetry-posts/thirdpost';
import FourthPoetryPost from './pages/poetry-posts/fourthpost';
import FifthPoetryPost from './pages/poetry-posts/fifthpost';


import FirstMemoirPost from './pages/memoir-posts/firstpost';
import SecondMemoirPost from './pages/memoir-posts/secondpost';


import FirstExcerptPost from './pages/excerpts-post/firstpost';
import SecondExcerptPost from './pages/excerpts-post/secondpost';
import ThirdExcerptPost from './pages/excerpts-post/thirdpost';




const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [arrowScrollUp, setArrowScrollUp] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }

      setCurrentUser(userAuth);
    });
    return () => unsubscribe();
  }, []);




  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
    if (window.scrollY >= 50) {
      setArrowScrollUp(true);
    } else {
      setArrowScrollUp(false);
    }
  }
  window.addEventListener('scroll', handleScroll);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



  return (
    <div clasName='App'>
      <div
        className={`arrowUpBox ${arrowScrollUp && "arrowScroll"}`}
        onClick={handleScrollTop}
      >
        <FaAngleUp className="arrowUp" />
      </div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/signin' element={<SignIn setIsAuth={setIsAuth} />} />
        <Route exact path='/createpost' element={<CreatePost />} />
        <Route exact path='/category/' element={<CategoryPage />} />

        <Route exact path='/category/lifestyle' element={<Lifestyle />} />
        <Route exact path='/category/lifestyle/thirdpost' element={<ThirdPost />} />
        <Route exact path='/category/lifestyle/secondpost' element={<SecondPost />} />
        <Route exact path='/category/lifestyle/firstpost' element={<FirstPost />} />
        <Route exact path='/category/lifestyle/fourthpost' element={<FourthPost />} />
        <Route exact path='/category/lifestyle/fifthpost' element={<FifthPost />} />
        <Route exact path='/category/lifestyle/sixthpost' element={<SixthPost />} />
        

        <Route exact path='/category/poetry' element={<Poetry />} />
        <Route exact path='/category/poetry/firstpost' element={<FirstPoetryPost />} />
        <Route exact path='/category/poetry/secondpost' element={<SecondPoetryPost />} />
        <Route exact path='/category/poetry/thirdpost' element={<ThirdPoetryPost />} />
        <Route exact path='/category/poetry/fourthpost' element={<FourthPoetryPost />} />
        <Route exact path='/category/poetry/fifthpost' element={<FifthPoetryPost />} />


        <Route exact path='/category/excerpt' element={<Excerpt />} />
        <Route exact path='/category/excerpt/firstpost' element={<FirstExcerptPost />} />
        <Route exact path='/category/excerpt/secondpost' element={<SecondExcerptPost />} />
        <Route exact path='/category/excerpt/thirdpost' element={<ThirdExcerptPost />} />


        <Route exact path='/category/memoir' element={<Memoir />} />
        <Route exact path='/category/memoir/firstpost' element={<FirstMemoirPost /> } />
        <Route exact path='/category/memoir/secondpost' element={<SecondMemoirPost /> } />
     

        <Route exact path='/mybook' element={<BookPage />} />
        <Route exact path='/sendemail' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );

}


export default App;
