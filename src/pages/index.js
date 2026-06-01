"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PersonagemCard from '../components/PersonagemCard';
import PainelPersonagem from '../components/PainelPersonagem';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [personagens, setPersonagens] = useState([]);
  const [personagemFocado, setPersonagemFocado] = useState(null);

  useEffect(() => {
    fetch('https://the-one-api.dev/v2/character?limit=1000', {
      headers: { 'Authorization': 'Bearer ddE3Q1dmXYehH8svc4Ai' }
    })
    .then(res => res.json())
    .then(data => {
      const ordem = ["Frodo Baggins", "Samwise Gamgee", "Meriadoc Brandybuck", "Peregrin Took", "Gandalf", "Aragorn II Elessar", "Legolas", "Gimli", "Boromir", "Gollum", "Galadriel", "Elrond", "Saruman", "Sauron", "Smaug"];
      setPersonagens(data.docs.filter(p => ordem.includes(p.name)).sort((a, b) => ordem.indexOf(a.name) - ordem.indexOf(b.name)));
    });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.containerPrincipal}>
        <section className={styles.secaoLista}>
          <div className={styles.grid}>
            {personagens.map(p => (
              <PersonagemCard key={p._id} dados={p} onClick={() => setPersonagemFocado(p)} />
            ))}
          </div>
        </section>
        <section className={styles.secaoDetalhes}>
          <PainelPersonagem dadosItem={personagemFocado} />
        </section>
      </main>
      <Footer />
    </>
  );
}