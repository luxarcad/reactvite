import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import ProtectedRoute from './routes/ProtectedRoute';

import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {
  return (
    <HashRouter>

      <AuthProvider>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </AuthProvider>

    </HashRouter>
  );
}

export default App;