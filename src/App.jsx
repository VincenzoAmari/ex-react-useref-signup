import React, { useState } from "react";
import "./index.css";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {
  const [nome, setNome] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [specializzazione, setSpecializzazione] = useState("");
  const [anniEsperienza, setAnniEsperienza] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nome.trim() ||
      !user.trim() ||
      !password.trim() ||
      !specializzazione ||
      !anniEsperienza ||
      anniEsperienza <= 0 ||
      !descrizione.trim()
    ) {
      setError("Per favore, compila tutti i campi.");
      return;
    }

    setError("");

    console.log("Dati inviati:", {
      nome,
      user,
      password,
      specializzazione,
      anniEsperienza,
      descrizione,
    });

    setNome("");
    setUser("");
    setPassword("");
    setSpecializzazione("");
    setAnniEsperienza("");
    setDescrizione("");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Form di registrazione</h1>

        <label>Nome completo:</label>
        <input
          className="form-input"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Username:</label>
        <input
          className="form-input"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <label>Password:</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Specializzazione:</label>
        <select
          className="form-select"
          value={specializzazione}
          onChange={(e) => setSpecializzazione(e.target.value)}
        >
          <option value="">-- Seleziona --</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>

        <label>Anni di esperienza:</label>
        <input
          className="form-input"
          type="number"
          value={anniEsperienza}
          onChange={(e) => setAnniEsperienza(e.target.value)}
        />

        <label>Descrizione:</label>
        <textarea
          className="form-textarea"
          value={descrizione}
          onChange={(e) => setDescrizione(e.target.value)}
        />

        {error && <p className="form-error">{error}</p>}

        <button className="form-button" type="submit">
          Invia dati
        </button>
      </form>
    </div>
  );
}

export default App;
