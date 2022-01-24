import React from 'react'
import {Card,CardBody} from "reactstrap"

function UserCard({user}) {
    return (
       <Card className='text-center mt-3 mb-4'>
            <img src={user.avatar_url} height="350"></img>
            <CardBody>
                <div className='text-primary'>Name:{user.name}</div>
                <div className='text-primary'>Location:{user.location}</div>
                <div className='text-primary'>Bio:{user.bio}</div>
                <div className='text-primary'>Hireable:{user.hireable?"yes":"no"}</div>
                <div className='text-primary'>Followers:{user.followers}</div>



            </CardBody>
       
       </Card>
    )
}

export default UserCard
