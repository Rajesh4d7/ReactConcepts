import { useState, useEffect, useRef, useCallback } from 'react'


const useWebSocket = (url) => {
    const [isConnected, setIsConnected] = useState(false)
    const [lastMessage, setLastMessage] = useState(null)
    const [error, setError] = useState(null)
    const wsRef = useRef(null)

    const connect = useCallback(() => {
        if (!url) return

        const readyState = wsRef.current?.readyState
        if (readyState === WebSocket.OPEN || readyState === WebSocket.CONNECTING) {
            return
        }

        const ws = new WebSocket(url)
        wsRef.current = ws

        ws.onopen = () => {
            setIsConnected(true)
            setError(null)
        }
        ws.onmessage = (event) => {
            setLastMessage(event.data)
        }
        ws.onclose = () => {
            setIsConnected(false)
        }
        ws.onerror = () => {
            setError(new Error('WebSocket connection failed'))
        }
    }, [url])

    const cleanup = () => {
        wsRef.current.close()
        wsRef.current = null
        setIsConnected(false)
        setLastMessage(null)
        setError(null)
    }

    useEffect(() => {
        connect()

        return () => {
            cleanup()
        }
    }, [connect])

    const sendMessage = (message) => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(message)
        }
    }

    const disconnect = () => {
        cleanup()
    }

    return {error, lastMessage, isConnected, sendMessage, disconnect, connect}
};

export default useWebSocket;
