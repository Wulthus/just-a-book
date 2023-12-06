import { useState } from 'react';
import Side from './Side';
import styles from './page.module.css';

export default function Page({ children, numPages, backPage }){

    const [flipped, flip] = useState(false);

    let index;
    if(flipped) index = backPage;
    if(!flipped) index = numPages - backPage;

    function handleWheel(e){
        if (e.deltaY > 0) flip(true);
        if (e.deltaY < 0) flip(false);
    }

    return (
        <div className={`${styles['book__page']} ${flipped && styles.flipped}`} onWheel={(e)=>handleWheel(e)} style={{
            zIndex: `${index}`
        }}>
                <Side type='front' flip={flip} backPage={backPage}>
                    {children[0]}
                </Side>
                <Side type='back' flip={flip}  backPage={backPage}>
                    {children[1]}
                </Side>
        </div>
    )
}