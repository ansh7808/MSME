import React from 'react';
import HomePage from './pages/HomePage';
import './index.css'; // Make sure Tailwind's CSS is imported
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import './index.css';
import { Toaster } from 'react-hot-toast'; // Toaster ko import karein
import AdminLayout from './layouts/AdminLayout';
import ContactPage from './pages/ContactPage';
import ResourcePage from './pages/ResourcePage';

// Private Route: Yeh check karega ki admin logged in hai ya nahi
const PrivateRoute = ({ children }) => {
    // Browser ki local storage se token check karo
    const token = localStorage.getItem('token');
    // Agar token hai, toh Dashboard page dikhao, nahi toh Login page par bhej do
    return token ? children : <Navigate to="/admin-login" />;
};


function App() {
  return (
     <> {/* Fragment ka use karein */}
      <Toaster 
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#28a745',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#dc3545',
              color: 'white',
            },
          },
        }}
      />
     <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* YEH NAYI LINE ADD KAREIN */}
           <Route path="/resources" element={<ResourcePage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />

        {/* Private Route for Admin Dashboard */}
        <Route 
          path="/admin/dashboard" 
          element={
             <PrivateRoute>
                <AdminLayout>
                  <AdminDashboardPage />
                </AdminLayout>
              </PrivateRoute>
          }
        />
      </Routes>
    </Router>
     </>
  );
}

export default App;