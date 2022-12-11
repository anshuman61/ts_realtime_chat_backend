declare global {
    interface SocketData {
        path: string,
        body: any
    }

    interface TypeSocketData {
        method: string,
        data: SocketData
    }
}

export { };