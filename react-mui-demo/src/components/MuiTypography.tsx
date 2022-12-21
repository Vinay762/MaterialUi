import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
    <Typography variant='h1'>h1 Heading</Typography>
    <Typography variant='h2'>h2 Heading</Typography>
    {/* gutter bottom adds margin in the button */}
    <Typography variant='h3' gutterBottom>h3 Heading</Typography>
    <Typography variant='h4'>h4 Heading</Typography>
    <Typography variant='h5'>h5 Heading</Typography>
    <Typography variant='h6'>h6 Heading</Typography>

    <Typography variant='subtitle1'>Sub Title1</Typography>
    <Typography variant='subtitle2'>Sub Title2</Typography>

    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cum corporis quod impedit recusandae a quaerat eaque fugit sint eveniet iusto, laborum officia repudiandae. Rem modi autem hic natus magni?</Typography>
    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi eligendi quos adipisci quas nobis aliquam, officia facere doloremque iusto nisi illum. Delectus sequi, ipsa aut dignissimos amet repudiandae error.</Typography>

    </div>
  )
}
