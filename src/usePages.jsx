import { useState } from "react";


export default function usePages(...components){

    const [pages, setPages] = useState([]);
    setPages([...components]);

return pages;
}