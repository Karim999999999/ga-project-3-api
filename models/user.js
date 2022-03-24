import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  articles: [],
  isAdmin: Boolean,
  isWriter: Boolean,
  isEditor: Boolean,
  isCoach: Boolean,
  isAthlete: Boolean,
});

export default mongoose.model('User', UserSchema);
