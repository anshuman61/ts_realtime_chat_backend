type SocketData = {
    path:string,
    body:any
}

type TypeSocketData={
    method: string,
    data:SocketData
}

export {TypeSocketData,SocketData}