import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CurrentAlarms } from '../components/appComponents/currentAlarms';
import { UnitDetail } from '../components/appComponents/unitDetail';

export default ((props) => {
    return (
        <Switch>
            <Route path='/' exact component={CurrentAlarms} />
            <Route path='/detail' component={UnitDetail} />
        </Switch>
    )
})