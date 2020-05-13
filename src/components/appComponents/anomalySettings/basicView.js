import React from 'react';
import { Table } from 'reactstrap';

export default((props)=>{
    return(<div className="p-15">
      <Table>
        <thead>
          <tr>
            <th data-field="id">
              Name
            </th>
            <th data-field="name">
              Type
            </th>
            <th data-field="price">
              Time Period
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Alvin
            </td>
            <td>
            <div className="anomalyIcon">
                {/* <Icon left>nights_stay</Icon> */}
                <div>Night Alert</div>
            </div>
            </td>
            <td>
              00 to 23:10
            </td>
          </tr>
          <tr>
            <td>
              Alan
            </td>
            <td>
            <div className="anomalyIcon">
                {/* <Icon left>wb_sunny</Icon> */}
                <div>Morning Alert</div>
            </div>
            </td>
            <td>
            00 to 23:10
            </td>
          </tr>
          <tr>
            <td>
              Jonathan
            </td>
            <td>
            <div className="anomalyIcon">
                {/* <Icon left>nights_stay</Icon> */}
                <div>Night Alert</div>
            </div>
            </td>
            <td>
            00 to 23:10
            </td>
          </tr>
        </tbody>
      </Table>
    </div>)
})