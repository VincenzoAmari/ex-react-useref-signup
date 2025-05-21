import React, { useMemo, useState } from "react";
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

  const eUserValida = useMemo(() => {
    const chValido = user
      .split("")
      .every(
        (ch) => letters.includes(ch.toLowerCase()) || numbers.includes(ch)
      );
    return chValido && user.trim().length >= 6;
  }, [user]);

  const ePasswordValida = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((ch) => letters.includes(ch)) &&
      password.split("").some((ch) => numbers.includes(ch)) &&
      password.split("").some((ch) => symbols.includes(ch))
    );
  }, [password]);

  const eDescrizioneValida = useMemo(() => {
    return descrizione.trim().length >= 100 && descrizione.trim().length < 1000;
  }, [descrizione]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nome.trim() ||
      !user.trim() ||
      !password.trim() ||
      !specializzazione ||
      !anniEsperienza ||
      anniEsperienza <= 0 ||
      !descrizione.trim() ||
      !eUserValida ||
      !ePasswordValida ||
      !eDescrizioneValida
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
        {user.trim() && (
          <p style={{ color: eUserValida ? "green" : "red" }}>
            {eUserValida ? "username valido" : " inserisci almeno 6 caratteri"}
          </p>
        )}

        <label>Password:</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.trim() && (
          <p style={{ color: ePasswordValida ? "green" : "red" }}>
            {ePasswordValida
              ? "password valido"
              : " inserisci almeno 8 caratteri, ed almeno 1 lettera, numero, 1 simbolo"}
          </p>
        )}

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
        {descrizione.trim() && (
          <p style={{ color: eDescrizioneValida ? "green" : "red" }}>
            {eDescrizioneValida
              ? "descrizione valida"
              : `minimo 100 caratteri massimo 1000 ${
                  descrizione.trim().length
                }`}
          </p>
        )}

        {error && <p className="form-error">{error}</p>}

        <button className="form-button" type="submit">
          Invia dati
        </button>
      </form>
    </div>
  );
}

export default App;
