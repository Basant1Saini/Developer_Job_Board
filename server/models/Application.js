import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  coverLetter: String,
  resume: String,
  status: { 
    type: String, 
    enum: ['pending', 'reviewed', 'accepted', 'rejected'], 
    default: 'pending' 
  }
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);