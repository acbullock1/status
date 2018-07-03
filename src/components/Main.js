
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
    },{
      text:'IN PROGRESS',
      value:'IN PROGRESS'
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
    key:'1',
    component:'OTT-FireTV-1.1.0',
    number:'MGLN-6533',
    state:'QA IN PROGRESS',
    title:'OV:Fire TV - Clickstream update',
    status:'Will test after i close MGLN-6167'
  },
  {
    key:'2',
    component:'OTT-FireTV-1.2.0',
    number:'MGLN-6167',
    state:'IN PROGRESS',
    title:'OV:Fire TV - Video Events',
    status:'reopened - waiting for fix from max'
  },
  {
    key:'3',
    component:'OTT-AppleTV-1.2.0',
    number:'MGLN-6967',
    state:'QA IN PROGRESS',
    title:"OV:Apple TV - Migrate user's favorite and recent",
    status:'sounds like i need to work directly with a dev to simulate the scenario that tests this ticket.'
  },
  {
    key:'5',
    component:'xiOrchistrate',
    number:'MGLN-7214',
    state:'QA IN PROGRESS',
    title:"Create Lookup/mapping for tagalong images",
    status:'will look at this when im done with clickstream'
  },
  {
    key:'6',
    component:'xiOrchistrate',
    number:'MGLN-6884',
    state:'QA IN PROGRESS',
    title:"Folio Call should get all guest-entity guest data in one call",
    status:'will look at this when im done with clickstream'
  },
  {
    key:'7',
    component:'xiOrchistrate',
    number:'MGLN-7337',
    state:'BLOCKED',
    title:"XAP-12-1 : XOS : Modify XOS Cabin Details returnl",
    status:'looking at this now since im waiting on a fire build from max'
  },
  {
    key:'8',
    component:'xiOrchistrate',
    number:'MGLN-1234',
    state:'DEV COMPLETE',
    title:"BLAH ",
    status:'looking at this now since im waiting on a fire build from max'
  }
];

let now = new Date(2018, 6, 3, 13, 51);
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
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="  https://carnival.atlassian.net/browse/MGLN-7213?jql=status%20not%20in%20(%22rejected%22%2C%20%22closed%22%2C%20Verified%2C%20Deferred%2C%20%22open%22%2C%20%22in%20progress%22)%20and%20assignee%3Dabullock">Open Issues Assigned To Me</a></li>
                </ul>
                
              </Card>
              <br/>
              <Card title={<div>Priorities <Icon type="profile"/></div>}>
                <ol>
                  <li>Clickstream OTT</li>
                  <li>XOS</li>
                </ol>
              </Card>
            </Card>
        </div>
      );
    }
  }
 
export {Main};
export default Main;
  
