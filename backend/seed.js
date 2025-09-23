import 'dotenv/config';
import mongoose from 'mongoose';
import Admin from './models/Admin.js';

const seedAdmin = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/msmesDB`);
        console.log('MongoDB Connected for seeding...');

        // Check if an admin already exists
        const adminExists = await Admin.findOne({ username: process.env.ADMIN_USERNAME });

        if (adminExists) {
            console.log('Admin user already exists. No action taken.');
            return;
        }

        // If no admin, create one from .env
        const admin = new Admin({
            username: process.env.ADMIN_USERNAME,
            password: process.env.ADMIN_PASSWORD, // Password will be hashed automatically by the model's pre-save hook
        });

        await admin.save();
        console.log(' Admin user created successfully!');

    } catch (error) {
        console.error('Error seeding admin user:', error.message);
    } finally {
        // Disconnect from the database
        await mongoose.disconnect();
        console.log('MongoDB Disconnected.');
    }
};

seedAdmin();