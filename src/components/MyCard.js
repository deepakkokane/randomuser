import React from 'react'

import {Card,CardBody,CardTitle,CardText} from  "reactstrap";
import { FaPhone,FaMapMarkedAlt,FaEnvelope } from "react-icons/fa"
function MyCard({details}) {
    return (
        <Card className="mt-5">
            <CardBody className="text-center"> 
                <img className="rounded-circle img-thumbnail border-danger align-baseline" width="150" height="150" src={details.picture?.large}/>
                <CardTitle>
                    <h1 className="text-primary">
                    <span className="mr-2"  >{details.name?.title}</span>
                    <span >{details.name?.first}</span>
                    <span >{details.name?.last}</span>
                    </h1>
                </CardTitle>

                <CardText>
                    <span>
                        <FaEnvelope className="mr-2"></FaEnvelope>
                        { details.email}
                    </span>
                </CardText>
                <CardText>
                    <span>
                        <FaPhone className="mr-2"></FaPhone>
                        { details.phone}
                    </span>
                </CardText>
                <CardText>
                    <span>
                        <FaMapMarkedAlt className="mr-2"></FaMapMarkedAlt>
                        { details.location?.city}, { details.location?.state}, { details.location?.street?.number}
                    </span>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard
