import { useState, useEffect } from 'react'
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { useNavigate, useLocation } from 'react-router-dom'

function MenuInferior() {
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = useState(location.pathname)

  useEffect(() => {
    setValue(location.pathname)
  }, [location.pathname])

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, nuevaRuta) => {
          setValue(nuevaRuta)
          navigate(nuevaRuta) 
        }}
      >
        <BottomNavigationAction label="Inicio" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Quiénes somos"
          value="/quienes-somos"
          icon={<InfoIcon />}
        />
        <BottomNavigationAction
          label="Contáctanos"
          value="/contactanos"
          icon={<ContactMailIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default MenuInferior
