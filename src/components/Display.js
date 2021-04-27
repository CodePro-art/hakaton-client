import React from "react";
import "./Display.css";

function Display(props) {
  // page open - props === null;
  // story loding - props === 'loading'
  // get story data - props === obj
  console.log(props.data)
  const renderContent = () => {
      return (
        <React.Fragment>
          <div className="display_header">
          <h2 className="display_title">{props.data.title}</h2>
          <img className="display_img" src={props.data.image}/>
          </div>
          <div className="display_txt">
            {props.data.content.map((p, indx) => <p key={indx}>{p}</p>)}
          </div>
        </React.Fragment>
      );
  }
  return (
    <div className="display">
    {props.data.content? renderContent(): null}
    {(props === 'loading')? 'loading' : null}
    </div>
  );
}

export default Display;
