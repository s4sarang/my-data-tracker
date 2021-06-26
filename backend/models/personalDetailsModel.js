import mongoose from 'mongoose';

const personalDetailsSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },

  address: {
    addressLineOne: { type: String, required: true },
    addressLineTwo: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: Number, required: true },
    country: { type: String, required: true },
  },

  contact: {
    primaryContact: { type: Number, required: true },
    secondaryContact: { type: Number },
    whatsappContact: { type: Number, required: true },
  },

  personalEmail: { type: String, required: true, unique: true },

  dob: { type: Date, required: true },

  aadhaar: { type: Number, required: true, unique: true },

  personalMobileDevice: {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    imei: { type: Number, required: true, unique: true },
    accessories: { type: String, required: true },
    version: { type: Number, required: true },
  },
  personalBroadband: {
    brand: { type: String },
    speed: { type: String },
  },
});

const PersonalDetails = mongoose.model(
  'personaldetails',
  personalDetailsSchema
);

export default PersonalDetails;
