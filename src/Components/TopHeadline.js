import {Container,Row,Alert} from 'react-bootstrap'
import {getTopHeadLines} from '../Service/NewsService'
import {NewsArticles} from './NewsArticles'
import {useState,useEffect} from 'react'
export default function TopHeadline()
{
    const [news,setNews]=useState([])
    useEffect(()=>{
        async function getData()
        {
            const response=await getTopHeadLines()
            setNews(response.data.articles)
        }
        getData()
    },[])
    return(
        <div>
            <Container className='text-center mt-5'>
                <Alert variant='primary'>Top-Headlines</Alert>
            </Container>
            <Container className='mt-3'>
            <Row>
                {
                    news.map((item)=>{
                        return(
                            <NewsArticles articles={item}></NewsArticles>
                        )
                    })
                }
            </Row>
            </Container>
        </div>
    )
}
