// your Bomb code here!
import React, { Component } from "react"

class Bomb extends Component {
    constructor(props){
        super()
        this.state.Bomb = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        return(
            <div>
                {this.props.secondsLeft} seconds left before I go boom!
            </div>
        )
    }
}
export default Bomb