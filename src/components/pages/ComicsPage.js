import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {SingleComicPage } from "../pages";

import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
  return(
    
      <>
          <AppBanner/>
          <Routes>
          <Route>
              <Route path=":id" element={<SingleComicPage/>}/>
              <Route path="/" element={<ComicsList/>}/>
          </Route>
      </Routes>
      </>

    
     


  )
}

export default ComicsPage;
