import React, { useState, useEffect } from 'react';
import '../Header.scss';
import NextArrow from '../components/NextArrow.js';

function Header() {

  const [currentValue, changeValue] = useState(0); 


  const values = [
    {
      value: "hi",
      img: "2000x1800-Standing"
    },
    {
      value: "efficient web development",
      img: "2000x1800-WebDev"
    },
    {
      value: "a good bike trip",
      img: "2000x1800-Bike"
    },
    {
      value: "enjoying the work",
      img: "2000x1800-Enjoy"
    },
    {
      value: "good speakers for music",
      img: "2000x1800-Speaker"
    },
    {
      value: "learning new technologies",
      img: "2000x1800-Learning"
    },
    {
      value: "having plants",
      img: "2000x1800-Plants"
    }
  ]

  const portfolioValues = values.map((item) => 
    <div className="value">
      <img key={item.img} src={require(`../assets/${item.img}.png`)}/>
      <h2>{item.value}</h2>
    </div>
  )

  useEffect(() => {
    nextValue();
  }, []); //Runs once

  useEffect(() => {
    setTimeout(nextValue, 5000);
  }, [currentValue]); //Runs when currentValue changes


  function nextValue() {
    const values = document.querySelectorAll(".values-slides .value"); 
    values.forEach(value => value.classList.remove("values-showing")); 
    values[currentValue].classList.add("values-showing"); 
    if (currentValue < values.length - 1) { 
      changeValue(currentValue +1); 
    }
    else {
      changeValue(0)
    }
  }

  return (
    <section>
      <div className="Header">
        <h1>My name is<br></br><span>Elma Harmsen</span><br></br>and I <span className="stand">stand</span> for<span>:</span></h1>
          <div className="values-slides">
            {portfolioValues}
          </div>
          <div className="figure-eyes">
            <span></span>
            <span></span>
          </div>
        <NextArrow />
      </div>
    </section>
  )
}

export default Header;