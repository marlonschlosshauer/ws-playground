import { useEffect, useState } from 'react';
import { Button, Input, PageHeader, Descriptions, Collapse, Tag } from "antd";
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './Connection.css'

const { Panel } = Collapse;

function Connection({ url, uuid, add }) {
	const [connection, setConnection] = useState();
	const [text, setText] = useState('');
	// TODO: Fix [] not having key
	const [sent, setSent] = useState([]);
	const [received, setReceived] = useState([]);
	const [status, setStatus] = useState({ connected: false });

	const send = () => {
		connection.send(JSON.parse(text));
		setSent([...sent, text]);
		setText('');
	}

	const exit = () => {
		if (connection) {
			connection.close();
			setConnection(undefined);
		}
	}

	useEffect(() => {
		if (!connection) setConnection(new WebSocket(url));
	}, [])

	useEffect(() => {
		if (connection) {
			connection.onopen = (e) => {
				console.log({ time: new Date().valueOf(), e });
				setStatus({ ...status, connected: true })
			}
			connection.onclose = (e) => {
				console.log({ time: new Date().valueOf(), e });
				setStatus({ ...status, connected: false })
			}
			connection.onmessage = (e) => setReceived([e, ...received])
		}
	})

	return (
		<div className='websocket-header-wrapper'>
			<PageHeader
				ghost={false}
				tags={
					(status.connected) ? <Tag color="green">Online</Tag> : <Tag color="red">Offline</Tag>
				}
				className='websocket-header'
				title={`${uuid}`}
				extra={[
					<Button type='primary' danger onClick={exit} icon={<CloseCircleOutlined />} disabled={!status.connected}>Close</Button>,
					<Button onClick={() => add(url)} icon={<PlusCircleOutlined />}>Duplicate</Button>

				]}>
				<Descriptions small='small' column={3}>
					<Descriptions.Item label='URL'><b>{url}</b></Descriptions.Item>
					<Descriptions.Item label='Total Sent'>{sent.length}</Descriptions.Item>
					<Descriptions.Item label='Total Received'>{received.length}</Descriptions.Item>
					<Descriptions.Item label='Last received'>{received[0]}</Descriptions.Item>
				</Descriptions>
				<div className="websocket-input-wrapper">
					<div className='websocket-input-container'>
						<Input.TextArea className='websocket-input' name="Message..." type="text" value={text} disabled={!status.connected} onChange={e => setText(e.target.value)} />
						<Button className='websocket-input-send' onClick={send} type='primary' disabled={!status.connected}>Send</Button>
					</div>
					<div className='websocket-input-length-counter'>Message length: {text.length}</div>
				</div>
				<Collapse ghost>
					<Panel header='Received messages'>
						<div className='message-display'>
							{(received.length > 1) ? received.map(r => (
								<div>
									<samp>{r}</samp>
									<br />
								</div>
							)) : ""}
						</div>
					</Panel>
					<Panel header='Sent messages'>
						<div className='message-display'>
							{(sent.length > 1) ? sent.map(r => (
								<div>
									<samp>{r}</samp>
									<br />
								</div>
							)) : ""}
						</div>
					</Panel>
				</Collapse>
			</PageHeader>
		</div>
	);
}

export default Connection;
