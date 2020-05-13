import React from 'react';
import { Navbar } from '../../commonComponents/navBar';
import Approutes from '../../../routes/approutes';

export default ((props) => {
    return (<>
        <Navbar /><br />
        <div className="container">
            <Approutes />
        </div>
    </>)
})