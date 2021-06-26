import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  domainID: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
});

const Users = mongoose.model('Users', usersSchema);

export default Users;
