
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
    state: 'QA IN PROGRESS',
    title: 'Clickstream CEP Incident Alerting',
    status: 'currently testing..'
  },
   {
    key: '2',
    component: 'Door Panel UI',
    number: 'MGLN-6948',
    state: 'BLOCKED',
    title: 'Panel-UI to send location services to Panel-app',
    status: "QA Blocked: Keiver/Jay made a dev build. They have resolved the issue and the panel-app IS receiving the location events. However, due to Jenkins issues (see Notes section), an official build has not been generated as yet. I would prefer to validate against the production build."
}, 
// {
//   key: '3',
//   component: 'Compass: OTT Amazon Firestick',
//   number: 'MGLN-5679',
//   state: 'QA IN PROGRESS',
//   title: 'OV:Fire TV - Create error message for Account Creation and User Login',
//   status:'Pending: Waiting to see if Ed actually needs help on this, if so, I will need to get a knowledge transfer so I can properly test this component. This ticket is currently assigned to Kenny Tang'
// },
{
  key:'4',
  component: 'xiUserVideoAPI',
  number: 'MGLN-7180',
  state: 'DEV COMPLETE',
  title: '500 when trying to unfavorite a series in Ocean View in QA',
  status: 'Changes deployed to DevInt. However, this is currently UNTESTABLE in DevInt due to lack of availability of test-proxy in devInt and lack of availability of xiCMS in DevInt to allow interaction of service through XOS.  Waiting for it to get transitioned to QA in progress'
},
{
  key:'5',
  component: 'XOS',
  number:'MGLN-7168',
  state: 'QA IN PROGRESS',
  title: "'XOS' /applicationschedule/{ContentId} call to support backward compatibility with the dmuOS for digital signage",
  status: 'Currently testing..'
}
// {
//   key:'6',
//   component:'Compass: OTT Apple TV',
//   number: 'MGLN-7072',
//   state: 'QA IN PROGRESS',
//   title: 'OV:Apple TV - No Recent/Favorite Service available',
//   status: ''
// },
// {
//   key:'7',
//   component: 'Compass: OTT Apple TV',
//   number: 'MGLN-6967',
//   state: 'QA IN PROGRESS',
//   title: "OV:Apple TV - Migrate user's favorite and recent",
//   status:''
// },
// {
//   key:'8',
//   component: 'Compass: OTT Apple TV',
//   number: 'MGLN-6966',
//   state: 'QA IN PROGRESS',
//   title: "OV:Apple TV - Recent and Favorites storing and fetching and UI",
//   status:''
// },
// {
//   key:'9',
//   component: 'Compass: OTT Apple TV',
//   number: 'MGLN-6965',
//   state: 'QA IN PROGRESS',
//   title: "OV:Apple TV - Empty recent and favorite UI - string update",
//   status:''
// },
// {
//   key:'10',
//   component: 'Compass: OTT Apple TV',
//   number: 'MGLN-6962',
//   state: 'QA IN PROGRESS',
//   title: "OV:Apple TV - Series Detail Page",
//   status:''
// },
// {
//   key:'11',
//   component: 'OTT-RokuTV-1.2.0',
//   number: 'MGLN-7070',
//   state: 'DEV COMPLETE',
//   title: "OV:Roku TV - No Recent/Favorite Service available",
//   status:''
// }
];

let now = new Date(2018, 5, 14, 16, 0);
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
              <Card>
                <ul>
                  <li>Since I am blocked on all tasks, I am going to help Nithish test <strong>LeftNav2</strong></li>
                  <li>The team is having issues accessing Jenkins. This, along with some environment issues are preventing new builds from being created, and preventing builds from being promoted to the next environment.</li>
                    <li>Regression on <strong>Door Panel UI</strong> will begin when all tickets are closed and a production build is loaded on the door panel.</li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/issues/?jql=filter%20in%20(xt_Magellan_Open_Sprints_In_QA_QA)%20and%20assignee%3Dabullock">Open Issues Assigned To Me</a></li>
                </ul>
                </Card>
            </Card>
        </div>
      );
    }
  }

 
export {Main};
export default Main;
  
