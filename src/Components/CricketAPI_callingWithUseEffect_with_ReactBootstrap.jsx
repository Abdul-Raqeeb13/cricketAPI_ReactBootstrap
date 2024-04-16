import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CricketAPI() {

    let [match, setMatch] = useState([])

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                // console.log(response.data.response.items);
                setMatch(response.data.response.items)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])
    return (
        <>
        <div className="container-fluid bg-success">

            <div className="container pt-5">
                <div className="row">
                    {
                        match.map((v, i) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 text-center">
                                    <Card className="h-100">
                                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                        <Card.Body>
                                            <Card.Title>{v.title}<sub className="ms-3"> <span> {v.subtitle}</span></sub></Card.Title>
                                            <Card.Text>
                                                <p><b>Venue</b> : {v.venue.name}</p>
                                                <p>{v.toss.text}</p>
                                                <h6>{v.status_note}</h6>
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>

        </>
    )
}

export default CricketAPI