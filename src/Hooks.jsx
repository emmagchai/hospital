import React,{useState} from "react";
function Hooks()
{
    const state=useState()
    const[count,setCount]=useState(0);
    function Emma()
    {
        setCount(count+1)
    }
    return(
        <>
        <div className="text-center">
                <h1 className="display-1">{count}</h1>
                <button type="button" className="btn btn-success btn-lg" onClick={Emma}>Click here</button>
            </div>
            <h1>STUDENT REGISTRATION FORM</h1>
            <br/>
            <form method="post">
                <label for="fname">First Name: </label>
                <input type="text" name="fname" placeholder="Enter your first name"></input>
                <br/>
            </form>
        

        </>
    );
} 
export default Hooks;