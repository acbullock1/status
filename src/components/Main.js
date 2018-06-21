
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
    key:'1',
    component:'OTT-FireTV-1.1.0',
    number:'MGLN-6166',
    state: 'QA IN PROGRESS',
    title: 'OV:Fire TV - Clickstream - Exiting collection/detail page',
    status: 'Need new build from Max'
  },
  
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
    state:'BLOCKED',
    title:'OV:Roku - Clickstream - API Error',
    status:'blocked against xos bug: MGLN-7283'
  }
  ,{
    key:'5',
    component:'Compass: OTT Roku',
    number:'MGLN-6159',
    state:'BLOCKED',
    title:'OV:Roku - Clickstream - Endpoint is not available',
    status:'blocked against xos bug: MGLN-7283'
  },{
    key:'6',
    component:'Compass: OTT Roku',
    number:'MGLN-6161',
    state:'BLOCKED',
    title:'OV:Roku - Clickstream - Video issue',
    status:'blocked against xos bug: MGLN-7283'
  },
  {
    key:'7',
    component:'OTT-FireTV-1.1.0',
    number: 'MGLN-6165',
    state:'QA IN PROGRESS',
    title: 'OV:Fire TV - ClickStream - Entering collection/detail page',
    status: 'need a new build from Max..'
  }
  


];

let now = new Date(2018, 5, 21, 12, 10);
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
                    <li><strong>Ticket blocking 3 tickets: </strong><a href='https://carnival.atlassian.net/browse/MGLN-7283' rel="noopener noreferrer" target='_blank'>MGLN-7283</a></li>
                    <li>Waiting for new build from Max to close remaining <strong>FireTV</strong> tickets.</li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://carnival.atlassian.net/issues/?jql=filter%20in%20(xt_Magellan_Open_Sprints_In_QA_QA)%20and%20assignee%3Dabullock">Open Issues Assigned To Me</a></li>
                </ul>
                <h3>Reopened tix</h3>
                <ul>
                  
                </ul>
                </Card>
            </Card>
        </div>
      );
    }
  }

 
export {Main};
export default Main;
  
