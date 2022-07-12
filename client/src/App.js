import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState();
  const handleChangeValues = (value) => {
    setValues ((prevValue)=> ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  const handleClickButton=() =>{
    console.log(values);
  };
  return (
    <div className="app-conteiner">
      <div className="register-container">
        <h1 className='register-title'> Registre-se </h1>
        <input
        type="text"
        name="name"
        className="register-input"
        placeholder='Digite seu nome'
        onChange={handleChangeValues}
        />
        <input
        type="text"
        name="lastname"
        className="register-input"
        placeholder='Digite seu sobrenome'
        onChange={handleChangeValues}
        />
        <button className='register-button'
        onClick={()=> handleClickButton()}
        >
          Cadastrar
        </button>


      </div>
    </div>
  );
}

export default App;
