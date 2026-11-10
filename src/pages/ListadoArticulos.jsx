import { useState } from 'react'
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
  Chip,
  Button,
  TextField,
  MenuItem,
} from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext.jsx'

// Página que lista el inventario en una tabla, con FILTRO por categoría
function ListadoArticulos() {
  const { articulos } = useInventario()
  const navigate = useNavigate()

  // Estado del filtro de categoría seleccionada ('' = todas)
  const [categoria, setCategoria] = useState('')

  // Categorías únicas presentes en el inventario (para el <select> del filtro)
  const categorias = [...new Set(articulos.map((a) => a.tipo))]

  // Lista derivada: filtra SIN modificar el inventario original.
  // Si no hay categoría seleccionada, muestra todos.
  const articulosFiltrados = categoria
    ? articulos.filter((a) => a.tipo === categoria)
    : articulos

  return (
    <Paper sx={{ p: 4 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ListAltIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
          <Typography variant="h4">Inventario</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          component={RouterLink}
          to="/agregar"
        >
          Nuevo
        </Button>
      </Box>

      <TextField
        label="Filtrar por categoría"
        select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        sx={{ mb: 3, minWidth: 240 }}
      >
        <MenuItem value="">Todas las categorías</MenuItem>
        {categorias.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>

      {articulosFiltrados.length === 0 ? (
        <Typography color="text.secondary">
          No hay artículos para mostrar.
        </Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Nombre</strong></TableCell>
                <TableCell><strong>Marca</strong></TableCell>
                <TableCell><strong>Tipo</strong></TableCell>
                <TableCell align="center"><strong>Stock</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articulosFiltrados.map((articulo) => (
                <TableRow
                  key={articulo.id}
                  hover
                  sx={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/articulo/${articulo.id}`)}
                >
                  <TableCell>{articulo.nombre}</TableCell>
                  <TableCell>{articulo.marca}</TableCell>
                  <TableCell>
                    <Chip label={articulo.tipo} color="secondary" size="small" />
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={articulo.cantidad}
                      color={articulo.cantidad > 0 ? 'success' : 'default'}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Mostrando {articulosFiltrados.length} de {articulos.length} artículos ·
        Haz clic en un artículo para ver su detalle.
      </Typography>
    </Paper>
  )
}

export default ListadoArticulos
