import React, { Component } from 'react';
function getImg(props) {
    let src = props.hog.name
    src = src.toLowerCase()
    src = src.replace(/ /g,'_')

    let img= require(`../hog-imgs/${src}.jpg`)
    return img
}




class HogCard extends Component {
    constructor() {
      super()
      this.state={
        hide:true,
        info:false
     }
    }
 

  handleHide=()=> {
      this.setState({
          hide:false
      })
  }
 
  handleInfoClick=()=> {
      this.setState({
          info:!this.state.info
      })
  }
    render() {
        return (this.state.hide
                 ? <div className="card">      
                    <div className="image">
                        <img src={getImg(this.props)} alt=""/>
                    </div>
                    <div className="content">
                        <div className="header">{this.props.hog.name}</div>
                        <div className="description">
                        {this.props.hog.specialty}
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                        <button onClick={this.handleInfoClick}> More Info</button>
                         {this.state.info? <div>weight:{this.props.hog.weight}</div>:null}
                        </span>
                        
                        <span>
                        <i className="user icon"></i>
                        <button onClick={this.handleHide}>Hide Me</button>
                        </span>
                    </div>
                  </div>
                :null
        ); 
    }
 
}


export default HogCard
