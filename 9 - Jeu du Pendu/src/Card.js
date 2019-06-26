import React from 'react'
import './Card.css'

const Card = (props) => (
    <div className="card">{props.children}</div>
)

const CardHeader = (props) => (
    <div className="card-header">{props.children}</div>
)

const CardBody = (props) => (
    <div className="card-body">{props.children}</div>
)

const CardFooter = (props) => (
    <div className="card-footer">{props.children}</div>
)

export {Card, CardHeader, CardBody, CardFooter}