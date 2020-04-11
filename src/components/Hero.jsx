import React, { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import PortfolioContext from "../context/context"
import Typical from 'react-typical'

const Hero = () => {
  const { hero } = useContext(PortfolioContext)
  const { title, description, greeting, credit } = hero

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <Typical
            steps={[title, 1000, 5000, description, 5000, greeting, 5000, 1000, credit, 5000, 500, '...See ya!']}
            loop={Infinity}
            wrapper="H1"
            className="hero-title"
          />
        </Fade>
      </Container>
    </section>
  )
}

export default Hero
