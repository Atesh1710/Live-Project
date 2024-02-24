import {Container,Col,Row,Alert,Form} from 'react-bootstrap'
import { Component } from 'react'
import {NewsArticles} from './NewsArticles'
import { getAllNews } from '../Service/NewsService'

export class Allnews extends Component
{
    constructor()
    {
        super()
        this.state={
            news:[],
            topic:''
        }
    }

    getTopic=(ex)=>{
        this.setState({topic:ex.target.value})
    }
    allNews=async(ex)=>{
        ex.preventDefault()
        const response=await getAllNews(this.state.topic)
        //console.log(response)
        this.setState({news:response.data.articles})
    }
    render()
    {
         return(
            <div>
                 <Container className='text-center mt-5'>
                    <Alert variant='primary'>ViewAllNews</Alert>
                 </Container>
                 <Container className='mt-3'>
                    <Row>
                         <Col lg='6'>
                            <Form onSubmit={this.allNews}>
                                <Form.Group>
                                    <Form.Label>Topic</Form.Label>
                                    <Form.Control type='text' name='topic' onChange={this.getTopic}></Form.Control>
                                </Form.Group>
                                <input type='submit' name='btn' value={'FetchNews'}  className='btn btn-success mt-3'></input>
                            </Form>
                         </Col>
                    </Row>
                 </Container>
                 <Container>
                    <Row>
                        {
                            this.state.news.map((item)=>{
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
}