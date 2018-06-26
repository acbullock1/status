
import React from 'react';
import {Table,Icon, Card} from 'antd';

const columns=[
  {
    width:150,
    title: 'Component',
    dataIndex: 'component',
    key: 'component',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => {return a.component.localeCompare(b.component)},
  },
  {
    width:100,
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => {return a.component.localeCompare(b.component)},
    render: text => <a target= "_blank" rel="noopener noreferrer" href={"https://carnival.atlassian.net/browse/"+text}>{text}</a>
  },
  {
    width:200,
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    width:200,
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    filters:[{
      text:"DEV COMPLETE",
      value:"DEV COMPLETE"
    },
    {
      text:"QA IN PROGRESS",
      value: "QA IN PROGRESS"
    },
    {
      text: "BLOCKED",
      value: "BLOCKED"
    }],
    filterMultiple: true,
    onFilter: (value, record) => record.state.indexOf(value) === 0,
    // defaultSortOrder: 'ascend',
    // sorter: (a, b) => {return a.state.localeCompare(b.state)},
  },
  {
    width:200,
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  }
];
const dataSource = [
  {
    key:'2',
    component:'OTT-FireTV-1.1.0',
    number:'MGLN-6533',
    state:'DEV COMPLETE',
    title:'OV:Fire TV - Clickstream update',
    status:'this ticket tracks that EVERY SINGLE EVENT has the correct schema. will need a full list of scenarios (which would ultimately be the regression suite for clickstream-ott'
  },
  {
    key:'3',
    component:'OTT-RokuTV-1.1.0',
    number:'MGLN-6532',
    state:'DEV COMPLETE',
    title:'OV:Roku TV - Clickstream update',
    status:'this ticket tracks that EVERY SINGLE EVENT has the correct schema. will need a full list of scenarios (which would ultimately be the regression suite for clickstream-ott'
  },
  {
    key:'4',
    component:'Compass: OTT Roku',
    number:'MGLN-6156',
    state:'QA IN PROGRESS',
    title:'OV:Roku - Clickstream - API Error',
    status:'Blocking ticket MGLN-7283 is in devint, waiting for Roku to be deployed to devint before being able to test.'
  },
  {
    key:'5',
    component:'Compass: OTT Roku',
    number:'MGLN-6159',
    state:'READY',
    title:'OV:Roku - Clickstream - Endpoint is not available',
    status:'Blocking ticket MGLN-7283 is in devint, waiting for Roku to be deployed to devint before being able to test.'
  },
  {
    key:'6',
    component:'Compass: OTT Roku',
    number:'MGLN-6161',
    state:'READY',
    title:'OV:Roku - Clickstream - Video issue',
    status:'Blocking ticket MGLN-7283 is in devint, waiting for Roku to be deployed to devint before being able to test.'
  },
  {
    key:'8',
    component:'OTT-AppleTV-1.2.0',
    number:'MGLN-6967',
    state:'QA IN PROGRESS',
    title:"OV:Apple TV - Migrate user's favorite and recent",
    status:'sounds like i need to work directly with a dev to simulate the scenario that tests this ticket.'
  },
  {
    key:'9',
    component:'xiOrchistrate',
    number:'MGLN-3257',
    state:'QA IN PROGRESS',
    title:"This ticket is reopened to address the Ocean View requirements for the future journey State Room Access",
    status:'starting this tomorrow'
  }
];

let now = new Date(2018, 5, 26, 12, 34);
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
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/329351879/ClickStream+supplemental+info">Clickstream update page</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/241926493/Fire+TV+Roku+TV+Apple+TV+Stateroom+iOS+and+Android+Clickstream+Events">OTT clickstream specs</a></li>
                    <li><h2>Currently splitting up the "clickstream supplemental info" page into smaller, more manageable tickets.</h2></li>
                    <li>need to add comment to spec stating that we get content VIEW, not content USAGE, upon exiting episode detail</li>
                    <li> need to add comment to spec that we wont be throwing a content view event for entering a collection (its already thrown when you land on the topnav item)</li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/issues/?jql=filter%20in%20(xt_Magellan_Open_Sprints_In_QA_QA)%20and%20assignee%3Dabullock">Open Issues Assigned To Me</a></li>
                </ul>
                
              </Card>
              <br/>
              <Card title="Priorities">
                <ol>
                  <li>Xos</li>
                  <li>Roku</li>
                  <li>Splitting up the 'clickstream update' page</li>
                </ol>
              </Card>
            </Card>
        </div>
      );
    }
  }

 
export {Main};
export default Main;
  
