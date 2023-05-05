import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import './form.css'

export const Form = () => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    // : "",
    telefono: "",  
    identificacion: "",
    genero: "",
    alergias:"",
    motivoconsulta:"",
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
    
    <div className="ad-textbox">
{/* <nav>
  <ul>
    <li>home</li>
    <li>home</li>
    <li>home</li>
    <li>home</li>
  </ul>
</nav> */}


      <h1>Agendamiento de citas</h1>
        
   <form className="conteiner" onSubmit={handleForm }>
    
   

    <input className="span" type="text"
    name="nombre"
    value={values.nombre}
    placeholder="Ingrese su nombre"
    onChange={handleInputChange} 
    />



    <input className="span" type="text"
    name="apellido"
    value={values.apellido}
    placeholder="Ingrese su apellido"
    onChange={handleInputChange} 
    />

<input className="span" type="number"
    name="identificacion"
    value={values.identificacion}
    placeholder="Ingrese su numero de identificacion"
    onChange={handleInputChange}
    />

    <input className="span" type="email"
    name="email"
    value={values.email}
    placeholder="Ingrese su email"
    onChange={handleInputChange} 
    />

    
    <input className="span" type="number"
    name="telefono"
    value={values.telefono}
    placeholder="Ingrese su telefono"
    onChange={handleInputChange} />


<input className="span" type="text"
    name="genero"
    value={values.genero}
    placeholder="Ingrese su genero"
    onChange={handleInputChange} 
    
    />

    <input className="span" type="text"
    name="alergias"
    value={values.alergias}
    placeholder="A que medicamento es usted alergico"
    onChange={handleInputChange} 
    />


    <input className="span" type="text"
    name="motivoconsulta"
    value={values.motivoconsulta}
    placeholder="Motivo de consulta"
    onChange={handleInputChange} 
    />
    


</form>

<button>Registrar</button>
</div>
    
  )
}