import { createContext, useContext, useState } from 'react';

import './App.css';
import Page from "./components/Page.jsx";
import Footer from './components/footer.jsx';
import HeroLeft from './pages/HeroLeft.jsx';
import GalleryLeft from './pages/GalleryLeft.jsx';
import GalleryRight from './pages/GalleryRight.jsx';
import FullSizePicture from './components/FullSizePicture.jsx';
import HeroRight from './pages/HeroRight.jsx';

const ImageContext = createContext(null);

export function useImage(){
  const ImageConext = useContext(ImageContext);
  if (ImageConext === null) console.log("Did you just use ImageContext outisde of ImageContext.Provider? 🤦‍♂️")
  return ImageConext;
}


function App() {


  const pages = [<HeroLeft/>, <HeroRight/>, <GalleryLeft />, <GalleryRight/>];
  
  const [page, setPage] = useState(1);

  const [showImage, setShowImage] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  
  const leftPageContent = pages[page-1];
  const rightPageContent = pages[page];
  
  return (
    <ImageContext.Provider value={{imgSrc, setImgSrc, setShowImage}}>
        <FullSizePicture showImage={showImage}></FullSizePicture>
        <div className={`book__cover ${showImage && 'book-dropped'}`}>
          <div className="book__page-container">
            <Page type='left' page={page} setPage={setPage}>
              {leftPageContent}
            </Page>
            <Page type='right' page={page} setPage={setPage}>
              {rightPageContent}
            </Page>
          </div>
        </div>
        <Footer></Footer>
      </ImageContext.Provider>
  )
}

export default App
