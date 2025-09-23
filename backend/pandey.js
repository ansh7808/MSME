// const xlsx = require('xlsx');
// const mongoose = require('mongoose');
// const Scheme = require('./models/Scheme.js')

import mongoose from 'mongoose';
import xlsx from 'xlsx';
import Scheme from './models/Scheme.js';  // <- model ES Module export hai


// Connect to MongoDB
mongoose.connect('mongodb+srv://anshgupta78080:1bOXdlc5wyRxyuU3@cluster0.93ehy.mongodb.net/msmesDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Define Scheme model
// const schemeSchema = new mongoose.Schema({
//   schemeName: String,
//   businessType: [String],
//   enterpriseSize: [String],
//   udyamRequired: Boolean,
//   location: [String],
//   supportType: [String],
//   employeesRange: String,
//   turnoverRange: String,
//   sectorSpecific: Boolean,
//   applicationLink: String
// });

// const Scheme = mongoose.model('Scheme', schemeSchema);


// Read Excel file
const workbook = xlsx.readFile('AllSchemes.xlsx'); // your Excel file
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

// Transform & Insert
const formattedData = data.map(row => ({
  schemeName: row['Scheme Name'],
  businessType: row['Q1 Business Type'].split(',').map(s => s.trim()),
  enterpriseSize: row['Q2 Enterprise Size'].split(',').map(s => s.trim()),
  udyamRequired: row['Q3 Udyam Required'] ? row['Q3 Udyam Required'].toLowerCase() === 'yes' : false,
  location: row['Q4 Location'].split(',').map(s => s.trim()),
  supportType: row['Q5 Support Type'].split(',').map(s => s.trim()),
  
  // --- CHANGES START HERE ---

  // Updated to split the string into an array
  employeesRange: row['Q6 Employees Range'] ? row['Q6 Employees Range'].split(',').map(s => s.trim()) : [],
  turnoverRange: row['Q7 Turnover Range'] ? row['Q7 Turnover Range'].split(',').map(s => s.trim()) : [],
  
  sectorSpecific: row['Q8 Sector-Specific'] ? row['Q8 Sector-Specific'].toLowerCase() === 'yes' : false,
  applicationLink: row['Application Link'],

  // New fields added
  description: row['Description'],
  natureOfAssistance: row['Nature of assistance'],
  whocanApply: row['Who can apply?'],
  howtoApply: row['How to apply?']

}));

Scheme.insertMany(formattedData)
  .then(() => {
    console.log('All schemes inserted successfully!');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));

