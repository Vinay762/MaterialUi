import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup} from '@mui/material'
import React, {useState} from 'react'

export const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    console.log(acceptTnC)
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }
  return (
    <Box>
        <Box>
            <FormControlLabel 
                label='I accept terms and conditions'
                control={<Checkbox checked = {acceptTnC} onChange={handleChange} />} 
             />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
