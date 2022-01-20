import React, { Component } from 'react';
import {mapStateToProps, mapDispatchToProps} from './redux/action'
import { connect } from 'react-redux';

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        // messages: []
        // messages通过props属性访问
      }

    }
    handleChange=(event)=> {
      this.setState({
        input: event.target.value
      });
    }
    submitMessage=()=> {
    if(this.state.input!='')
    {
      this.props.submitNewMessage(this.state.input,this.props.messages.length+1);
      this.setState({
        input: ''
      });
    }
    
    }
    delMessage=(id)=>{
      this.props.delMessage(id)
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input
            value={this.state.input}
            onChange={this.handleChange}/><br/>
          <button onClick={this.submitMessage}>Submit</button>
          
          <ul>
           {this.props.messages.map((messageObj, idx) => {
                return (
                   <li key={idx}>{messageObj.message}<button onClick={()=>this.delMessage(messageObj.id-1)}>Deltete</button></li>
                  
                )
              })
            }
          </ul>
        </div>
      );
    }
  };

// 每个UI组件都要connect
export default connect(mapStateToProps, mapDispatchToProps)(List);

  
