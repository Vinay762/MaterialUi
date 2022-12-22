import { Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {useState} from 'react'

export const MuiAccordian = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange = (isExpanded : boolean, panel : string) => {
        setExpanded(isExpanded ? panel : false)
    }
  return (
    <div>
        <Accordion expanded={expanded === 'panel1'}
        onChange = {(event, isExpanded) => handleChange(isExpanded, 'panle1')}
        >
            <AccordionSummary 
            id='panel1-header'
            aria-controls='panel1-content'
            expandIcon = {<ExpandMoreIcon />}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quidem deleniti doloremque atque accusamus voluptate ut tempore eum? Corrupti aspernatur minima quo mollitia distinctio eum vitae blanditiis! Temporibus, quibusdam excepturi.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'}
        onChange = {(event, isExpanded) => handleChange(isExpanded, 'panle1')}
        >
            <AccordionSummary 
            id='panel2-header'
            aria-controls='panel2-content'
            expandIcon = {<ExpandMoreIcon />}
            
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quidem deleniti doloremque atque accusamus voluptate ut tempore eum? Corrupti aspernatur minima quo mollitia distinctio eum vitae blanditiis! Temporibus, quibusdam excepturi.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'}
        onChange = {(event, isExpanded) => handleChange(isExpanded, 'panle3')}
        >
            <AccordionSummary 
            id='panel3-header'
            aria-controls='panel3-content'
            expandIcon = {<ExpandMoreIcon />}
            
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quidem deleniti doloremque atque accusamus voluptate ut tempore eum? Corrupti aspernatur minima quo mollitia distinctio eum vitae blanditiis! Temporibus, quibusdam excepturi.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
