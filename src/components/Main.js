
import React from 'react';
import {Table,Icon, Card} from 'antd';
import API from '../utils/API';
import Menu from '../menu.pdf'
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
];

let now = new Date(2018, 8, 20, 11, 30);
let lastupdated = now.toDateString() + " - " + now.toLocaleTimeString();
class Main extends React.Component {
  // componentDidMount(){
    
  //   API.getMyOpenIssues().then((data) => {
  //     alert(JSON.stringify(data.response))
  //   },(error)=>{
  //     alert(JSON.stringify(error.errorMessages));
  //   });
  // }
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
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/issues/?filter=40237">Open issues assigned To Me</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="http://10.127.193.99/xiaccess/inventory">Door Panel Inventory (be on DPA wifi)</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={Menu}>Lunch</a></li>
                </ul>
                
              </Card>
              <br/>
              <Card title={<div>Priorities <Icon type="profile"/></div>}>
                <ol>
                  <li>Tickets</li>
                  <li>Optimizing mocha/TR script</li>
                </ol>
              </Card>
            </Card>
        </div>
      );
    }
  }
 
export {Main};
export default Main;
  
