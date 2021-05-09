
import React, { Fragment, useState } from 'react';
import UserTable from './components/UserTable';

function App() {

    const userData = [
        { id: 1, name: 'Yaksha', username: 'Yx' },
        { id: 2, name: 'Melek', username: 'Mx' },
        { id: 3, name: 'Saksa', username: 'Sx' },
    ]

    const [users, setUsers] = useState(userData)

    return (
        <Fragment>
            <div className="container">

                <h1>CRUD App with hooks</h1>

                <div className="flex-row">


                    <div className="flex-large">
                        <h2> Add user</h2>
                    </div>


                    <div className="flex-large">
                        <h2> View user</h2>
                        <UserTable listaUsuarios={users}/>
                    </div>

                </div>

            </div>
        </Fragment>
  );
}

export default App;
