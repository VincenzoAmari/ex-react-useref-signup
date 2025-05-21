import React, { useState } from "react";

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
      !descrizione.trim()
    ) {
      setError("Per favore, compila tutti i campi.");
      return;
    }

    if (isNaN(anniEsperienza) || parseInt(anniEsperienza) <= 0) {
      setError("Gli anni di esperienza devono essere un numero positivo.");
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
    <div>
      <h1>Form di registrazione</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome completo:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>Username:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Specializzazione:</label>
          <select
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
            type="number"
            value={anniEsperienza}
            onChange={(e) => setAnniEsperienza(e.target.value)}
          />

          <label>Descrizione:</label>
          <textarea
            value={descrizione}
            onChange={(e) => setDescrizione(e.target.value)}
          />
        </div>

        <button type="submit">Invia dati</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
