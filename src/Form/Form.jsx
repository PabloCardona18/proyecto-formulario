import { useState } from "react";
import './form.css'

export const Form = () => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",  
    address: "",
    reference: "",
  });
  

  const handleInputChange = (event) =>{
    const {name, value} = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (event) =>{
    event.preventDefault();
    console.log(values);
  };


  return(
    <div>
   <form onSubmit={handleForm }>
    <h1>Form</h1>

    <input type="text"
    name="name"
    value={values.name}
    placeholder="Ingrese su nombre"
    onChange={handleInputChange} 
    />

    <input type="text"
    name="lastName"
    value={values.lastName}
    placeholder="imgrese su apellido"
    onChange={handleInputChange} 
    />

    <input type="email"
    name="email"
    value={values.email}
    autoComplete="ingrese su email"
    onChange={handleInputChange} 
    />

    <input type="password"
    name="password"
    value={values.password}
    placeholder="ingrese su contraseña"
    onChange={handleInputChange} 
    />

    <input type="text"
    name="phone"
    value={values.phone}
    placeholder="ingrse su telefono"
    onChange={handleInputChange} />

    <input type="text"
    name="address"
    value={values.address}
    placeholder="ingrese su dirrecion"
    onChange={handleInputChange} 
    />

    <input type="text"
    name="reference"
    value={values.referenceñ}
    placeholder="ingrese una referencia"
    onChange={handleInputChange}
    />

    <button type="submit">send data</button>
   
   </form>

    </div>
  )
}