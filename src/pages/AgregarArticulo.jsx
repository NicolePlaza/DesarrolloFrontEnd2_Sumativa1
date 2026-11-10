import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  Alert,
  Snackbar,
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useInventario } from '../context/InventarioContext.jsx'

// Tipos de producto disponibles para el <select>
const TIPOS = ['Lácteos', 'Abarrotes', 'Bebidas', 'Limpieza', 'Frutas y verduras', 'Carnes']

// Página con el FORMULARIO para ingresar nuevos artículos
function AgregarArticulo() {
  const { agregarArticulo } = useInventario()
  const navigate = useNavigate()

  // Estado local del formulario (inputs controlados)
  const [form, setForm] = useState({ nombre: '', marca: '', tipo: '', cantidad: '' })
  const [error, setError] = useState('')
  const [exito, setExito] = useState(false)

  // Actualiza el campo correspondiente del formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault() // evita que la página se recargue

    // Validación simple: todos los campos obligatorios
    if (!form.nombre.trim() || !form.marca.trim() || !form.tipo) {
      setError('Por favor completa todos los campos.')
      return
    }
    if (!form.cantidad || Number(form.cantidad) < 0) {
      setError('Ingresa una cantidad válida (0 o más).')
      return
    }

    // Guardamos el artículo en el estado global
    agregarArticulo(form)

    // Limpiamos y mostramos confirmación
    setForm({ nombre: '', marca: '', tipo: '', cantidad: '' })
    setError('')
    setExito(true)

    // Redirigimos al listado tras un breve instante
    setTimeout(() => navigate('/inventario'), 1000)
  }

  return (
    <Paper sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <AddCircleIcon color="secondary" sx={{ fontSize: 40, mr: 1 }} />
        <Typography variant="h4">Agregar artículo</Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Nombre del producto"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Marca"
          name="marca"
          value={form.marca}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tipo de producto"
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          select
          fullWidth
          margin="normal"
        >
          {TIPOS.map((tipo) => (
            <MenuItem key={tipo} value={tipo}>
              {tipo}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Cantidad (stock)"
          name="cantidad"
          type="number"
          value={form.cantidad}
          onChange={handleChange}
          fullWidth
          margin="normal"
          inputProps={{ min: 0 }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 2 }}
        >
          Guardar artículo
        </Button>
      </Box>

      <Snackbar
        open={exito}
        autoHideDuration={2000}
        onClose={() => setExito(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success">¡Artículo agregado correctamente!</Alert>
      </Snackbar>
    </Paper>
  )
}

export default AgregarArticulo
