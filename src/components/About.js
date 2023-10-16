import React from "react";
import Links from "./Links"

function About(props) {

  function checkBio(){
    if (!props.bio){
      return null;
    } else if (props.bio === ""){
      return null;
    } else if (props.bio){
      return <p>{props.bio}</p>
    } else return null;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {checkBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
