
import React from 'react';
import {Table,Icon, Card} from 'antd';
import API from '../utils/API';
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
    number:'MGLN-7272',
    state:'QA IN PROGRESS',
    title:'[XOS] v2 folio, add support for new fields generated by lodging task',
    status:'looking at this today'
  },
  {
    key:'2',
    component:' xiOrchistrate',
    number:'MGLN-7417',
    state:'QA IN PROGRESS',
    title:"XOS endpoint for xi-access-panel's startup",
    status:""
  },
  {
    key:'4',
    component:'OceanView: Android, OceanView: iOS',
    number:'MGLN-7215',
    state:'QA IN PROGRESS',
    title:'OceanView Mobile - Environment Scan on OceanView Mobile',
    status:''
  },
  {
    key:'5',
    component:'OceanView: Android, OceanView: iOS',
    number:'MGLN-7184',
    state:'QA IN PROGRESS',
    title:'OceanView Mobile - Chromecast - Enable the Ability for the Guest to Cast a Content through Chromecast',
    status:''
  },
  {
    key:'6',
    component:'OceanView: Android, OceanView: iOS',
    number:'MGLN-7181',
    state:'QA IN PROGRESS',
    title:'OceanView Mobile - Closed Captions - Subtitles',
    status:''
  },
  {
    key:'7',
    component:' OceanView: Android, OceanView: iOS ',
    number:'MGLN-7327',
    state:'QA IN PROGRESS',
    title:'OceanView Mobile - Chromecast - Detail Expanded',
    status:''
  },
  {
    key:'8',
    component:'xiOrchistrate',
    number:'MGLN-7349',
    state:'QA IN PROGRESS',
    title:'Address: DM-8236 TV Episode Publish Event Not Showing up',
    status:''
  }

];

let now = new Date(2018, 6, 24, 12, 20);
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
                    <li><strong>Blocked on Xos tix: xos down in devint due to performance testing</strong></li>
                    <li><strong>Blocked on OVM tix: dont know iphone apple creds, android phone bricked</strong></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/browse/MGLN-7417?filter=40237">Open issues assigned To Me</a></li>
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
  
