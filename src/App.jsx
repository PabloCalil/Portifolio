import '../src/styles/globalStyles.css'
import '../src/styles/reset.css'
import { Header } from "./Components/Header"
import { AboutMe } from './Components/AboutMe'
import { Contacts } from './Components/Contacts'
import { Footer } from './Components/Footer'
import { MyProjects } from './Components/MyProjects'




function App() {

  return (
    <>
    <Header />
    <main>
    <AboutMe />
    <MyProjects />
    <Contacts />
    </main>
    <Footer />
    </>
  )
}

export default App
