import React from 'react';
import { Col, CollapsibleItem, Collapsible, Row } from 'reactstrap';
import { BarChart } from '../../commonComponents/barChart';
import { CareGiverDetails } from '../careGiverDetails';
import { PatientDetails } from '../patientDetails';
import { AnamolySettings } from '../anomalySettings';
import './unitDetail.scss';

// const AccordionHead = (props) => {
//     return (<>
//         <div className="accordionHead">
//             <Icon>{props.icon}</Icon>
//             <div className="accordionTitle">{props.title}</div>
//         </div>
//         <Icon className="accordionArrow">{props.expandIndicator}</Icon>
//     </>)
// }

export default ((props) => {
    return (<Row>
        <p>Test</p>
        {/* <Col s={12} className="white p-0">
            <div className="titleContainer">
                <Icon small>account_circle</Icon>
                <div>
                    <div className="panelTitle">Johnson</div>
                    <div className="panelSubtitle">Unit Id: 1234</div>
                    <div className="infoTitle">20 Aug 2020</div>
                </div>
            </div>
        </Col>

        <Col s={12}>
            <Collapsible accordion>
                <CollapsibleItem
                    expanded={false}
                    header={<AccordionHead icon={'directions_walk'} title={'Weight and Activity'} expandIndicator={'keyboard_arrow_down'} />}
                    node="div"
                >
                <div className="center-align">
                <BarChart />
                </div>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header={<AccordionHead icon={'how_to_reg'} title={'Caregiver Details'} expandIndicator={'keyboard_arrow_down'} />}
                    node="div"
                >
                    <CareGiverDetails />
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header={<AccordionHead icon={'accessible'} title={'Patient Details'} expandIndicator={'keyboard_arrow_down'} />}
                    node="div"
                >
                    <PatientDetails />
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header={<AccordionHead icon={'notifications'} title={'Anomaly Settings'} expandIndicator={'keyboard_arrow_down'} />}
                    node="div"
                >
                    <AnamolySettings />
                </CollapsibleItem>
            </Collapsible>
        </Col> */}
    </Row>)
})