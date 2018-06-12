
import React from 'react';
import {Table,Icon, Card} from 'antd';

const columns=[{
    width:150,
    title: 'Component',
    dataIndex: 'component',
  key: 'component',
  defaultSortOrder: 'ascend',
  sorter: (a, b) => {return a.component.localeCompare(b.component)},
}, {
  width:100,
  title: 'Number',
  dataIndex: 'number',
  key: 'number',
  render: text => <a target= "_blank" rel="noopener noreferrer" href={"https://carnival.atlassian.net/browse/"+text}>{text}</a>
}, {
  width:200,
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
},{
    width:200,
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
}];
const dataSource = [
  // {
  //   key: '1',
  //   component: 'xiCEP',
  //   number: 'MGLN-6812',
  //   title: 'Clickstream CEP Incident Alerting',
  //   status: 'Waiting for this to be in QA environment before testing. (See Notes Section)'
  // },
   {
    key: '1',
    component: 'Door Panel UI',
    number: 'MGLN-6948',
    title: 'Panel-UI to send location services to Panel-app',
    status: "QA Blocked: Keiver/Jay made a dev build. They have resolved the issue and the panel-app IS receiving the location events. However, due to Jenkins issues (see Notes section), an official build has not been generated as yet. I would prefer to validate against the production build."
}, {
  key: '2',
  component: 'Compass: OTT Amazon Firestick',
  number: 'MGLN-5679',
  title: 'OV:Fire TV - Create error message for Account Creation and User Login',
  status:'Pending: Waiting to see if Ed actually needs help on this, if so, I will need to get a knowledge transfer so I can properly test this component.'
},
{
  key:'3',
  component: 'xiUserVideoAPI',
  number: 'MGLN-7180',
  title: '500 when trying to unfavorite a series in Ocean View in QA',
  status: 'straight forward test. Waiting for it to get transitioned to QA in progress'
}];

let now = new Date(2018, 5, 12, 14, 52);
let lastupdated = now.toDateString() + " - " + now.toLocaleTimeString();
class Main extends React.Component {
    render() {
      return (
        <div>
            
            <Card title={<div>Ticket Status   <Icon type="line-chart"/> <br/><strong>Last Updated:</strong>  {lastupdated}</div>}  >
            
              <Table dataSource={dataSource} columns={columns} size="small" scroll={{ x: 480 }}/>
            </Card>
            <br/>
            <br/>
            <Card title={<div>Notes <Icon type="edit"/></div>}>
                <ul>
                  <li>The team is having issues accessing Jenkins. This, along with some environment issues are preventing new builds from being created, and preventing builds from being promoted to the next environment.</li>
                    <li>Regression on <strong>Door Panel UI</strong> will begin when all tickets are closed and a production build is loaded on the door panel.</li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                </ul>
            </Card>
        </div>
      );
    }
  }

 
export {Main};
export default Main;
  
