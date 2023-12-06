import { useState } from 'react';

import './App.css';

import Hero from './pages//hero/Hero.jsx';
import FullImage from './pages/about/FullImage.jsx';
import About1 from './pages/about/About1.jsx';
import About2 from './pages//about/About2.jsx';
import GalleryLeft from './pages/gallery/GalleryLeft.jsx';
import GalleryRight from './pages/gallery/GalleryRight.jsx';

import Footer from './components/footer.jsx';
import FullSizePicture from './components/FullSizePicture.jsx';
import Page from './components/Page.jsx';
import Cover from './components/Cover.jsx';
import ContactUs from './pages/letsConnect/ContactUs.jsx';
import ProductsLeft from './pages/products/ProductsLeft.jsx';
import ProductsRight from './pages/products/ProductsRight.jsx';
import { ImageContext } from './context/ImageContext.jsx';
import Message from './components/Message.jsx';


function App() {

  const pages = [
    [<Hero/>, <About1/>], 
    [<FullImage src="johnny_automatic_beer_and_pretzels.svg" alt="Beer mug and pretzel" />, <FullImage src="hopAndBarley.svg" alt="Hop and barley" />],
    [<About2/>, <ProductsLeft/>],
    [<ProductsRight />,<GalleryLeft/>],
    [<GalleryRight />, <ContactUs/>]
  ];
  
  const [showImage, setShowImage] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  
  return (
    <ImageContext.Provider value={{imgSrc, setImgSrc, setShowImage}}>
        <FullSizePicture showImage={showImage}></FullSizePicture>
        <Message></Message>
        <div className={`book__cover ${showImage && 'book-dropped'}`}>
          <div className="book__pages-container">
            <Cover type="left"></Cover>
            <Cover type="right"></Cover>
              {pages.map((page)=><Page numPages={pages.length*2} key={pages.indexOf(page)+2} backPage={(pages.indexOf(page)+1)*2}>
                {page[0]}{page[1]}</Page>)}
          </div>
        </div>
        <Footer></Footer>
      </ImageContext.Provider>
  )
}

export default App
