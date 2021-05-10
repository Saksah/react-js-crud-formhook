import React from 'react';
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {

    console.log(props.userEditar) /* verificando que esta llegando los datos del usuario que he seleccionado y que mostrare en 
                                      este formulario para editarlo */

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
                                                                            defaultValues: props.userEditar /* con esto automaticamente los datos de usuario que voy a editar se mostrarn en los campos,
                                                                                                                no sin antes hacer uso del "setValue() el cual aplico lineas abajo." */
                                                                        });
    setValue('name', props.userEditar.name);
    setValue('username', props.userEditar.username);

    const onSubmit = (data, event) => {
        data.id = props.userEditar.id /* dandole su ID al usuario que estoy editando, caso contrario el usuario se actualizara sin su ID */
        props.updateUser(props.userEditar.id, data);
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
            
            <button type="submit">Edit user</button>
        </form>
    )
}

export default EditUserForm;
