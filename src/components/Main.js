
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
    component:'xiOrchistrate',
    number:'MGLN-7268',
    state:'QA IN PROGRESS',
    title:"Medallion Accessories Need to return the retail items for Adam Coulton",
    status:'beginning now'
  },
  {
    key:'2',
    component:'xiOrchistrate',
    number:'MGLN-7245',
    state:'QA IN PROGRESS',
    title:'XOS Clickstream API should not validate source fields for the incident events',
    status:'beginning today'
  },
  {
    key:'3',
    component:'xiOrchistrate',
    number:'MGLN-7371',
    state:'QA IN PROGRESS',
    title:'[XOS] Upgrade XOS Kafka Clients',
    status:'Pedro will add a comment and either he or I will close.'
  }
];

let now = new Date(2018, 6, 10, 14, 9);
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
  
