import { useState, useEffect } from "react";
import { db, au } from "../firebaseConnection"

import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'


function Inicio() {
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [idReceita, setIdReceita] = useState("")
  const [receita, setReceita] = useState("");

  useEffect(() => {
    async function consultarReceitas() {
      const dados = onSnapshot(collection(db, "receitas"), (snapshot) => {
        let listaReceitas = []
        snapshot.forEach((doc) => {
          listaReceitas.push({
            id: doc.id,
            titulo: doc.data().titulo,
            ingredientes: doc.data().ingredientes,
            modoPreparo: doc.data().modoPreparo,
          })
        })
        setReceita(listaReceitas)
      })
    }
    consultarReceitas()
  }, [])

  async function adicionarReceita(){
    await addDoc(collection(db, "receitas"), {
      titulo: titulo,
      ingredientes: ingredientes,
      modoPreparo: modoPreparo,
    }).then(() => {
      setIdReceita("")
      setTitulo("")
      setIngredientes("")
      setModoPreparo("")
    }).catch((error) => {
      console.log(error)
    })
  }

  async function buscarReceita() {
    const receitaReferencia = collection(db, "receitas")
    await getDocs(receitaReferencia).then((snapshot)=> {
      let lista = []
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          ingredientes: doc.data().ingredientes,
          modoPreparo: doc.data().modoPreparo,
        })
      })
      setReceita(lista)
    }).catch((error) => {
      console.log(error)
    })
  }

  async function editarReceita() {
    const dados = doc(db, "receitas", idReceita)

    await updateDoc(dados, {
      titulo: titulo,
      ingredientes: ingredientes,
      modoPreparo: modoPreparo,
    }).then(() => {
      setIdReceita("")
      setTitulo("")
      setIngredientes("")
      setModoPreparo("")
    }).catch((error) => {
      console.log(error)
    })
  }

  async function excluirReceita(id) {
    const dados = doc(db, "recitas", idReceita)

    await deleteDoc(dados).then(() => {
      alert("Receita deletada com sucesso")
    })
  }

  return(
    <div>
      <header/>
      <form id="receita">
        <h3>Nome da receita</h3>
        <p></p>
      </form>
    </div>
  )

}

export default Inicio;