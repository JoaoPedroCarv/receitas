import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebaseConnection";

function CriarReceita() {
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [receitaCriada, setReceitaCriada] = useState(false);

  const handleCriarReceita = async (e) => {
    e.preventDefault();

    try {
      const novaReceita = {
        titulo,
        ingredientes,
        modoPreparo,
      };

      await addDoc(collection(db, "receitas"), novaReceita);
      setReceitaCriada(true);
      setTitulo("");
      setIngredientes("");
      setModoPreparo("");
    } catch (error) {
      console.error("Erro ao criar a receita:", error);
    }
  };

  return (
    <div>
      <h1>Criar Nova Receita</h1>
      <form onSubmit={handleCriarReceita}>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Ingredientes:
          <textarea
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
          />
        </label>
        <br />
        <label>
          Modo de Preparo:
          <textarea
            value={modoPreparo}
            onChange={(e) => setModoPreparo(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Criar Receita</button>
      </form>

      {receitaCriada && (
        <div>
          <p>Receita criada com sucesso!</p>
          <Link to="/">Voltar para a Lista</Link>
        </div>
      )}
    </div>
  );
}

export default CriarReceita;
