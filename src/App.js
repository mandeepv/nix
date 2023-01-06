import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import LandingPage from "pages/LandingPage"

function App() {
  return (
    <AnimationRevealPage>
      <LandingPage/>
    </AnimationRevealPage>
  )
}

export default App