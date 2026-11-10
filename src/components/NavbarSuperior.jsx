import { AppBar, Toolbar, Typography, Button, Box, Badge, IconButton } from '@mui/material'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext.jsx'

function NavbarSuperior() {
  const location = useLocation()
  const { carrito } = useInventario()

  const totalCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0)


  const estaActiva = (ruta) => location.pathname === ruta

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Inventory2Icon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Supermercado · Inventario
        </Typography>

        <Box>
          <Button
            component={RouterLink}
            to="/agregar"
            color="inherit"
            sx={{ fontWeight: estaActiva('/agregar') ? 700 : 400 }}
          >
            Agregar artículo
          </Button>
          <Button
            component={RouterLink}
            to="/inventario"
            color="inherit"
            sx={{ fontWeight: estaActiva('/inventario') ? 700 : 400 }}
          >
            Ver inventario
          </Button>
          <IconButton component={RouterLink} to="/carrito" color="inherit">
            <Badge badgeContent={totalCarrito} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarSuperior
