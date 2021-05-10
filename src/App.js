import React, { Fragment, useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid'; /* genera IDs unicos, ejm: a751878b-0148-4c1e-a033-804045fbecfb */
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

    const userData = [
        { id: uuidv4(), name: 'Yaksha', username: 'Yx' },
        { id: uuidv4(), name: 'Melek', username: 'Mx' },
        { id: uuidv4(), name: 'Saksa', username: 'Sx' },
    ]

    const [listUsers, setListUsers] = useState(userData)

    /* agregar usuario */
    const addUser = (user) => {
        user.id = uuidv4(); /* asignando un ID al usuario  */
        setListUsers([ /* añadiendo al usuario dentro de la "lista de usuarios" */
            ...listUsers,
            user
        ])
    }
    /* eliminar usuario */
    const deleteUser = (id) => {                       /* condicion para el filtrado */
        const listaFiltrada = listUsers.filter(elemento => (elemento.id !== id)); /* Si el "ID" de la "lista de usuarios" es diferenite al "ID" que recibe por el parametro de la funcion. entonces
                                                                                     agregarlos en el "filter()", pero si un elemento coincide con el ID que recibe por parametro la funcion,entonces
                                                                                     sera excluida, es decir, eliminada */                  
        setListUsers(listaFiltrada);                                             
    }
    /* editar usuario (solo mostrara el formulario con los datos del usuario que deseo editar)*/
    const [editarForm, setEditarForm] = useState(false); /* para mostrar el formulario de edicion */
    const [userEditar, setUserEditar] = useState({ /* creando objeto vacio */
                                                id: null,
                                                name: '', 
                                                username: '',
                                            })
    const editUser = (user) => {
        setEditarForm(true) /* mostrara el formulario para editar al usuario */
        setUserEditar({ /* tomara los datos del usuario editado y lo guardara en "userEditar" */
            id: user.id,
            name: user.name,
            username: user.username,
        })
    }
    /* actualizar usuario */
    const updateUser = (id, userActualizado) => {
        setEditarForm(false) /* ocultar formulario de edicion */

        setListUsers(listUsers.map(elemento => 
                                    (elemento.id === id) ? userActualizado : elemento
                                       /* condicion */        /* true */   /* false */  
                                    )
                    )
    }
    
    
    return (
        <Fragment>
            <div className="container">
                <h1>CRUD App with hooks</h1>
                <div className="flex-row">
                    <div className="flex-large">
                        {
                            editarForm ? ( /* si editarForm es "TRUE" entonces se motrara el formulario para editar usuario */
                                <div>
                                    <h2> Edit user</h2>
                                    <EditUserForm userEditar={userEditar} updateUser={updateUser}/>
                                </div>
                            ) : (          /* si editarForm es "FALSE" entonces se motrara el formulario para agregar usuario */
                                <div>
                                    <h2> Add user</h2>
                                    <AddUserForm addUser={addUser}/>  {/* paso la funcion addUser() */}
                                </div>
                            )
                        }
                    </div>
                    <div className="flex-large">
                        <h2> View user</h2>
                        <UserTable listaUsuarios={listUsers} deleteUser={deleteUser} editUser={editUser}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default App;
