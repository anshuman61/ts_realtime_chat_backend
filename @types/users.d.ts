declare global {
    interface privacySettings {
        all: boolean;// true -> seen to all, false -> hidden to all
        friends: boolean;// true -> seen to friends, false -> hidden to friends
        unknown: boolean;// true -> seen to unknown, false -> hidden to unknown
    }
    interface userData {
        id: string;
        username: string;
        fullName: {
            first: string;
            last: string;
        };
        email: string | null;
        phone: string | null;
        password: string;
        socketId: string;
        createdAt: string;
        updatedAt: string;
        lastSeen: string;
        status: string | null;
        profilePic: string;
        isOnline: boolean;
        isBlocked: boolean;
        isDeleted: boolean;
        isVerified: boolean;
        userMetaData: {
            geo: {
                lat: number | null;
                long: number | null;
                country: string | null;
                others: object | null;
            },
            lastSeenSettings: privacySettings | null,
            statusSettings: privacySettings | null,
            profilePicSettings: privacySettings | null,
            isOnlineSettings: privacySettings | null,
            isTypingSettings: privacySettings | null,
            isAccountPrivate: boolean | true, // true -> account is private, false -> account is public
        }
    }
}

export { }