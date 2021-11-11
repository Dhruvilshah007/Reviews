import React, { useState } from "react";

// people is array which has all data in it from data.js file
import people from "./data";
// from library of react icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {


  //here we are using index because we want to render one person at a time not all the person together
  //so will start by 0as arraystarts from 0
  const [index, setIndex] = useState(0);
 
  const { name, job, image, text } = people[index];
  // console.log(people[0])
  //  console.log(people[0].name)

  

  // This is function which checks if number of array is less than 0 or greated than n
const checkNumber=(number)=>{

  // IF number is >4
  if(number>people.length-1){
    return 0
  }
  // If number is less than 0 (-ve)
  if(number<0){
    return people.length-1
  }
  // for rest 0,1,2,3
  return number
}

// function for next person in array
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;

      // here by passing newIndex to checkNumber as argument that is its value is proper or not and Index is out of bound or not.
      return checkNumber(newIndex);
    });
  };

  // function for previous person in array
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    });
  };

  const randomPerson=()=>{
    // console.log(Math.random())
    let randomNumber=Math.floor(Math.random()*people.length);
    // sometimes repetation takes place here so same person is seen again
  // so here is the logic for it
  if(randomNumber===index){
    randomNumber=index+1
  }

  // here alse we have to check when we increase index by 1 that is Indexoutofbound error or not
  // so we are calling checkNumber function again and then again whole useState method
  setIndex(checkNumber(randomNumber))

    // console.log(randomNumber)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          {/* This icon are imported and used from "react-icons" library */}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-containeer">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      {/* Gives u the random person among all the 4 person in array */}
      <button className="random-btn" onClick={randomPerson}>Suprise Me</button>
    </article>
  );
};

export default Review;
