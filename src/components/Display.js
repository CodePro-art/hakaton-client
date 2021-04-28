import React from "react";
import "./Display.css";

function Display(props) {
  
  // page open - props === null;
  // story loding - props === 'loading'
  // get story data - props === obj
  
  const renderLoding = () => {
    const lodingGif = 'https://cdn.dribbble.com/users/149180/screenshots/3208433/book_preloader.gif';
    return (
      <div className="display_loding">
        <img className="display_loding-gif" alt="" src={lodingGif}/>
        <h2 className="display_loding-txt">Loading translation, please wait</h2>
      </div>
    )
  }
  const renderHeader = () => {
    return (
      <div className="display_header">
        {['he', 'ar'].includes(props.data.language) ?
        <React.Fragment>
          <img className="display_img" src={props.data.image} alt=""/> 
          <h2 className="display_title">{props.data.title}</h2>
        </React.Fragment> :
          <React.Fragment>
            <h2 className="display_title">{props.data.title}</h2>
            <img className="display_img" src={props.data.image} alt=""/>
          </React.Fragment> 
          
        }
      </div>
    );
  }
  const renderContent = () => {
    const align = ['he', 'ar'].includes(props.data.language)? 'right': 'left'
      return (
        <React.Fragment>
          {renderHeader()}
          <div className={`display_txt ${align}`}>
            {props.data.content.map((p, indx) => <p key={indx}>{p}</p>)}
          </div>
        </React.Fragment>
      );
  }
  // 
  return (
    <div className="display">
    {(props.data === 'loading')? renderLoding() : null}
    {props.data.content? renderContent(): null}
    </div>
  );
}
    // 
export default Display;
