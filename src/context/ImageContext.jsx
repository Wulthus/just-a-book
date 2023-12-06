import { createContext, useContext } from 'react';

export const ImageContext = createContext(null);

export function useImage() {
  const ImageConext = useContext(ImageContext);
  if (ImageConext === null) console.log("Did you just use ImageContext outisde of ImageContext.Provider?");
  return ImageConext;
}