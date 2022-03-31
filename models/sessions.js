import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
  {
    dateAndTime: { type: Date, required: true },
    sessionLength: { type: Number, required: true },
    sessionType: { type: String, required: true },
    distanceCycledKm: { type: Number, required: true },
    coach: { type: mongoose.Schema.ObjectId, ref: 'Users', required: true },
    attendance: [{ type: mongoose.Types.ObjectId, ref: 'Athletes' }],
    sessionStatus: { type: String, required: true },
    // photosUrls: [photoSchema],
  },
  { timestamps: true }
);

// const photoSchema = new mongoose.Schema(
//   {
//     photoName: { type: String },
//     photoUrl: { type: String, required: true },
//     uploadedBy: {
//       type: mongoose.Schema.ObjectId,
//       ref: 'Users',
//       required: true,
//     },
//     session: [{ type: mongoose.Types.ObjectId, ref: 'Sessions' }],
//   },
//   { timestamps: true }
// );
export default mongoose.model('Sessions', sessionSchema);
