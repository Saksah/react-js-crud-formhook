import React from 'react';
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, event) => {
        /*  console.log(data); */

        props.addUser(data); /* addUser() provnen de App.js lo que hara es agregar un usuario a la lista. */

        event.target.reset(); /* cuando se capture la data, se limpiara el campo */
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
                type="text" 
                name="name"
                {...register('name', {
                    required: true,
                    maxLength:210
                    })
                }
            />
            {errors.name && errors.name.type === "required" && <div>Este campo es requerido</div>}
            {errors.name && errors.name.type === "maxLength" && <div>Solo se permite 20 caracteres como maximo</div>}

            <label>UserName</label>
            <input 
                type="text" 
                name="username" 
                {...register('username', {
                    required: true,
                    maxLength: 20
                    })
                }
            />            
            {errors.username && errors.username.type === "required" && <div>Este campo es requerido</div>}
            {errors.username && errors.username.type === "maxLength" && <div>Solo se permite 20 caracteres como maximo</div>}
            
            <button type="submit">Add new user</button>
        </form>
    )
}

export default AddUserForm;
