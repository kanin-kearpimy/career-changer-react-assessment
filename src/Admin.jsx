import { useState } from "react"


const Admin = ({ employees, handleDelete, save }) => {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [position, setPosition] = useState("")

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="name" />
                <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} placeholder="lastname" />
                <input type="text" onChange={(e) => setPosition(e.target.value)} value={position} placeholder="position" />
                <button onClick={() => save(
                    {name, lastname, position}
                )}>save</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.lastname}</td>
                                <td>{item.position}</td>
                                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Admin