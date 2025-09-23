import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Icons ke liye (aap SVG use kar sakte hain)
const DashboardIcon = () => <span>📊</span>;
const LogoutIcon = () => <span>➡️</span>;

const AdminLayout = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Logged out successfully!');
        navigate('/');
    };

    return (
        <div className="min-h-screen flex bg-slate-100">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-800 text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-slate-700">
                    MSMESaathi Admin
                </div>
                <nav className="flex-1 p-4">
                    <NavLink 
                        to="/admin/dashboard" 
                        className={({ isActive }) => 
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-slate-900 text-white' : 'hover:bg-slate-700'}`
                        }
                    >
                        <DashboardIcon />
                        Dashboard
                    </NavLink>
                </nav>
                <div className="p-4 border-t border-slate-700">
                     <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                        <LogoutIcon />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 lg:p-10">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;