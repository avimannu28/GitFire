import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {ListGroup,ListGroupItem} from "reactstrap"

function Repos({repos_url}) {
    const [repo,setRepo]=useState([])
    const fetchRepo = async ()=>{
        const {data} = await axios.get(repos_url)
        setRepo(data)
    }
    useEffect(()=>{fetchRepo()},[repos_url])
    return (
        <div>
            <ListGroup>
                {
                    repo.map(item=>(
                        <ListGroupItem key={item.id}>
                           <a href={item.html_url} target="_blank"> <div className='text-primary'>
                                {item.name}
                            </div></a>
                            <div className='text-secondary'>
                                {item.language}
                            </div>
                            <div className='text-info'>
                                {item.description}
                            </div>
                            
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </div>
    )
}

export default Repos
