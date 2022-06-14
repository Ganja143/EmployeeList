import update from './UpdateEmp.module.css';


function UpdateEmp(){
 
    
    return(

<body>  

    <form className={update.shemfane}>  

        <div className={update.Socontainer}>  
            <center> <h1>EMPLOYEE ADDITION</h1> </center>  
            
            <div>
                <label for="myfile">Select a file:</label>
            
                <input  className={update.input} type="file" id="myfile"  name="myfile" multiple="multiple" /> 
                
            </div> 
            
            <label> Firstname </label>   
            <input  className={update.input} type="text" name="firstname" placeholder= "Firstname" size="15" required />   
            <label> Lastname: </label>   
            <input  className={update.input} type="text" name="middlename" placeholder="Middlename" size="15" required />   
            <label> Age: </label>    
            <input  className={update.input} type="number" name="age" placeholder="your age" size="15"required />   
            <label>   
            Phone :  
            </label>  
            <input  className={update.input} type="text" name="phone" placeholder="phone no." size="10" required/> 
            
            
            
            <label><b>Position</b></label>  
            <input  className={update.input} type="text" placeholder="Enter post" name="Post" required/>  
            
            <button  type="submit" className={update.registerbtn}>update EMPLOYEE</button> 
            
        </div>
    </form>  
</body>  

    )
}
  export default UpdateEmp;