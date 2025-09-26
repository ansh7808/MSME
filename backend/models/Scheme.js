// import mongoose from 'mongoose';

// const schemeSchema = new mongoose.Schema({
//   schemeName: { type: String, required: true },
//   businessType: { type: [String], required: true },        // Q1
//   enterpriseSize: { type: [String], required: true },      // Q2
//   udyamRequired: { type: Boolean, required: true },       // Q3
//   location: { type: [String], required: true },           // Q4
//   supportType: { type: [String], required: true },        // Q5
//   employeesRange: { type: String, required: true },       // Q6
//   turnoverRange: { type: String, required: true },        // Q7
//   sectorSpecific: { type: Boolean, required: true },      // Q8
//   applicationLink: { type: String, required: true }
// });

// // module.exports = mongoose.model('Scheme', schemeSchema);
// export default mongoose.model('Scheme', schemeSchema);


// import mongoose from 'mongoose';

// const schemeSchema = new mongoose.Schema({
//   schemeName: String,
//   businessType: [String],
//   enterpriseSize: [String],
//   udyamRequired: Boolean,
//   location: [String],
//   supportType: [String],
//   employeesRange: [String],
//   turnoverRange: [String],
//   sectorSpecific: Boolean,
//   applicationLink: String,
//   description: String,
//   natureOfAssistance: String,
//   whocanApply: String,
//   howtoApply: String,
// });

// const Scheme = mongoose.model('Scheme', schemeSchema);

// export default Scheme; 


import mongoose from 'mongoose';

const schemeSchema = new mongoose.Schema({
  schemeName: String,
  businessType: [String],
  enterpriseSize: [String],
  location: [String],
  supportType: [String],
  employeesRange: [String],
  turnoverRange: [String],
  applicationLink: String,
  description: String,
  natureOfAssistance: String,
  whocanApply: String,
  howtoApply: String,
  states: [String], // Naya 'states' field
});

const Scheme = mongoose.model('Scheme', schemeSchema);

export default Scheme;