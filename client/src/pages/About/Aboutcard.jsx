import React from 'react';
import "./About.css";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";

function Aboutcard(props) {
    return (
        <Container>
            <Row>
               <div className="card" style={{width: "18rem"}}>
                <img src={props.img} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.bio}</p>
                    <a href={props.linkedinUrl} target="_blank" rel="noreferrer" className="btn btn-dark">LinkedIn</a>
                    <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
                    <a href={props.email} target="_blank" rel="noreferrer" className="btn btn-dark">Email</a>
                </div>
               </div> 
            </Row>
        </Container>
    );
}

export default Aboutcard;