import T from '@typeguards/core'

const userSchema = {
    id: T.String,
    username: T.String,
    fullName: {
        first: T.String,
        last: T.String,
    },
    email: T.String,
    phone: T.String,
    password: T.String,
    socketId: T.String,
    createdAt: T.String,
    updatedAt: T.String,
    lastSeen: T.String,
    status: T.String,
    profilePic: T.String,
    isOnline: T.Boolean,
    isBlocked: T.Boolean,
    isDeleted: T.Boolean,
    isVerified: T.Boolean,
    userMetaData: {
        geo: {
            lat: T.Number,
            long: T.Number,
            country: T.String,
            others: T.Object,
        },
        lastSeenSettings: T.Object,
        statusSettings: T.Object,
        profilePicSettings: T.Object,
        isOnlineSettings: T.Object,
        isTypingSettings: T.Object,
        isAccountPrivate: T.Boolean, // true -> account is private, false -> account is public
    },
    tokens: T.Array,
}

export { userSchema }