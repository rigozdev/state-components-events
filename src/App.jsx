import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";


const App = () => {

  const [nombre, setNombre] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  /* manejador del form */
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (

    <>
      {/* form */}
      <div className="general-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Nombre:</label><br />
          {/*
            //! input con prop onChange, type, placeHolder
          */}
          <Input
            style={"input"}
            onChange={e => setNombre(e.target.value)}
            typeInput={"text"}
            nombrePlaceholder={"Nombre"}
            autoComplete={"off"}
          />
          <br />
          <br />
          <label htmlFor="">Password:</label><br />
          <Input
            style={"input"}
            onChange={e => setPass(e.target.value)}
            typeInput={"password"}
            nombrePlaceholder={"Password"}
            autoComplete={"off"}
          />
          <br />
          <br />
          <div className="buttons">
            <Button text={'Limpiar'}></Button>
            {/* 
            //! Operador ternario, evalúa el valor de la pass ingresada de forma "controlada" 
            */}
            {
              pass === '252525' && <Button text={'Ingresar'}></Button>
            }
          </div>


          {

          }
          <p></p>

        </form>
      </div>

    </>


  );
};

export default App;