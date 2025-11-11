import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [String],
  salary: {
    min: Number,
    max: Number,
    currency: { type: String, default: 'USD' }
  },
  type: { type: String, enum: ['full-time', 'part-time', 'contract'], default: 'full-time' },
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['active', 'closed'], default: 'active' }
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);