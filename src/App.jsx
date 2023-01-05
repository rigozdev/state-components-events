import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";


const credentials = {
  passW: '252525'
};

const App = () => {

  const [nombre, setNombre] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* manejador boton submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (nombre.trim() === "" || nombre.trim().length < 2) {      
      return setError("Ingrese nombre válido");
    } else if (nombre.trim() === "" || pass.trim() === "") {
      return setError("Ingrese nombre válido");
    } else {
      return setSuccess("Ingreso exitoso");
    }
  };

  return (

    <>
      <header className="header-container">
        <h1 className="header-title"><b>Login</b></h1>
      </header>
      {/* form */}
      <div className="general-container">
        <form onSubmit={handleSubmit}>
          <div className="info">
            <abbr title="Psst! La clave es 75/3, 3 veces y asegurese de ingresar más de 2 caracteres en el nombre"><i className="fa-solid fa-circle-info"></i></abbr>
          </div>
          <label htmlFor="">Nombre:</label><br />
          {/*
            //! input con prop onChange, type, placeHolder
          */}
          <Input
            style={"input"}
            onChange={e => setNombre(e.target.value)}
            typeInput={"text"}
            nombrePlaceholder={"Ingresa un texto"}
            autoComplete={"off"}
          />
          <br />
          <br />
          <label htmlFor="">Contraseña:</label><br />

          {/* input con prop onChange, type, placeHolder */}
          <Input
            style={"input"}
            onChange={e => setPass(e.target.value)}
            typeInput={"password"}
            nombrePlaceholder={"Ingresa una contraseña"}
            autoComplete={"off"}
          />
          <br />
          <br />
          {/* Mensaje que se muestra en caso que el nombre sea menor a 2 letras o esté vacío */}
          {
            nombre.length < 2 || nombre.length == "" ? <p>{error}</p> : <p>{success}</p>
          }
          <br />
          <br />
          <div className="buttons">

            {/* botón que resetea los valores de los input  */}
            <Button typeB={"reset"} styleButton={"btn btn-primary btn-sm"} text={'Limpiar'}></Button>

            {/* Operador ternario, evalúa el valor de la pass ingresada de forma "controlada", muestra botón en caso de escribir clave correcta*/}
            {
              nombre.trim() !== "" && pass === credentials.passW ? <Button typeB={"submit"} styleButton={"btn btn-success btn-sm"} text={'Ingresar'}></Button> : null
            }
          </div>
        </form>
      </div>

    </>


  );
};

export default App;