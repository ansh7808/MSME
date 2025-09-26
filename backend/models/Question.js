// import mongoose from 'mongoose';

// const QuestionSchema = new mongoose.Schema({
//     text: { type: String, required: true },
//     type: { type: String, enum: ['radio', 'checkbox'], required: true },
//     options: [{ type: String, required: true }]
// });

// export default mongoose.model('Question', QuestionSchema);

import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    // Yahan 'dropdown' add karein
    type: { type: String, enum: ['radio', 'checkbox', 'dropdown'], required: true },
    options: [{ type: String, required: true }]
});

export default mongoose.model('Question', QuestionSchema);