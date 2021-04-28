import React, { Component } from 'react';
import './Card.css';

export default class card extends Component {
  state={
    url:this.props.url 
  }

  sendUrl = () => {
    this.props.sendResult(this.state.url)
  }
  
  render() {
    return (
      <div className="card-container">
        <div className="story-title">
          {this.props.title}
        </div>
        <img className="cover" src={this.props.src} alt="story" onClick={this.sendUrl}/>

      </div>
    )
  }
}
