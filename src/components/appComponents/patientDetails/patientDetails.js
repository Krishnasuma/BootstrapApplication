import React from 'react';
import { Col, Row,Button } from 'reactstrap';

export default((props)=>{
    return(<Row>
        <Col s={12} m={4}>
            {/* <TextInput
                s={12}
                icon={<Icon>perm_identity</Icon>}
                label="Name"
            /> */}
        </Col>
        <Col s={12} m={4}>
            {/* <TextInput
                s={12}
                icon={<Icon>bookmark_border</Icon>}
                label="Patient Id"
            /> */}
        </Col>
        <Col s={12} m={4}>
            {/* <TextInput
                s={12}
                icon={<Icon>date_range</Icon>}
                label="Date of birth"
            /> */}
        </Col>
        <Col s={12} m={4}>
            {/* <TextInput
                s={12}
                icon={<Icon>event_seat</Icon>}
                label="Exit weight"
            /> */}
        </Col>
        <Col s={12} m={4}>
            {/* <TextInput
                s={12}
                icon={<Icon>call</Icon>}
                label="Contact Information"
            /> */}
        </Col>
        <Col s={12} m={4}>
            {/* <TextInput
                s={12}
                icon={<Icon>date_range</Icon>}
                label="Exit Second"
            /> */}
        </Col>
        <Col s={12}>
        <div className="right-align">
            <Button
                node="a"
                small
                style={{
                    marginRight: '5px'
                }}
                waves="light"
            >
                {/* <Icon left>edit</Icon> */}
                Edit</Button>
        </div>
        </Col>
    </Row>)
})