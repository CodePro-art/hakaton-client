import React from "react";
import "./Display.css";

function Display(props) {
  
  // page open - props === null;
  // story loding - props === 'loading'
  // get story data - props === obj
  console.log(props.data);
  const renderHeader = () => {
    const align = ['en','ru'].includes(props.data.language)? 'left': 'right'
    return (
      <div className="display_header">
        {align === 'left' ?
          <React.Fragment>
            <h2 className="display_title">{props.data.title}</h2>
            <img className="display_img" src={props.data.image} alt=""/>
          </React.Fragment> :
          <React.Fragment>
            <img className="display_img" src={props.data.image} alt=""/> 
            <h2 className="display_title">{props.data.title}</h2>
          </React.Fragment>
        }
      </div>
    );
  }
  const renderContent = () => {
      return (
        <React.Fragment>
          {renderHeader()}
          <div className="display_txt">
            {props.data.content.map((p, indx) => <p key={indx}>{p}</p>)}
          </div>
        </React.Fragment>
      );
  }
  return (
    <div className="display">
    {(props.data === 'loading')? <p>loading</p> : null}
    {props.data.content? renderContent(): null}
    </div>
  );
}
    // 
export default Display;
