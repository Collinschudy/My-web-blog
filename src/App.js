
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

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState('')

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

 
  return (
    <div>
       <Header currentUser={currentUser}/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignIn  setIsAuth={setIsAuth} />} />
          <Route exact path='/createpost' element={<CreatePost /> } />
          <Route exact path='/lifestyle' element={<Lifestyle />} />
          <Route exact path='/poetry' element={<Poetry />} />
          <Route exact path='/excerpt' element={<Excerpt />} />
          <Route exact path='/memoir' element={<Memoir />} />
          <Route exact path='/category' element={<CategoryPage />} />
        </Routes>
    </div>
  );
    
}

export default App;
