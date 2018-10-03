import React, { Component } from 'react';

class Counter extends Component{
  state = {
    value: this.props.counter.value,
  };


  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  }
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  }

  render(){

    return (
          <React.Fragment>
            <span style ={this.styles} className={this.getBadgeClasses()} > {this.formatCount()} </span>
            <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm m-2"> Increment </button>
            <button onClick ={() => this.props.onDelete(this.props.counter.id)}
             className="btn btn-danger btn-sm m-1"> Delete </button>
            <br/>
          </React.Fragment>
        );
  }

  getBadgeClasses(){
    let classes = "badge m-2 p-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const {value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default  Counter;
