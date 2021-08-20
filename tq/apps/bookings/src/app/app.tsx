import './app.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';
import BookablesPage from './bookables-page/bookables-page';
import BookingsPage from './bookings-page/bookings-page';
import UsersPage from './users-page/users-page';
import { UserPicker } from '@tq/user-management';

export function App() {
  return (
    <Router>
      <div className="App"></div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/bookings" className="btn btn-header">
                <FaCalendarAlt />
                <span>Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/bookables" className="btn btn-header">
                <FaDoorOpen />
                <span>Bookables</span>
              </Link>
            </li>
            <li>
              <Link to="/users" className="btn btn-header">
                <FaUsers />
                <span>Users</span>
              </Link>
            </li>
          </ul>
        </nav>
        <UserPicker />
      </header>
      <Routes>
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/bookables" element={<BookablesPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
