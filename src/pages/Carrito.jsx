import {
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Link as RouterLink } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext.jsx'

// Pantalla del CARRITO de compras
function Carrito() {
  const { carrito, articulos, agregarAlCarrito, quitarDelCarrito } =
    useInventario()

  // Total de unidades en el carrito
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0)

  // Devuelve el stock que queda en el inventario para un artículo dado
  const stockDisponible = (id) =>
    articulos.find((a) => a.id === id)?.cantidad ?? 0

  return (
    <Paper sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <ShoppingCartIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
        <Typography variant="h4">Carrito de compras</Typography>
      </Box>

      {carrito.length === 0 ? (
        <Box>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Tu carrito está vacío.
          </Typography>
          <Button variant="contained" component={RouterLink} to="/inventario">
            Ir al inventario
          </Button>
        </Box>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Nombre</strong></TableCell>
                  <TableCell><strong>Marca</strong></TableCell>
                  <TableCell align="center"><strong>Cantidad</strong></TableCell>
                  <TableCell align="center"><strong>Ajustar</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {carrito.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.nombre}</TableCell>
                    <TableCell>{item.marca}</TableCell>
                    <TableCell align="center">{item.cantidad}</TableCell>
                    <TableCell align="center">
                      {/* Disminuir: devuelve 1 unidad al inventario */}
                      <IconButton
                        color="primary"
                        onClick={() => quitarDelCarrito(item.id)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        disabled={stockDisponible(item.id) <= 0}
                        onClick={() => agregarAlCarrito(item.id)}
                      >
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h6" sx={{ mt: 3 }}>
            Total de unidades en el carrito: {totalUnidades}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Al aumentar o disminuir, el stock del inventario se actualiza
            automáticamente.
          </Typography>
        </>
      )}
    </Paper>
  )
}

export default Carrito
