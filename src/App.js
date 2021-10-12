import { Input, Layout, Button } from "antd";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Connection from './Connection';
import './App.css';

const { Content } = Layout;

function App() {
	const [url, setURL] = useState('ws://localhost:8999/connection');
	const [connections, setConnections] = useState([]);

	const addConnection = (u) => setConnections([{ url: u, uuid: uuid(), key: connections.length, index: connections.length }, ...connections]);

	return (
		<div className="App">
			<Layout className="layout">
				<Content className='content'>
					<div className="url-input-container">
						<Input className='url-input' value={url} onChange={e => setURL(e.target.value)}></Input>
						<Button className='url-input-add' onClick={() => addConnection(url)}>Add connection</Button>
					</div>
					<div className="table">
						{connections.map(c => <Connection {...c} add={addConnection} />)}
					</div>
				</Content>
			</Layout>
		</div>
	);
}

export default App;
