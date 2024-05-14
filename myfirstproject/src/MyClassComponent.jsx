import React, { Component } from 'react'

class MyClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name,
            id:this.props.id,
            count:0
            // name:"abcd",
            // id:201
        }
    }
    
  render() {
    const addName = ()=>{
        this.setState({
            name:"pqr",
            id:202
        })
    }
    return (
      <div>
        <h3>My Classbased Component</h3>
        <h4>My Name is -- {this.state.name} -- {this.state.id}</h4>
        <button onClick={addName}>Change Name</button>
        
        counter is :{this.state.count}  <button onClick={()=>this.setState({count:this.state.count+1})}>Add</button>
      </div>
    )
  }
}
export default MyClassComponent