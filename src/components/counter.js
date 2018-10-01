import React, { Component } from 'react';

class Counter extends Component{
  state = {
    count: 0,
    // imageUrl: 'https://picsum.photos/200'
    tags: []
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  }

  renderTags(){
    if (this.state.tags.length === 0) return <p>There are no values! </p>;

    return   <ul> {this.state.tags.map(tag  => <li key ={tag }>{tag}  </li> )} </ul> ;
  }
  render(){

    return (
          <React.Fragment>
            <span style ={this.styles} className={this.getBadgeClasses()} > {this.formatCount()} </span>
            <button className="btn btn-secondary btn-sm">Increment </button>
            {this.state.tags.lenght === 0 && "Please create a new tag!"}
            {this.renderTags()}
          </React.Fragment>
        );
  }

  getBadgeClasses(){
    let classes = "badge m-2 p-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const {count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default  Counter;
