import React from "react";
import { NavLink } from "react-router-dom";
import Emma from "./Emma.jpg"
import Leslie from "./Leslie.jpeg"
function Doc()
{
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container text-center">
          <h3 style={{color:"red"}}>EXPERTS</h3>
          <h1>Our Doctors</h1>
          </div>
          <br/>
          <div className="card-group">
            <div className="card">
                <div className="card-body text-center">
                <img src={Emma} height="300" width="300"/>
                <h3>Dr.Emma Grace Chai</h3>
                <h5>Orthodontics</h5>
                <NavLink to="/makea" className="btn btn-outline-success" style={{height:"50px",width:"200px",borderRadius:"100px"}}>Make appointment</NavLink>
                </div>
            </div>
            <div className="card">
                <div className="card-body text-center">
                <img src={Leslie} height="300" width="300"/>
                <h3>Dr. Leslie Chai Kim Pau</h3>
                <h5>General Dentistry</h5>
                <NavLink to="/makea" className="btn btn-outline-success" style={{height:"50px",width:"200px",borderRadius:"100px"}}>Make appointment</NavLink>
                </div>
            </div>
            <div className="card">
                <div className="card-body text-center">
                <img src="https://i.pinimg.com/280x280_RS/4e/4f/9a/4e4f9a4e357649de7e855b93d149a014.jpg" height="300" width="300"/>
                <h3>Dr.Dianne Tsen</h3>
                 <h5>General Medicine</h5>
                 <NavLink to="/makea" className="btn btn-outline-success" style={{height:"50px",width:"200px",borderRadius:"100px"}}>Make appointment</NavLink>
                </div>
            </div>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.2098818728166!2d55.408435510954845!3d25.182649311738007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78ea9a86e15f194c!2sAsma%20Residence!5e1!3m2!1sen!2sae!4v1636696470712!5m2!1sen!2sae" width="100%" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            </>
    );
}
export default Doc;