import React from 'react';
import { Row, Col, Card, Button } from 'reactstrap';

export default ((props) => {
    return (<Row>
        <Col m={6} s={12}>
            <Card className="white anomalyPanel">
                <div className="anomalyPanelTitle">
                <div className="titleContent">
                    {/* <Icon left>access_alarm</Icon> */}
                    <div>Alvin</div>
                </div>
                <div className="panelActions">
                    <Button
                        flat
                        node="button"
                        waves="light"
                    >Edit
                    {/* <Icon left>edit</Icon> */}
                    </Button>
                </div>
                </div>
                <div className="grey-text">
                    <Row>
                        <Col s={12} m={6} className="anomalyType">
                            <div className="typeTitle">Alert Type:</div>
                            <div className="typeBody nightAnomaly">
                                {/* <Icon>nights_stay</Icon> */}
                                <div className="typeContent">Night Alert</div>
                            </div>
                        </Col>
                        <Col s={12} m={6} className="anomalyPriority">
                            <div className="typeTitle">Priority:</div>
                            <div className="typeBody nightAnomaly dangerBorder">
                                {/* <Icon className="red-text">info</Icon> */}
                                <div className="typeContent">High</div>
                            </div>
                        </Col>
                        <Col s={12} m={6}>
                            {/* <TextInput
                                s={12}
                                // icon={<Icon>view_agenda</Icon>}
                                label="Min weight"
                            /> */}
                        </Col>
                        <Col s={12} m={6}>
                            {/* <TextInput
                                s={12}
                                // icon={<Icon>av_timer</Icon>}
                                label="Min weight interval"
                            /> */}
                        </Col>
                        <Col s={12} m={6}>
                            {/* <TextInput
                                s={12}
                                // icon={<Icon>watch_later</Icon>}
                                label="Anomaly From"
                            /> */}
                        </Col>
                        <Col s={12} m={6}>
                            {/* <TextInput
                                s={12}
                                // icon={<Icon>watch_later</Icon>}
                                label="Anomaly To"
                            /> */}
                        </Col>
                        <Col s={12}>
                            {/* <Textarea
                                s={12}
                                // icon={<Icon>question_answer</Icon>}
                            /> */}
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
        <Col m={6} s={12}>
            <Card className="white anomalyPanel">
                <div className="anomalyPanelTitle">
                <div className="titleContent">
                    {/* <Icon left>access_alarm</Icon> */}
                    <div>Alan</div>
                </div>
                <div className="panelActions">
                    <Button
                        flat
                        node="button"
                        waves="light"
                    >Edit
                    {/* <Icon left>edit</Icon> */}
                    </Button>
                </div>
                </div>
                <div className="grey-text">
                    <Row>
                        <Col s={12} m={6} className="anomalyType">
                            <div className="typeTitle">Alert Type:</div>
                            <div className="typeBody morningAnomaly">
                                {/* <Icon>wb_sunny</Icon> */}
                                <div className="typeContent">Morning Alert</div>
                            </div>
                        </Col>
                        <Col s={12} m={6} className="anomalyPriority">
                            <div className="typeTitle">Priority:</div>
                            <div className="typeBody nightAnomaly warningBorder">
                                {/* <Icon className="orange-text">warning</Icon> */}
                                <div className="typeContent orange-text">Medium</div>
                            </div>
                        </Col>
                        <Col s={12} m={6}>
                            {/* <TextInput
                                s={12}
                                // icon={<Icon>view_agenda</Icon>}
                                label="Min weight"
                            /> */}
                        </Col>
                        <Col s={12} m={6}>
                            {/* <TextInput
                                s={12}
                                // icon={<Icon>av_timer</Icon>}
                                label="Min weight interval"
                            /> */}
                        </Col>
                        <Col s={12} m={6}>
                            {/* <TextInput
                                s={12}
                                // icon={<Icon>watch_later</Icon>}
                                label="Anomaly From"
                            /> */}
                        </Col>
                        <Col s={12} m={6}>
                            {/* <TextInput
                                s={12}
                                // icon={<Icon>watch_later</Icon>}
                                label="Anomaly To"
                            /> */}
                        </Col>
                        <Col s={12}>
                            {/* <Textarea
                                s={12}
                                // icon={<Icon>question_answer</Icon>}
                            /> */}
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    </Row>)
})