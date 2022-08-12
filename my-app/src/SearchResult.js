import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

function searchResult(props) {
const {
    OWNER_NAME,
    ANUMBER,
    ST_PRE_MOD,
    ST_PRE_DIR,
    ST_PRE_TYP,
    ST_PRE_SEP,
    ST_NAME,
    ST_POS_TYP,
    ST_POS_DIR,
    ST_POS_MOD,
    CTU_NAME,
    STATE_CODE,
    ZIP,
    CO_NAME,
    SALE_VALUE,
} = props.result.attributes;
const addressIsLoaded = Object.keys(props.result).length > 0
const county = addressIsLoaded && "County";
const comma = addressIsLoaded && ",";
const formatPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

    return(
        <main>
            <Card className="App card p-2 m-5 text-center">
                <Card.Body className="card-body ">
                <Card.Text>{OWNER_NAME}</Card.Text>
                <Card.Text>
                    {ANUMBER} {ST_PRE_MOD} {ST_PRE_DIR} {ST_PRE_TYP} {ST_PRE_SEP}{" "}
                    {ST_NAME} {ST_POS_TYP} {ST_POS_DIR}
                    {comma} {ST_POS_MOD} {CTU_NAME}
                    {comma} {STATE_CODE} {ZIP}
                </Card.Text>
                <Card.Text>
                    {CO_NAME} {county}
                </Card.Text>
                <Card.Text>
                    { SALE_VALUE !== null ? ( formatPrice.format(SALE_VALUE) ) : 'No Sale Price'}
                </Card.Text>
                </Card.Body>
            </Card>
        </main>
    )
}

export default searchResult;