import sap from'./StyleReg.module.css'
import React, { useState } from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';



function Register(){

   const [Names, setFullNames] = useState("");
   const [Number, setCellNumber] =useState(0); 
   const [Uname, setUsername] = useState("");
   const [Pword, setPassword] = useState("");

   const addUser = async ()=> {
    // this function was used to call the data when the button was clicked
    
      const k = await Axios.post("http://localhost:3002/register",
      {
          FullNames:Names,
          cellNumber:Number,
          Username:Uname,
          password:Pword

          
    
    });

    console.log(k)
   }
   
    return(
        <body>

        <div className={sap.flex}>
           
              <img className={sap.bergin3} src="bergin-bottle-collage-sm-3.png" alt='bergin-bottle-collage'/>
              <div className={sap.rectangle24}></div>
             
              
              <h1 className={sap.sparkywines}>SPARKY<br />Wines.</h1>
              <div className={sap.creating}>Creating the greatest of dinner moments, <br />Great Wine for everyone..</div>
              <div className={sap.rectangle26}></div>
             
             
              <div>
                <div className={sap.flexitem}>
    
                    <div  className={sap.flexitemfname}>

                      <div className={sap.signin}>Register</div>
    
                        <tr><td className={sap.FN}>Full Names:</td><td><input type="text" className={sap.dea}   name="txt_name" onChange={(event) => {setFullNames(event.target.value);}}/></td></tr>
                        <tr><td className={sap.FO}>Cell Number:</td><td><input type="number" className={sap.see} name="txt_number" onChange={(event) => {setCellNumber(event.target.value);}}/></td></tr>
                        <tr><td className={sap.FF}>Username:</td><td><input type="email" className={sap.saw} name="txt_number" onChange={(event) => {setUsername(event.target.value);}}/></td></tr>
                        <tr><td className={sap.FG}>Password:</td><td><input type="password" className={sap.sai} name="txt_number" onChange={(event) => {setPassword(event.target.value);}}/></td></tr> 
                        <Link to="EmployeeList"><button className={sap.rectangle33} id="register" onClick={addUser}>Submit </button></Link>
                        
                   </div>
            </div>
          </div>
          </div>
          
    </body>
    )
}
  export default Register;