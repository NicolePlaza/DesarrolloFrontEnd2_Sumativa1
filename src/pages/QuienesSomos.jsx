import { Paper, Typography, Box } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'

function QuienesSomos() {
  return (
    <Paper sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <StorefrontIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
        <Typography variant="h4">Quiénes somos</Typography>
      </Box>

      <Typography paragraph>
        Somos una cadena de supermercados comprometida con ofrecer productos de
        calidad a precios justos. Desde nuestros inicios, trabajamos para
        acercar a las familias todo lo que necesitan en un solo lugar.
      </Typography>
      <Typography paragraph>
        Nuestra misión es brindar una experiencia de compra cómoda y confiable,
        apoyada en un sistema moderno de gestión de inventario que nos permite
        mantener siempre el stock disponible para nuestros clientes.
      </Typography>
      <Typography paragraph>
        Creemos en el trato cercano, el compromiso con la comunidad y la mejora
        continua de nuestros procesos.
      </Typography>
    </Paper>
  )
}

export default QuienesSomos
