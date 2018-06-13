
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
  title: 'State',
  dataIndex: 'state',
  key: 'state',
  filters:[{
    text:"DEV COMPLETE",
    value:"DEV COMPLETE"
  },{
    text:"QA IN PROGRESS",
    value: "QA IN PROGRESS"
  },{
    text: "BLOCKED",
    value: "BLOCKED"
  }],
  filterMultiple: true,
  onFilter: (value, record) => record.state.indexOf(value) === 0,
  // defaultSortOrder: 'ascend',
  // sorter: (a, b) => {return a.state.localeCompare(b.state)},
},{
    width:200,
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
}];
const dataSource = [
  {
    key: '1',
    component: 'xiCEP',
    number: 'MGLN-6812',
    state: 'DEV COMPLETE',
    title: 'Clickstream CEP Incident Alerting',
    status: 'Waiting for this to be in QA environment before testing. (See Notes Section)'
  },
   {
    key: '2',
    component: 'Door Panel UI',
    number: 'MGLN-6948',
    state: 'BLOCKED',
    title: 'Panel-UI to send location services to Panel-app',
    status: "QA Blocked: Keiver/Jay made a dev build. They have resolved the issue and the panel-app IS receiving the location events. However, due to Jenkins issues (see Notes section), an official build has not been generated as yet. I would prefer to validate against the production build."
}, {
  key: '3',
  component: 'Compass: OTT Amazon Firestick',
  number: 'MGLN-5679',
  state: 'QA IN PROGRESS',
  title: 'OV:Fire TV - Create error message for Account Creation and User Login',
  status:'Pending: Waiting to see if Ed actually needs help on this, if so, I will need to get a knowledge transfer so I can properly test this component. This ticket is currently assigned to Kenny Tang'
},
{
  key:'4',
  component: 'xiUserVideoAPI',
  number: 'MGLN-7180',
  state: 'DEV COMPLETE',
  title: '500 when trying to unfavorite a series in Ocean View in QA',
  status: 'Changes deployed to DevInt. However, this is current;y UNTESTABLE in DevInt due to lack of availability of test-proxy in devInt and lack of availability of xiCMS in DevInt to allow interaction of service through XOS.  Waiting for it to get transitioned to QA in progress'
},
{
  key:'5',
  component: 'XOS',
  number:'MGLN-7168',
  state: 'DEV COMPLETE',
  title: "'XOS' /applicationschedule/{ContentId} call to support backward compatibility with the dmuOS for digital signage",
  status: 'Straight-forward test; waiting for the ticket to move to QA IN PROGRESS'

}];

let now = new Date(2018, 5, 13, 14, 58);
let lastupdated = now.toDateString() + " - " + now.toLocaleTimeString();
class Main extends React.Component {
    render() {
      return (
        <div>
            
            <Card title={<div>Ticket Status   <Icon type="line-chart"/> <br/><strong>Last Updated:</strong>  {lastupdated}</div>}  >
            
              <Table dataSource={dataSource} columns={columns} size="small" scroll={{ x: 800 }}/>
            </Card>
            <br/>
            <br/>
            <Card title={<div>Notes <Icon type="edit"/></div>}>
                <ul>
                  <li>Since I am blocked on all tasks, I am going to help Nithish test <strong>LeftNav2</strong></li>
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
  
