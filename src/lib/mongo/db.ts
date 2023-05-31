import mongoose, { Connection } from "mongoose";

const MONGODB_URL = "mongodb://localhost:27017/Apis";

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

interface Global {
    mongoose: {
        conn: Connection | null;
        promise: Promise<Connection> | null;
    };
}

declare const global: Global;

const dbConnect = async (): Promise<Connection> => {
    if (global.mongoose?.conn) {
        return global.mongoose.conn;
    }

    if (!global.mongoose?.promise) {
        const opts = {
            bufferCommands: false
        };

        global.mongoose.promise = mongoose.connect(MONGODB_URL, opts).then(() => {
            return mongoose.connection as Connection;
        });
    }

    try {
        global.mongoose.conn = await global.mongoose.promise;
    } catch (e) {
        global.mongoose.promise = null;
        throw e;
    }

    return global.mongoose.conn;
};

export default dbConnect;
