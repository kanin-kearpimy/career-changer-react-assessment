import React from "react";

const Admin = (props) => {
    return (
        <div id='admin-form'>
            <p id='form-title'><b>Create User Here</b></p>
            <form>
                <input type="text" placeholder="Name" value={props.employee.name || ''} onChange={props.handlerChange} name='name' autoFocus/>
                <input type="text" placeholder="Lastame" value={props.employee.lastname || ''} onChange={props.handlerChange} name='lastname' />
                <input type="text" placeholder="Postion" value={props.employee.position || ''} onChange={props.handlerChange} name='position' />
                <input type="submit" value='Save' onClick={props.handlerSubmit} style={{cursor:"pointer"}} disabled />
            </form>
            <table>
                <tr id='head'>
                    <td>Name</td>
                    <td>Lastname</td>
                    <td>Position</td>
                    <td>Action</td>
                </tr>
                {props.employees.map((employee,i) => {
                    return(<tr key={i+1}>
                        <td>{employee.name}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.position}</td>
                        <td><button className='delete-row' id={i} onClick={props.handlerClick} >delete</button></td>
                    </tr>)
                })}
            </table>
            <button className='delete-all' onClick={props.handlerDelete}>Delete All</button>   
        </div>
    )
}


export default Admin