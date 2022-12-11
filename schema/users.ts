import T from '@typeguards/core'

const userSchema = {
    user_id: T.String,
    username: T.String,
    full_name: {
        first: T.String,
        last: T.String
    },
    email: T.String,
    password: T.String,
    socket_id: T.String,
    created_at: T.Date,
    updated_at: T.Date,
    geo: {
        lat: T.Number,
        long: T.Number,
        country: T.String,
        others: T.Object
    },
    tokens: T.Array,
}

export { userSchema }