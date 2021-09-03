import axios from "axios";
import { useEffect, useState } from "react";
import './card.css';

const Card = () => {

const [info, setInfo] = useState([]);

useEffect(() => {
    axios?.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=AzflGlQ0Mn3HZzwtvEHIh0K4j20hyepS')
    .then(res => setInfo(res.data.results))
}, []);

    return (
        <div className='sheet'>
            {info?.map(e => {
                return (
                    <div>
                        <a className='linkref' style={{ textDecoration: 'none' }} href={e.url} target="_blank" without rel="noreferrer">
                        <div className='cardI'>
                            {console.log(e)}
                            <h5>{e.title}{<br/>}</h5>
                            <img width='400' height='400' src={e.multimedia[0]?.url} alt='hola'/>
                        </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
