import { useState } from "react";

const MyFirstcomponent= (props)=>{
    const [count,setCount] = useState(0)
    console.log(props.myarray);
    const addCounter = ()=>{
        setCount(count+1)
    }
    // const addName = ()=>{
    //    //props - value cant change - functional component - hooks
    //    //state = value can change - class component
    // }
    return(
        <div>
            <h3>
            My First COmponent Created...
            </h3>
            <h4>My Name is -- {props.name} -- {props.id}</h4>
            Counter is : {count}
            <button onClick={addCounter}>Add</button>
        </div>
    )
}

export default MyFirstcomponent;