import React, { useState } from "react";
import "./Display.css";

function Display() {
  // { title, imgSrc, content}
  const title = 'Long Long Long Title';
  const imgSrc = 'https://www.adamtsair.co.il/wp-content/uploads/2018/09/crazy.jpg';
  const content = `React checks the props passed to components against those definitions,
   and will result in a warning/error when they don't match. We can define default values
    to props using the defaultProps property. defaultProps is used to ensure that props will
     have a value if it was not specified by the parent component. there is a alternative to
      margin-left:auto; margin-right: auto; or margin:0 auto; for the ones that use position:
      absolute; this is how: you set the left position of the element to 50% (left:50%;) but
       that will not center it correctly in order for the element to be centered correctly you
        need to give it a margin of minus half of its width, that will center your element
         perfectly here is an example: http://jsfiddle.net/35ERq/3/`;
  return (
    <div className="display">
      <div className="display_header">
        <h2 className="display_title">{title}</h2>
        <img className="display_img" src={imgSrc}/>
      </div>
      <p className="display_txt">{content}</p>
    </div>
  );
}

export default Display;
