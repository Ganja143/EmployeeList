
import list from './EmployeeList.module.css';
import React, { useState, useEffect } from 'react'
import Axios from "axios";
const EmployeeList = () => {

  const [emps, setEmps] = useState([])

  useEffect(() => {

    Axios.get('http://localhost:3002/Employee').then((res) => {

      setEmps(res.data)
      console.log(res)

    })
  }, [])


  return (

    <body>
        <div className={list.flexcontainer}>
            <div className={list.flexrow}>
              <a href="LandingPage"> <div className={list.aboutus}>About-Us</div></a>
              <a href="EmployeeList"><div className={list.staffmembers}>Staff members</div></a>
              <a href="UpdateEmp"><div className={list.staffmembers2}>update members</div></a>
              <a href="/"><div className={list.logout}>Logout</div></a>
            </div>
           
                  <div className={list.overlapgroup6}>
                    <div className={list.rectangle41}></div>
                    <div className={list.oip41}></div> 
                    <div className={list.membersrrect}></div>
                    <h1 className={list.title}>TEAM MEMBERS</h1>
                    
                    {emps.map((val, key) => {
                return (
                    <table className={list.overlapgroup}>
                  
                      <tr><td className={list.rectangle48}></td></tr>
                      <tr><td className={list.rectangle54}></td></tr>
                      <tr><td className={list.name} key="key">{val.Name}{"  "} {val.Surname}</td></tr>
                      <tr><td className={list.age30} >Age: {val.Age}</td></tr>
                     <tr><td  className={list.position} >Position: {val.Position}</td></tr>
                      <img className={list.images11} alt="image11"/>
                      <a href="UpdateEmp"><div className={list.viewprofile}>View Profile</div></a> <button className={list.deleteProfile}>delete</button>
                     
                    </table>
                   
                  )
                })
             }
           
                  </div>
                 
          </div>
    </body >
    )
}
export default EmployeeList;