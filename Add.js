import addition from './Add.module.css';
import Axios from 'axios';
import { useState } from 'react';

const Add=()=>{

    
    const [name, setName] = useState("");
    const [age, setAge] =useState(0); 
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState(0);
    const [position, setPosition] = useState("");

    const workers = async ()=> {
        // this function was used to call the data when the button was clicked
        
          const k = await Axios.post("http://localhost:3002/add",
          {
            Name:name,
            Age:age,
            Surname:surname,
            Phone:phone,
            Position:position
    
              
        
        });
        console.log(k)
    }

    return(

<body>  

    <div className={addition.shem}>  

        <div className={addition.add1}>  
            <center> <h1>EMPLOYEE ADDITION</h1> </center>  
            
            <div>
                <label>Select a file:</label>
            
                <input  className={addition.input} type="file" id="myfile"  name="myfile" multiple="multiple" /> 
                
            </div> 
            
            <label> Firstname </label>   
            <input  className={addition.input} type="text" name="firstname" placeholder= "Firstname" size="15" required  onChange={(event) => {setName(event.target.value);}} />   
            <label> Lastname: </label>   
            <input  className={addition.input} type="text" name="lastname" placeholder="Lastname"size="15" required   onChange={(event) => {setSurname(event.target.value);}}/>   
            <label> Age: </label>    
            <input  className={addition.input} type="number" name="age" placeholder="Enter Age" size="3"required   onChange={(event) => {setAge(event.target.value);}}/>    
            <label>   
            Phone :  
            </label>  
            <input  className={addition.input} type="text" name="phone" placeholder="phone no." size="8" required  onChange={(event) => {setPhone(event.target.value);}}/> 
            
            <label><b>Position</b></label>  
            <input  className={addition.input} type="text" placeholder="Enter post" name="position" required    onChange={(event) => {setPosition(event.target.value);}} />  
            
            <button  className={addition.registerbtn} onClick={workers}>ADD EMPLOYEE</button> 
            
        </div>
    </div>  
</body>  

    )
}
  export default Add;