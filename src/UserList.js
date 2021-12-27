import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


export default function UserList() {
    const [listOfUsers, setListOfUsers] = useState([])
    useEffect (() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then (response => {
    setListOfUsers(response.data)
    })
  })
    return (
        <div className="cards">{listOfUsers.map (user => 
            <Card key = {user.id} style={{ width: '18rem' }} className="card">
                <Card.Body>
                    <Card.Title className="name">{user.username}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Name : {user.name}</ListGroupItem>
                    <ListGroupItem>Email : {user.email} </ListGroupItem>
                    <ListGroupItem>Phone : {user.phone}</ListGroupItem>
                    <ListGroupItem>Address : {user.address.street} {user.address.suite}, {user.address.city}</ListGroupItem>
                </ListGroup>
            </Card>)}
    </div>
    )
}
