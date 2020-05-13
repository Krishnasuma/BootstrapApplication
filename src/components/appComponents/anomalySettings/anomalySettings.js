import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import BasicView from './basicView';
import AdvancedView from './advancedView';
import './anomalySettings.scss';

export default ((props) => {
    const [isBasicView, updatebasicViewStatus] = useState(true);
    return (<div>
        <div className="right-align">
            {isBasicView && <Link to="/detail/advanced-view" onClick={() => updatebasicViewStatus(!isBasicView)}>Advanced View</Link>}
            {!isBasicView && <Link to="/detail" onClick={() => updatebasicViewStatus(!isBasicView)}>Basic View</Link>}
        </div>
        <Switch>
            <Route exact path='/detail' component={BasicView} />
            <Route exact path='/detail/advanced-view' component={AdvancedView} />
        </Switch>
    </div>)
})