import React, { useState, useEffect } from "react"
import Hero from "./Hero"
import { PortfolioProvider } from "../context/context";
import { aboutData } from "../data/about.data"
function App() {
  const [hero, setHero] = useState({})
  useEffect(() => {
    setHero({ ...aboutData })
  }, [])
  return (
    <PortfolioProvider value={{ hero }}>
      <Hero />
    </PortfolioProvider>
  )
}

export default App
