import Question from '../models/Question.js';

export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json({ success: true, questions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const addQuestion = async (req, res) => {
    const { text, type, options } = req.body;
    try {
        const newQuestion = new Question({ text, type, options });
        await newQuestion.save();
        res.status(201).json({ success: true, question: newQuestion });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findByIdAndDelete(req.params.id);
        if (!question) {
            return res.status(404).json({ success: false, message: 'Question not found' });
        }
        res.json({ success: true, message: 'Question removed' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};