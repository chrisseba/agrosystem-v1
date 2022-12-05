import mongoose from 'mongoose';

export const Farmer = mongoose.model('Farmer', {
  rut: {
    type: String,
    required: false,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  secondName: {
    type: String,
    required: false,
    trim: true
  },
  firstSurname: {
    type: String,
    required: true,
    trim: true
  },
  secondSurname: {
    type: String,
    required: false,
    trim: true
  },
  farm: {
    type: String,
    required: false,
    trim: true
  },
  address: {
    type: String,
    required: false,
    trim: true
  },
  commune:{
    type: String,
    required: false,
    trim: true
  },
  region: {
    type: String,
    required: false,
    trim: true
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  mail: {
    type: String,
    required: false,
    trim: true
  }
})