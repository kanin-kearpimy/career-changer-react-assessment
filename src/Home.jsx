import { useState } from "react"
import User from "./User"
import Admin from "./Admin"

const mockEmployees = {
  id: 0,
  name: "mock",
  lastname: 'mocklastname',
  position: "Mock Position"
}

const Home = () => {
  const [employees, setEmployees] = useState([mockEmployees])
  const [sector, setSector] = useState("")

  const handleDelete = id => {
    setEmployees([...employees.filter(employee => employee.id !== id)])
  }

  const save = (employee) => {
    const newEmployee = {id: employees.length + 1, ...employee}
    setEmployees([...employees, newEmployee])
  }

  return (
    <div>
      <h1>Generation Thailand React - Assessment</h1>
      <div>
        <button onClick={() => setSector("user")}>User Home Sector</button>
        <button onClick={() => setSector("admin")}>Admin Home Sector</button>
        {sector === "user" ? <User employees={employees} /> : sector === "admin" ? <Admin employees={employees} save={save} handleDelete={handleDelete} /> : ""}
      </div>
    </div>
  )
}



export default Home
