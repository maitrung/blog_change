import * as mongoose from 'mongoose';
export declare const BlogSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    title?: string;
    description?: string;
    body?: string;
    author?: string;
    date_posted?: string;
}>;
