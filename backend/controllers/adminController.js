import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

// Login logic waisi hi rahegi
export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
         
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }
       
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }
       
        const payload = { id: admin._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.json({ success: true, token });
         console.log(token)
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};