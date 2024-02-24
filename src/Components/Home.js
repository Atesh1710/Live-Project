import {Container,Alert} from 'react-bootstrap'
export default function Home()
{
    return(
        <div>
             <Container className='text-center mt-5'>
                <Alert variant='primary'>News-App</Alert>
             </Container>
             <Container>
                <b>Welcome This Is News App You See/Read all Search News</b>
             </Container>
        </div>
    )
}