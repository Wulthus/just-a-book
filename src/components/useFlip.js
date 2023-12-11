export default function useFlip(pageNumber, boolean){
    setPages((pages)=>{
      console.log(pages);
      return {...pages, [pageNumber]:boolean, }
    });
  }