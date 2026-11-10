import { Box, Typography, Paper, Grid, Button } from '@mui/material'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Link as RouterLink } from 'react-router-dom'

// Página principal (home) del aplicativo
function Home() {
  return (
    <Box>
      <Paper sx={{ p: 4, mb: 3, textAlign: 'center' }}>
        <Inventory2Icon color="primary" sx={{ fontSize: 60 }} />
        <Typography variant="h4" gutterBottom>
          Sistema de Gestión de Inventario
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Bienvenido al panel de administración del inventario de nuestro
          supermercado. Desde aquí puedes registrar nuevos productos y revisar
          el stock disponible.
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <AddCircleIcon color="secondary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" gutterBottom>
              Agregar artículos
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Registra un nuevo producto indicando nombre, marca y tipo.
            </Typography>
            <Button variant="contained" component={RouterLink} to="/agregar">
              Ir a agregar
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <ListAltIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" gutterBottom>
              Ver inventario
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Consulta en una tabla todos los artículos disponibles.
            </Typography>
            <Button variant="outlined" component={RouterLink} to="/inventario">
              Ver inventario
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
