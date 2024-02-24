import {Card,Col} from 'react-bootstrap'
import { Component } from 'react'
export class NewsArticles extends Component
{
    render()
    {
        return(
            <Col lg='6'>
                <Card>
                    <Card.Img src={this.props.articles.urlToImage}></Card.Img>
                    <Card.Body>
                          <Card.Title>{this.props.articles.title}</Card.Title>
                          <Card.Text>{this.props.articles.description}</Card.Text>
                    </Card.Body>
                    <a href={this.props.articles.url} className='btn btn-success'>readmore...</a>
                </Card>

            </Col>
        )
    }
}