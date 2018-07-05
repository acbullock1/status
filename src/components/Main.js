
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
    component:'OTT-AppleTV-1.2.0',
    number:'MGLN-6967',
    state:'BLOCKED',
    title:"OV:Apple TV - Migrate user's favorite and recent",
    status:'blocked against DM-8381. See Notes section.'
  },
  {
    key:'2',
    component:'xiOrchistrate',
    number:'MGLN-7214',
    state:'QA IN PROGRESS',
    title:"Create Lookup/mapping for tagalong images",
    status:'testing in progress.. should finish by tomorrow'
  },
  {
    key:'4',
    component:'xiOrchistrate',
    number:'MGLN-7337',
    state:'BLOCKED',
    title:"XAP-12-1 : XOS : Modify XOS Cabin Details return",
    status:'blocked against DM-8379. See Notes section.'
  },
  {
    key:'5',
    component:'OTT-FireTV-1.2.0',
    number:'MGLN-6627',
    state:'QA IN PROGRESS',
    title:"OV:Fire TV - Migrate user's favorite and recent",
    status: 'need to work directly with Max..'
  }
];

let now = new Date(2018, 6, 5, 15, 6);
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
                    <li>MGLN-6967 is currently blocked by <a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/DM-8381">DM-8381</a></li>
                    <li>MGLN-7337 is currently blocked by <a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/DM-8379">DM-8379</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="  https://carnival.atlassian.net/browse/MGLN-7213?jql=status%20not%20in%20(%22rejected%22%2C%20%22closed%22%2C%20Verified%2C%20Deferred%2C%20%22open%22%2C%20%22in%20progress%22)%20and%20assignee%3Dabullock">Open Issues Assigned To Me</a></li>
                </ul>
                
              </Card>
              <br/>
              <Card title={<div>Priorities <Icon type="profile"/></div>}>
                <ol>
                  <li>Closing tickets</li>
                </ol>
              </Card>
            </Card>
        </div>
      );
    }
  }
 
export {Main};
export default Main;
  
