import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Rinkal"
        }
        console.log('constructor called...'+this.state.name);
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:"Testing..."
            })
        },2000)
        console.log('component did mount called..'+this.state.name);
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerived state from props called...'+state.name);
    }
  render() {
    const handleChange = ()=>{
        this.setState({
            name:"Testdhfgshf"
        })
    }
    console.log('render func calling..');
    return (
      <div>
        <h3>Name is : {this.state.name}</h3>
        <button onClick={handleChange}>Change Name</button>
      </div>
    )
  }
}
export default  Lifecycle;