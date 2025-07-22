import { useState } from 'react';
import { TestProvider } from './context/TestContext';
import AddTestForm from './components/AddTestForm';
import RecentTests from './components/RecentTests';
import TestStats from './components/TestStats';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('add');

  return (
    <TestProvider>
      <div className="app">
        <header className="app-header">
          <h1>UPSC Mock Test Tracker</h1>
          <p>Track your progress and improve systematically</p>
        </header>

        <nav className="tabs">
          <button 
            className={activeTab === 'add' ? 'active' : ''} 
            onClick={() => setActiveTab('add')}
          >
            Add Test
          </button>
          <button 
            className={activeTab === 'recent' ? 'active' : ''} 
            onClick={() => setActiveTab('recent')}
          >
            Recent Tests
          </button>
          <button 
            className={activeTab === 'stats' ? 'active' : ''} 
            onClick={() => setActiveTab('stats')}
          >
            Statistics
          </button>
        </nav>

        <main className="main-content">
          {activeTab === 'add' && <AddTestForm />}
          {activeTab === 'recent' && <RecentTests />}
          {activeTab === 'stats' && <TestStats />}
        </main>

        <footer className="app-footer">
          <p>Made with for your UPSC journey</p>
        </footer>
      </div>
    </TestProvider>
  );
}

export default App;