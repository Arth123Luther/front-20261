import './Dashboard.css';
import Main from '../components/Main.jsx';
import Sidebar from '../components/Sidebar.jsx';

function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <Main />
        </div>
    );
}

export default Dashboard;