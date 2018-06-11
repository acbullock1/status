
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
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
}];
const dataSource = [{
    key: '1',
    component: 'xiCEP',
    number: 'MGLN-6812',
    title: 'Clickstream CEP Incident Alerting',
    status: 'Waiting for this to be in QA environment before testing.'
  }, {
    key: '2',
    component: 'Door Panel UI',
    number: 'MGLN-6948',
    title: 'Panel-UI to send location services to Panel-app',
    status: 'The UI team is making a dev build to test their fix for the socket integration. They are awaiting access to Jenkins before cutting an official production build.'
}, {
  key: '3',
  component: 'Compass: OTT Amazon Firestick',
  number: 'MGLN-5679',
  title: 'OV:Fire TV - Create error message for Account Creation and User Login',
  status:'Waiting to see if Ed actually needs help on this, if so, I will need get a knowledge transfer so I can properly test this component.'
}];
class Main extends React.Component {
    render() {
      return (
        <div>
          
            <Card title={<div>Status   <Icon type="line-chart"/></div>}  >
            
              <Table dataSource={dataSource} columns={columns} size="small" scroll={{ x: 480 }}/>
            </Card>
            <br/>
            <br/>
            <Card title={<div>Notes <Icon type="edit"/></div>}>
                <ul>
                    <li>Regression on <strong>Door Panel UI</strong> will begin when all tickets are closed and a production build is loaded on the door panel.</li>
                    <li><a target="_blank" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                </ul>
            </Card>
        </div>
      );
    }
  }

 
export {Main};
export default Main;
  
