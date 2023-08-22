import { useState, useEffect } from "react";
import { db, au } from "./firebaseConnection";

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

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

function App() {
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [idReceita, setIdReceita] = useState("")

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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

}

export default App;