declare global {
    interface chatData {
        senderId: string;
        receiver: {
            id: string;// if person then person id or if group then group id
            type: string; // a person or a group
        };
        message: string | null;
        sentAt: string;
        receivedAt: string;
        messageType: {
            isMedia: boolean | false;
            isNotification: boolean | false;
        };
        messageMetaData: {
            isRead: boolean | false;
            isDelivered: boolean | false;
            expiryTimeStamp: number | null;
        },
        media: {
            type: string;
            url: string;
            title: string;
            base64data: string;
        } | null;
    }
}

export { }