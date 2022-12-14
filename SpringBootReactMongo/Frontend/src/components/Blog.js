import React from 'react'
import { Card, CardBody, CardText, CardTitle, Container,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import base_url from '../service/serviceapi'
import { toast } from 'react-toastify'
const Blog = ({blog, update})=>{
    const deletblog =(blogId)=>{
        axios.delete(`${base_url}/delete/${blogId}`).then(
            (response)=>{
                toast.info("!! Blog "+blogId+" Deleted Successfuly !!")
                update(blogId)
            },
            (error)=>{
                toast.error("!! Something went wrong on Server. We are looking at it. !!")
            }

        )
    }


    return (
        <Card body inverse color="info">
            <CardBody>
                <CardTitle className="font-weight-bold">
                    {blog.title}
                </CardTitle>
                <CardText>{blog.content}</CardText>
                <Container>
                    <Link className="btn btn-primary" to={{pathname:"/update", param:blog.blogId}} 
                    style={{marginRight:15+"px"}}>
                        Edit
                    </Link>
                    
                    <Button color="danger" onClick={()=>{
                        deletblog(blog.blogId)
                    }} > 
                        Delete
                    </Button>
                </Container>
            </CardBody>

        </Card>
    )
}
export default Blog