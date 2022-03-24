import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    title: { type: String },
    author: { type: String }, // we'll make it an ObjectID once we have users
    body: { type: String },
    categories: [String], // is array okay? thought that one article could belong to more than one category
    status: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Article', articleSchema);
