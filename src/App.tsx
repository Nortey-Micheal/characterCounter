
import { Navbar } from "./components/navbar"


function App() {
  const navLinks = [
    {label: 'Home', url: '/'},
    {label: 'About', url: '/'},
    {label: 'Service', url: '/'},
    {label: 'Contact Us', url: '/'}
  ]

  return (
    <>
      <Navbar image="src/assets/react.svg" links={navLinks} />

    </>
  )
}

export default App
