import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom'
import {
  Paper,
  Typography,
  Box,
  Button,
  Divider,
  Chip,
  Alert,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useInventario } from '../context/InventarioContext.jsx'

// Pantalla de DETALLE de un artículo 
function DetalleArticulo() {
  const { id } = useParams() // id del artículo desde la URL
  const navigate = useNavigate()
  const { obtenerArticulo, agregarAlCarrito } = useInventario()

  const articulo = obtenerArticulo(id)

  // Si el artículo no existe (p. ej. URL inválida)
  if (!articulo) {
    return (
      <Paper sx={{ p: 4 }}>
        <Alert severity="warning">El artículo no existe.</Alert>
        <Button sx={{ mt: 2 }} component={RouterLink} to="/inventario">
          Volver al inventario
        </Button>
      </Paper>
    )
  }

  const sinStock = articulo.cantidad <= 0

  return (
    <Paper sx={{ p: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/inventario')}
        sx={{ mb: 2 }}
      >
        Volver
      </Button>

      <Typography variant="h4" gutterBottom>
        {articulo.nombre}
      </Typography>
      <Chip label={articulo.tipo} color="secondary" sx={{ mb: 2 }} />

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 1 }}>
        <Typography>
          <strong>Marca:</strong> {articulo.marca}
        </Typography>
        <Typography>
          <strong>Tipo:</strong> {articulo.tipo}
        </Typography>
        <Typography>
          <strong>Stock disponible:</strong> {articulo.cantidad} unidades
        </Typography>
      </Box>

      {sinStock && (
        <Alert severity="error" sx={{ my: 2 }}>
          Sin stock disponible.
        </Alert>
      )}

      <Button
        variant="contained"
        size="large"
        startIcon={<ShoppingCartIcon />}
        disabled={sinStock}
        onClick={() => agregarAlCarrito(articulo.id)}
        sx={{ mt: 2 }}
      >
        Agregar al carrito
      </Button>
    </Paper>
  )
}

export default DetalleArticulo
