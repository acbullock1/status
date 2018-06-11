
import React from 'react';
import {Table, Card} from 'antd';

const columns=[{
    title: 'Component',
  dataIndex: 'component',
  key: 'component',
  defaultSortOrder: 'ascend',
  sorter: (a, b) => {return a.component.localeCompare(b.component)},
}, {
  title: 'Number',
  dataIndex: 'number',
  key: 'number',
  render: text => <a target= "_blank" href={"https://carnival.atlassian.net/browse/"+text}>{text}</a>
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
},{
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
}];
class Main extends React.Component {
    render() {
      return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
            <Card title="Notes">
                <ul>
                    <li>Regression on Door Panel will begin when all tickets are closed and a production build is loaded on the door panel.</li>
                    <li><a target="_blank" href="https://carnival.atlassian.net/wiki/spaces/MGLN/pages/157278542/QA+ticket+validation+tracking">QA Ticket Validation Tracking</a></li>
                </ul>
            </Card>
        </div>
      );
    }
  }

 
export {Main};
export default Main;
  
