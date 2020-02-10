import React, { Component } from 'react'

export default class Time extends Component {

    constructor(props) {
        super(props);
        this.state = {
          timer: 0
        };
        setInterval(() => {
            this.setState({ timer: this.state.timer + 1 });
          }, 1000);
            
      }

      
    
      render() {
      
    
        
        return (
          <div>
            <form>
              <input>{}</input>
              <button type = "click">{this.props.label}</button>
              <button type = "reset">{this.props.label1}</button>
            </form>
            <pre>{this.state.timer}</pre>
          </div>
        );
      }
}
