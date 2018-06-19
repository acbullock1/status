
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
    component:'OTT-FireTV-1.1.0',
    number:'MGLN-6219',
    state:'QA IN PROGRESS',
    title:'Update C# clickstream library to V2 specifications',
    status:'ETA: today. This is a DEV ticket. Waiting for Maximo to include his proof to the ticket before closing this.'
  },
  {
    key:'2',
    component:'OTT-FireTV-1.1.0',
    number: 'MGLN-6172',
    state: 'QA IN PROGRESS',
    title: 'OV:Fire TV - Clickstream - Service unavailable',
    status: 'Max will cut a build that simulates service error. then i can test'
  },
  {
    key: '3',
    component: 'OTT-FireTV-1.1.0',
    number: 'MGLN-6170',
    state: 'QA IN PROGRESS',
    title:'OV:Fire TV - Clickstream - endpoint fails',
    status:'Max will cut a build that simulates endpoint error. then i can test'
  },
  {
    key:'6',
    component:'OTT-FireTV-1.1.0',
    number:'MGLN-6166',
    state: 'QA IN PROGRESS',
    title: 'OV:Fire TV - Clickstream - Exiting collection/detail page',
    status: 'Max and Will in discussion to see what exactly is expected. there seems to be some confusion/conflicts in the docs/ticket description'
  },
  {
    key: '15',
    component: 'Door Panel UI',
    number: 'MGLN-6948',
    state: 'BLOCKED',
    title: 'Panel-UI to send location services to Panel-app',
    status: "Need panel-app logs from Nytec."
  },
  {
    key:'12',
    component:'OTT-FireTV-1.1.0',
    number:'MGLN-6533',
    state:'DEV COMPLETE',
    title:'OV:Fire TV - Clickstream update',
    status:'this ticket tracks that EVERY SINGLE EVENT has the correct schema. will need a full list of scenarios (which would ultimately be the regression suite for clickstream-ott'
  },
  {
    key:'13',
    component:'OTT-RokuTV-1.1.0',
    number:'MGLN-6532',
    state:'DEV COMPLETE',
    title:'OV:Roku TV - Clickstream update',
    status:'this ticket tracks that EVERY SINGLE EVENT has the correct schema. will need a full list of scenarios (which would ultimately be the regression suite for clickstream-ott'
  },
  {
    key:14,
    component:'guest-journey',
    number:'DM-3984',
    state:'QA IN PROGRESS',
    title:'Guest-Journey - returning incorrect Travel Companions (based on date)',
    status:'need to retest.. low priority right now.'
  }
  
  


];

let now = new Date(2018, 5, 19, 11, 14);
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
                   <li>Regression on <strong>Door Panel UI</strong> will begin when all tickets are closed and a production build is loaded on the door panel.</li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/issues/?jql=filter%20in%20(xt_Magellan_Open_Sprints_In_QA_QA)%20and%20assignee%3Dabullock">Open Issues Assigned To Me</a></li>
                </ul>
                <h3>Reopened tix</h3>
                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6156">MGLN-6156</a> - reopened , userid not populated, errdesc not coming from api, page may be wrong (not sure)</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6159">MGLN-6159</a> - reopened, need scenario in ticket</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6161">MGLN-6161</a> - reopened, need scenario in ticket</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6162">MGLN-6162</a> - reopened, getting negative duration values for content_usage/content_view</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6163">MGLN-6163</a> - reopened, not getting content_usage events for exiting episode detail page</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6164">MGLN-6164</a> - reopened, not getting content_view events for topnav</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6165">MGLN-6165</a> - reopened, not getting appropriate events when landing on episode detail page.</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6168">MGLN-6168</a> - reopened, Max will cut a build that simulates video error. then i can test</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-6169">MGLN-6169</a> - reopened, not getting event when user authentication fails</li>
                  
                </ul>
                </Card>
            </Card>
        </div>
      );
    }
  }

 
export {Main};
export default Main;
  
