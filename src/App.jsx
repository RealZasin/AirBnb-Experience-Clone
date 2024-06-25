// import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from "./data.jsx"

function App() {
  const newCard = data.map(item => {
    return (
    <Card
    key={item.id}
    item={item}
    />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {newCard}
      </section>
    </>
  );
}

export default App
