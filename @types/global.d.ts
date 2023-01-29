declare global {
    interface SocketData {
        path: string,
        body: any,
        headers: any
    }

    interface TypeSocketData {
        method: string,
        data: SocketData
    }
}

export { };