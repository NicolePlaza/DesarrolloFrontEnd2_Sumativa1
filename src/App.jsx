import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import NavbarSuperior from './components/NavbarSuperior.jsx'
import MenuInferior from './components/MenuInferior.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Contactanos from './pages/Contactanos.jsx'
import AgregarArticulo from './pages/AgregarArticulo.jsx'
import ListadoArticulos from './pages/ListadoArticulos.jsx'
import DetalleArticulo from './pages/DetalleArticulo.jsx'
import Carrito from './pages/Carrito.jsx'

function App() {
  return (
    <Box sx={{ pb: 9}}>
      <NavbarSuperior />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />

          <Route path="/agregar" element={<AgregarArticulo />} />
          <Route path="/inventario" element={<ListadoArticulos />} />

          <Route path="/articulo/:id" element={<DetalleArticulo />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Container>
      <MenuInferior />
    </Box>
  )
}

export default App
