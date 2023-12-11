import { useCallback, useEffect, useRef, useState } from 'react';

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
import Message from './components/Message.jsx';

import { ImageContext } from './context/ImageContext.jsx';



const content = [
  [<Hero/>, <About1/>], 
  [<FullImage src="johnny_automatic_beer_and_pretzels.svg" alt="Beer mug and pretzel" />, <FullImage src="hopAndBarley.svg" alt="Hop and barley" />],
  [<About2/>, <ProductsLeft/>],
  [<ProductsRight />,<GalleryLeft/>],
  [<GalleryRight />, <ContactUs/>]
];

function App() {

//--------------------------------------------------------------STATE

  const [showImage, setShowImage] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [pages, setPages] = useState(()=>preparePages());
  const pagesRef = useRef();
  pagesRef.current = pages;


//--------------------------------------------------------------INITIAL STATE FUNCTION
  
function preparePages(){
    let initialPages = {};
    content.forEach((pair)=>{
      let backPageNum = (content.indexOf(pair)+1)*2;
      initialPages[backPageNum] = false;
    });
    return initialPages;
  }

//--------------------------------------------------------------CORE FLIP FUNCTION

  const flip = useCallback((pageNumber, boolean)=>{
    setPages((pages)=>{
      return {...pages, [pageNumber]:boolean, }
    });
  }, [])


//--------------------------------------------------------------SCROLLWHEEL FLIP FUNCTION

const scrollFlip = useCallback(direction=>{
  let keys;
  let flipped;
  if (direction === 'backwards'){
    keys = Object.keys(pages).toReversed();
    flipped = true;
  } 
  if (direction === 'normal'){
    keys = Object.keys(pages);
    flipped = false;
  } 
  for(const page of keys){
    if(pagesRef.current[page] === flipped) {
      flip(Number(page), !flipped);
      break
    }
  }
}, [flip, pages]);

//--------------------------------------------------------------SCROLLWHEEL FLIPPING

  useEffect(function(){
    window.addEventListener('wheel', function(e){
      if (e.deltaY > 0) {
        scrollFlip('normal')
      }
      if (e.deltaY < 0){
        scrollFlip('backwards')
      }
  });
  }, [pages, flip, scrollFlip])

//----------------------------------------------------------------------------COMPONENT
  
  return (
    <ImageContext.Provider value={{imgSrc, setImgSrc, setShowImage}}>
          <FullSizePicture showImage={showImage}></FullSizePicture>
          <Message></Message>
          <div className={`book__cover ${showImage && 'book-dropped'}`}>
            <div className="book__pages-container">
              <Cover type="left"></Cover>
              <Cover type="right"></Cover>
                {content.map((page)=>{
                  let backPageNum = (content.indexOf(page)+1)*2;
                  return (
                    <Page numPages={content.length*2} key={content.indexOf(page)+2} backPage={backPageNum} pages={pages} setPages={setPages} flip={flip}>
                      {page[0]}{page[1]}
                    </Page> )})}
            </div>
          </div>
          <Footer></Footer>
    </ImageContext.Provider>
  )
}


export default App


