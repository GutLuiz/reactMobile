import React from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
    const navigate = useNavigate();

    const handleRegisterNavigation = () => {
        navigate('/register'); // Redireciona para a página de registro
      };

  return (
    <div>
      <h2>Bem-vindo à página inicial!</h2>

      <div className="login-left">
        <h2>Não tem conta?</h2>
        <p>Crie sua conta agora</p>
        <button className="login-btn" onClick={handleRegisterNavigation}>
          Registrar-se
        </button>
      </div>
    </div>
  );
};

export default Home;
