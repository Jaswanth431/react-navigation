import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'


const buttonMainSx= {
    color: '#1976d2',
     backgroundColor: 'white',
     ml:'20px',
     "&:hover":{
            color:'#197d2',
            backgroundColor:'white'
     }
}

const buttonSecondary = {
    color:'white',
    ml:'20px'
}
const Navigation = () => {
  return (
        <AppBar >
            <Toolbar>
                    <Typography  variant='h5' sx={{flexGrow:1}}>Navigation</Typography>
                    <Button href="#"  sx={buttonSecondary} variant='text'>Home</Button>
                    <Button href="#"  sx={buttonSecondary} variant='text'>About us</Button>
                    <Button href="#"  sx={buttonSecondary} variant='text'>Contact us</Button>
                    <Button href="#"  sx={buttonSecondary} variant='text'>Careers</Button>
                    <Button href="#" sx={buttonMainSx}  variant='contained' >Login</Button>
                    <Button href="#" sx={buttonMainSx}  variant='contained' >Signup</Button>    

            </Toolbar>
        </AppBar>
  )
}

export default Navigation