import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConnection";

function ListaTitulosReceitas() {
  const [titulosReceitas, setTitulosReceitas] = useState([]);

  useEffect(() => {
    consultarTitulosReceitas();
  }, []);

  async function consultarTitulosReceitas() {
    onSnapshot(collection(db, "receitas"), (snapshot) => {
      let listaTitulosReceitas = [];
      snapshot.forEach((doc) => {
        listaTitulosReceitas.push({
          id: doc.id,
          titulo: doc.data().titulo,
        });
      });
      setTitulosReceitas(listaTitulosReceitas);
    });
  }

  return (
    <div className="princ">
      <h1>Lista de Receitas</h1>
      <ul className="lista">
        {titulosReceitas.map((receita) => (
          <li key={receita.id} className="titulo">
            <Link to={`/detalhes/${receita.id}`} className="link">
              {receita.titulo}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ListaTitulosReceitas;
