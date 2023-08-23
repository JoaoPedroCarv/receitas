import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../firebaseConnection";
import '../style.css'

function DetalhesReceita() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    consultarDetalhesReceita(id);
  }, [id]);

  async function consultarDetalhesReceita(id) {
    const receitaDoc = await getDoc(doc(db, "receitas", id));
    if (receitaDoc.exists()) {
      setReceita(receitaDoc.data());
    }
  }

  if (!receita) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="princ">
      <h1>Detalhes da Receita</h1>
      <h2>{receita.titulo}</h2>
      <p>Ingredientes: {receita.ingredientes}</p>
      <p>Modo de Preparo: {receita.modoPreparo}</p>
    </div>
  );
}

export default DetalhesReceita;
