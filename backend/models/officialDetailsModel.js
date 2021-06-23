import mongoose from 'mongoose';

const officialDetailsSchema = mongoose.Schema({
  ecode: {
    type: Number,
    required: true,
    unique: true,
  },

  officeEmail: { type: String, required: true, unique: true },

  doj: { type: Date, required: true },

  cocp: { type: Number, required: true, unique: true },

  team: {
    category: { type: String, required: true },
    regressionTeam: { type: String, required: true },
  },

  officialMobileDevice: {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    imei: { type: Number, required: true, unique: true },
    accessories: { type: String, required: true },
    version: { type: Number, required: true },
  },
  domainLaptop: {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    hostname: { type: String, required: true, unique: true },
    sn: { type: Number, required: true, unique: true },
    accessories: { type: String, required: true },
    version: { type: Number, required: true },
  },
});

const OfficialDetails = mongoose.model(
  'official-details',
  officialDetailsSchema
);

export default OfficialDetails;
