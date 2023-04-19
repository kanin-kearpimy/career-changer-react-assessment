import React from "react";

const User = ({employees}) => {
    return (
        <table>
            <tr id='head'>
                <td>Name</td>
                <td>Lastname</td>
                <td>Position</td>
            </tr>
            {employees.map(employee => {
                return(<tr>
                    <td>{employee.name}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.position}</td>
                </tr>)
            })}
        </table>   
    )
}

export default User