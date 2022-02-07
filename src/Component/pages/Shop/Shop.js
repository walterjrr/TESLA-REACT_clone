import React from "react"
import { useForm } from "react-hook-form"

import './Shop.css'

const Shop = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label style={{"margin-right": "20px"}}>Name</label>
        <input {...register("firstName")} />

        <input {...register("lastName")} />
      </div>

      <div>
        <label>E-mail</label>
        <input {...register("email")} />
      </div>

      <div>
        <label>Telefone</label>
        <input {...register("phone")} />
      </div>

      <div>
        <label>Modelo do Carro</label>
        <select {...register("Models")}>
          <option value="Model3">Model3</option>
          <option value="ModelS">Models</option>
          <option value="ModelX">ModelX</option>
          <option value="ModelY">ModelY</option>
        </select>
      </div>
      
      <div className="button-container">
        <label>Enviar</label>
        <input type="submit" />
      </div>

    </form>
  );
}

export default Shop