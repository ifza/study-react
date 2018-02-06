import React, { Component } from "react";

import './style.scss'
import img from './images/brooke.jpg'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {count:0}
    }
    _handleClick(){
        this.setState({
            count:++this.state.count
        })
    }
    render(){
        return(
            <div>
                <h1>SASS <span>Style</span></h1>
                <img  src={img} />
                <h1 className="h1">I am the Home Page</h1>
                <h2>当前计数：{this.state.count}</h2>
                <button onClick={()=>this._handleClick()}>增加+</button>
            </div>
        )
    }
}