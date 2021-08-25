import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const name='Md Adil Alam';
const img1="https://picsum.photos/200/400";
const img2="https://picsum.photos/250/400";
const img3="https://picsum.photos/300/400";
const img4="https://picsum.photos/325/400";
const links="https://www.youtube.com";

ReactDom.render(
 <>
 <h1 className="heading">My Name is: {name}</h1>
 <div className="img-div">
 <img src={img1} alt="randomImages"/>
 <img src={img2} alt="randomImages"/>
 <img src={img3} alt="randomImages"/>
 <a href={links}>
  <img src={img4} alt="randomImages"/>
  </a>
  </div>

 </>,
document.getElementById('root')
);