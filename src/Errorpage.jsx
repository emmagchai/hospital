import React from "react";
function Errorpage()
{
    return(
        <>
            <div className="container-fluid text-center" style={{backgroundColor:"black"}}>
                <p className="display-1 text-center text-white">
                <b>Error! 404. 
                The page you are looking is not available</b>

                </p>      
                <br/>
                <img src="https://c.tenor.com/qsthhHhdjsQAAAAC/error-windows.gif" height="300" width="300"/>
                <p className="display-1 text-center text-white">
                    The link may be broken or changed.
                </p> 
            </div>
        </>
    );
}
export default Errorpage;