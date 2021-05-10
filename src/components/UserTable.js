import React from 'react';

const UserTable = (props) => {

    console.log(props.listaUsuarios) /* proviene de App.js */

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.listaUsuarios.length > 0 ? /* si la cantidad de usuarios es mayor a 0: */
                        props.listaUsuarios.map(elemento => ( /* primer caso de la conficion */
                            <tr key={elemento.id}>
                                <td>{elemento.id} - {elemento.name}</td>
                                <td>{elemento.username}</td>
                                <td>
                                    <button className="button muted-button" onClick={() => {props.editUser(elemento)}}>Edit</button>
                                    <button className="button muted-button" onClick={() => {props.deleteUser(elemento.id)}}>Delete</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={3}>No existen usuarios</td> {/* segundo caso de la condicion */}
                            </tr>
                        )
                }
            </tbody>
        </table>
    )
}

// FORMA 1: se dispara cuando se renderiza
// {props.deleteUser}

// FORRMA 2: no se dispara cuando se renderiza, esta a la espera de evento click
// {() => {props.deleteUser}}


export default UserTable;
