import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material'

export const MuiCards = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia 
            component='img'
            height = '140'
            image = 'https://source.unsplash.com/random'
            alt = 'unsplash Image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    React
                </Typography>
                <Typography variant='body2' color='text.seconday'>
                    React is a Javascript library for building user interfaces. React 
                    can be used as a base in the development o single-page or mobile 
                    applications.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size = 'small'>Share</Button>
                <Button size = 'small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
