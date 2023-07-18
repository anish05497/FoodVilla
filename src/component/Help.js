import React, { useState } from "react";
import { FAQ } from "../utils/constant";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const Section = ({id, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisible)=> !prevVisible)
  }

  return (
    <div className="flex flex-col shadow rounded-md p-2.5 m-2.5 cursor-pointer" onClick={toggleVisibility}>
      <div className="flex justify-between items-center"> 
        <h3 className="font-semibold text-lg text-title">{title}</h3>
        {
        isVisible ? (
        <SlArrowUp onClick={toggleVisibility} className="cursor-pointer" />
      ) : (
        <SlArrowDown onClick={toggleVisibility} className="cursor-pointer" />
      )}
      </div>
      {isVisible && <p className="text-bio text-base">{description}</p>}
    </div>
  )
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className="container">
      <div className="card-conatiner">
        <h1 className="card-container-title pb-5">FAQ</h1>
        {FAQ.map((question) => {
          return (
            <Section
              key={question.id}
              id={question.id}
              title={question.title}
              description={question.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Help;
