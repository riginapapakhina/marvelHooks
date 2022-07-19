import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ComicsPage} from "../pages"

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';


const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
//const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));


const App =()=> {
  

      return (
      <Router>
          <div className="app">
            <AppHeader/>
            <main>
          <Suspense fallback={<Spinner/>}>
          <Routes>
                 <Route path="/" element={<MainPage/>}/>
                 <Route path="/comics" element={<ComicsPage/>}/>
                 <Route path="/comics/:comicId" element={<SingleComicLayout/>}/>
                 <Route path="*" element={ <Page404/>}/>
                 <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>} />
           
           </Routes>
          </Suspense>
            </main>
        </div>
      </Router>
    )
    }


export default App;
