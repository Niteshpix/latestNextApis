import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
    username: string;
    email: string;
    phone: string;
    message: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const contactSchema: Schema<IContact> = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.models.Contact as mongoose.Model<IContact> || mongoose.model<IContact>('Contact', contactSchema);

export default Contact;
