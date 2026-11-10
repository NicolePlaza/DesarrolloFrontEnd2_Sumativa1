import { Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function Contactanos() {
  return (
    <Paper sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <ContactMailIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
        <Typography variant="h4">Contáctanos</Typography>
      </Box>

      <Typography paragraph>
        ¿Tienes dudas o sugerencias? Puedes comunicarte con nosotros a través de
        los siguientes canales de atención:
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Teléfono" secondary="+56 2 2345 6789" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="Correo electrónico"
            secondary="contacto@supermercado.cl"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="Dirección"
            secondary="Av. Siempre Viva 742, Santiago, Chile"
          />
        </ListItem>
      </List>
    </Paper>
  )
}

export default Contactanos
