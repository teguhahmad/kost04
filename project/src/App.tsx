import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Tenants from './pages/Tenants';
import Rooms from './pages/Rooms';
import Payments from './pages/Payments';
import Maintenance from './pages/Maintenance';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Properties from './pages/Properties';
import { PropertyProvider } from './contexts/PropertyContext';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  // Map page IDs to titles
  const pageTitles: Record<string, string> = {
    dashboard: 'Dashboard',
    tenants: 'Tenants Management',
    rooms: 'Room Management',
    payments: 'Payment Records',
    maintenance: 'Maintenance Requests',
    reports: 'Financial Reports',
    notifications: 'Notifications',
    settings: 'System Settings',
    properties: 'Properties'
  };

  return (
    <Router>
      <PropertyProvider>
        <Layout 
          title={pageTitles[activePage]} 
          activeItem={activePage}
          onNavigate={setActivePage}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard onNavigate={setActivePage} />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/properties" element={<Properties />} />
          </Routes>
        </Layout>
      </PropertyProvider>
    </Router>
  );
}

export default App;