import React, { Fragment, useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid'; /* genera IDs unicos, ejm: a751878b-0148-4c1e-a033-804045fbecfb */
import AddUserForm from './components/AddUserForm';

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
    
    
    return (
        <Fragment>
            <div className="container">

                <h1>CRUD App with hooks</h1>

                <div className="flex-row">


                    <div className="flex-large">
                        <h2> Add user</h2>
                        <AddUserForm addUser={addUser}/> {/* paso la funcion addUser() */}
                    </div>


                    <div className="flex-large">
                        <h2> View user</h2>
                        <UserTable listaUsuarios={listUsers} deleteUser={deleteUser}/>
                    </div>

                </div>

            </div>
        </Fragment>
  );
}

export default App;
