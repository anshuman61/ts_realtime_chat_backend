declare global {
    export interface SocketData {
        path: string,
        body: any
    }

    export interface TypeSocketData {
        method: string,
        data: SocketData
    }
}
export { }