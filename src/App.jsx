import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Inicio from './pages/Inicio'
import Cursos from './pages/Cursos'
import Parceiros from './pages/Parceiros'
import Transparencia from './pages/Transparencia'
import Modulo from './pages/Modulo'
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Container from "./components/layout/Container"

export default function App() {
  return (
    <Router>
      <NavBar></NavBar>
        <Container>
          <Routes>
            <Route exact path="/" element={<Inicio />} > </Route>
            <Route exact path="/cursos" element={<Cursos />} > </Route>
            <Route exact path="/parceiros" element={<Parceiros />} > </Route>
            <Route exact path="/transparencia" element={<Transparencia />} > </Route>
            <Route path={"/modulo/:id"} element={<Modulo />} > </Route>
          </Routes>
        </Container>
      <Footer></Footer>
    </Router>
  )
}