import { useEffect, useState } from "react"
import Layout from "./Layout"
import Admin from "./Admin"
import User from "./User"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [header,setHeader] = useState('React-Assesment');
  const [employees,setEmployees] = useState(mockEmployees);
  const [employee,setEmployee] = useState({});
  const [isUser, setIsUser] = useState('')
  // const [isFill,setIsFill] = useState(false)

  function handlerChange ({target}){
    const {name,value} = target
    setEmployee((prev)=>({...prev,[name]:value}))
  }

  function setFocus(e){
    e.target.parentNode.children[0].focus()
  }

  // function validateForm(){
  //   if(Object.keys(employee).length === 3){

  //   }else{

  //   }
  // }

  function handlerSubmit (e){
    e.preventDefault()
    setEmployees(prev => [...prev,employee])
    setEmployee({})
    setFocus(e)
  }

  function handlerClick ({target}) {
    const dupEmployee = [...employees]
    dupEmployee.splice(target.id,1)
    setEmployees(dupEmployee)
  }

  function handlerDelete (){
    setEmployees([])
  }
  
  // function handlerClick ({target}) {
  //   const dupEmployee = employees.filter(e=>e.id==!target.id)
  //   const deleted = [...dupEmployee]
  //   setEmployees(deleted)
  // }

  return (
    <Layout>
      <div id='home'>
        <h1>Generation Thailand<br/>{header}</h1>
        <div>
          <button onClick={()=>{setIsUser(true), setHeader('Home - User Sector')}}>User Home Sector</button>
          <button onClick={()=>{setIsUser(false), setHeader('Home - Admin Sector')}}>Admin Home Sector</button>
        </div>
        {isUser === '' ? null 
        : isUser === true ? <User employees={employees} /> 
        : <Admin 
        employees={employees} 
        employee={employee} 
        handlerChange={handlerChange} 
        handlerSubmit={handlerSubmit} 
        handlerClick={handlerClick} 
        handlerDelete={handlerDelete}/>}
      </div>
    </Layout>
  )
}


export default Home
