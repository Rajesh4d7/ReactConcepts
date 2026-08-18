import 'react'
import useWebSocket from '../hooks/useWebSocket';

const URL = 'wss://echo-websocket.fly.dev/';

const WebSocketComponent = () => {
    const {
        sendMessage,
        lastMessage,
        isConnected,
        disconnect,
        connect,
        error
    } = useWebSocket(URL);

   return (
        <div>
            <h2>useWebSocket hook</h2>
            <p>Requirement: Implement a custom hook for opening a WebSocket, sending messages, and cleaning up on unmount.</p>
            <p>Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
            {error && <p>Error: {error.message}</p>}
            <input type="text" placeholder="Type a message" onChange={(e) => sendMessage(e.target.value)} />
            <button onClick={
                isConnected ? disconnect : connect
            }>{
                isConnected? 'Disconnect': 'Connect'
            }</button>
            <p>Last message: {lastMessage ?? 'None'}</p>
        </div>
    )
};

export default WebSocketComponent;
