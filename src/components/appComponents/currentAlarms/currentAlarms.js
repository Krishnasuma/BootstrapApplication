import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Badge, Col, Card, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './currentAlarms.scss';

export default ((props) => {
    const columnDefs = [{
        headerName: "Unit Id",
        field: "unitId",
        sortable: true,
        filter: true,
        resizable: true,
        cellRendererFramework: (params) => {
            return (<Link to="/detail">{params.data.unitId}</Link>)
        }
    }, {
        headerName: "Patient",
        field: "patientName",
        sortable: true,
        filter: true,
        resizable: true
    }, {
        headerName: "Caregiver",
        field: "careGiver",
        sortable: true,
        filter: true,
        resizable: true
    }, {
        headerName: "Alarms",
        field: "alarm",
        sortable: true,
        filter: true,
        resizable: true,
        cellRendererFramework: (params) => {
            return (<span className={params.data.alarm > 5 ? 'dangerText' : 'successText'}>{params.data.alarm}</span>)
        }
    }, {
        headerName: "Time in bed",
        field: "timeInBed",
        sortable: true,
        filter: true,
        resizable: true
    }, {
        headerName: "Exits",
        field: "exits",
        sortable: true,
        filter: true,
        resizable: true
    }, {
        headerName: "Status",
        field: "status",
        sortable: true,
        filter: true,
        resizable: true,
        cellRendererFramework: (params) => {
            return (<Badge
                className={params.data.status === 'Connected' ? 'green white-text customBadge' : 'red white-text customBadge'}
                caption={params.data.status}
            ></Badge>)
        }
    }, {
        headerName: "From date",
        field: "fromDate",
        sortable: true,
        filter: true,
        resizable: true
    }, {
        headerName: "To date",
        field: "toDate",
        sortable: true,
        filter: true,
        resizable: true
    }];
    const rowData = [{
        unitId: "132", patientName: "Celica", careGiver: "John", alarm: 3, timeInBed: "1 hour 10 mins", exits: 2, status: "Connected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "154", patientName: "Mondeo", careGiver: "John", alarm: 10, timeInBed: "0 hour 20 mins", exits: 12, status: "Disconnected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "909", patientName: "Boxter", careGiver: "John", alarm: 4, timeInBed: "2 hour 17 mins", exits: 6, status: "Connected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "132", patientName: "Celica", careGiver: "John", alarm: 10, timeInBed: "1 hour 10 mins", exits: 2, status: "Connected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "154", patientName: "Mondeo", careGiver: "John", alarm: 10, timeInBed: "0 hour 20 mins", exits: 12, status: "Disconnected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "909", patientName: "Boxter", careGiver: "John", alarm: 2, timeInBed: "2 hour 17 mins", exits: 6, status: "Connected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "132", patientName: "Celica", careGiver: "John", alarm: 3, timeInBed: "1 hour 10 mins", exits: 2, status: "Connected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "154", patientName: "Mondeo", careGiver: "John", alarm: 2, timeInBed: "0 hour 20 mins", exits: 12, status: "Disconnected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "909", patientName: "Boxter", careGiver: "John", alarm: 10, timeInBed: "2 hour 17 mins", exits: 6, status: "Connected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "132", patientName: "Celica", careGiver: "John", alarm: 10, timeInBed: "1 hour 10 mins", exits: 2, status: "Connected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "154", patientName: "Mondeo", careGiver: "John", alarm: 10, timeInBed: "0 hour 20 mins", exits: 12, status: "Disconnected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }, {
        unitId: "909", patientName: "Boxter", careGiver: "John", alarm: 1, timeInBed: "2 hour 17 mins", exits: 6, status: "Connected",
        fromDate: "10 Aug 2018", toDate: "13 Sept 2020"
    }]
    const onGridReady = (params) => {
        params.api.sizeColumnsToFit();
    }
    return (<Row>
        <Col s={12}>
            <Card className="white p-0">
                <div className="titleContainer">
                    {/* <Icon small>ac_unit</Icon> */}
                    <div>
                        <div className="panelTitle">Units</div>
                        <div className="panelSubtitle">Information - 24 hours ago</div>
                    </div>
                </div>
                <div
                    style={{
                        height: '420px'
                    }}>
                    <AgGridReact
                        className='fullPageGrid'
                        columnDefs={columnDefs}
                        rowData={rowData}
                        pagination={true}
                        paginationPageSize={10}
                        onGridReady={onGridReady}>
                    </AgGridReact>

                </div>
            </Card>
        </Col>
    </Row>)
})