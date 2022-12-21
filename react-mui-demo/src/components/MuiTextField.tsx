import {Stack, TextField, InputAdornment} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useState} from 'react'
// default outlined hota hai

export const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label = 'Name' variant='outlined'/>
            <TextField label = 'Name' variant='filled'/>
            <TextField label = 'Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing = {2}>
            <TextField label = 'Small Secondary' size = 'small' color = 'secondary' />   
        </Stack>
        <Stack direction = 'row' spacing = {2}>
            <TextField label='Form Input' required  value={value} onChange={e => setValue(e.target.value)}
            error = {!value}
            helperText = {
                !value ? 'Required' : 'Do not share your password with anyone'
            }
            />
            <TextField label='Password' type='password' helperText = 'Do Not Share password' disabled/>
            <TextField label='Read Only' InputProps={{readOnly : true}}/>
        </Stack>
        <Stack direction = 'row' spacing = {2}>
            <TextField label = 'Amout' InputProps={{
                startAdornment : <InputAdornment position = 'start'>$</InputAdornment>
            }}/>
            <TextField label = 'Weight'  InputProps={{
                endAdornment : <InputAdornment position = 'end'>Kg</InputAdornment>
            }}/>
            <TextField label = 'Password' InputProps={{
                endAdornment : <InputAdornment position = 'end'><VisibilityIcon/></InputAdornment>
            }}/>
        </Stack>
    </Stack>
  )
}
