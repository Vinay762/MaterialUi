import {Box, FormControl, FormControlLabel, RadioGroup, Radio} from '@mui/material'
import  {useState} from 'react'

export const MuiRadio = () => {
    const [value, setValue] = useState('')
    console.log(value)
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
  return (
    <Box>
        <FormControl id = 'job-experience-group-label'>
            Years of Experience
        </FormControl>
        <RadioGroup name = 'job'
            aria-labelledby = 'job-experience-group-label'
            value = {value}
            onChange = {handleChange}
            row
        >
            <FormControlLabel control = {<Radio />} label='0-2' value='0-2'/>
            <FormControlLabel control = {<Radio />} label='3-5' value='3-5'/>
            <FormControlLabel control = {<Radio />} label='6-10' value='6-10'/>
        </RadioGroup>
    </Box>
  )
}
