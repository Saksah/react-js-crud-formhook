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
                    props.listaUsuarios.map(user => (
                        <tr key={user.id}>
                            <td>in</td>
                            <td>Username data</td>
                            <td>
                                <button className="button muted-button">Edit</button>
                                <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default UserTable;
