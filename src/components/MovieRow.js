/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import './MovieRow.css'; 
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'; 
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function MovieProp({title, items}) {
    const [scrollX, setScrollX] = useState(0); 

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW)- 90;

        }
        setScrollX(x);
        
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <div className='movieRow--listarea'>
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.lenght * 150
                }}>
                {items && items.results && items.results.length && items.results.map((item, key)=> (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} key={key} alt={item.original_title} />
                        </div>
                ))}
                </div>
            </div>
        </div>
    );
}