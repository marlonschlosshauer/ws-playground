import { Table, Button, Input, Layout } from "antd";
import { useState } from 'react';
const { Header, Content, Footer } = Layout;

function ConnectionTable(props) {
	//const [connections, setConnections] = useState([{ id: 1, response: '', input: '', status: undefined }]);
	const [connections, setConnections] = useState([]);

	const updateIndex = (connection, instruction) => {
		const index = connections.findIndex(c => c.id === connection.id);
		console.log(index, connection, connections);
		if (index) {
			setConnections(update(connections, { [index]: instruction }))
		}
		else {
			console.log(`Index for ${connection.id} not found.`);
		}
	}

	const send = (connection) => {
		console.log(connection);
		connection.ws.send(JSON.parse(connection.input));
		updateIndex(connection, connections, setConnections, { input: { $set: '' } })
	}

	const addConnection = (id) => {
		const ws = new WebSocket(`ws://${props.url}`);
		setConnections([...connections, { id, response: '', input: '', ws, status: '', waiting: true }], () => {

			/*
			   State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().
			 */
			ws.onopen = () => updateIndex({ id }, { status: { $set: 'Online' } });
			ws.onclose = () => updateIndex({ id }, { status: { $set: 'Offline' }, waiting: { $set: true } });
			ws.onmessage = evt => updateIndex({ id }, { response: { $set: JSON.parse(evt.data) }, waiting: { $set: false } })
		});
	}

	const removeConnection = (id) => { }

	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			width: '1%'
		},
		{
			title: 'Input',
			key: 'Input',
			width: '40%',
			render: (con) => (
				<span className='input-row'>
					<Input placehoder="Hello" />
					<Button type='primary' onClick={() => send(con)}>Send</Button>
				</span>
			)
		},
		{
			title: 'Response',
			dataIndex: 'response',
			key: 'response',
			width: '40%',
			render: (response) => (
				<samp>{response}</samp>
			)
		},
		{
			title: '',
			dataIndex: 'options',
			key: 'options',
			width: '1%',
			render: (con) => (
				<Button type='danger' onClick={() => removeConnection(con.id)}>Remove</Button>
			)
		}
	];

	return (
		<div>
			<Table dataSource={connections} columns={columns} className='table-table' />
			<Button type='primary' onClick={() => addConnection(connections.length)}>Add connection</Button>
		</div>);
}

export default ConnectionTable;
