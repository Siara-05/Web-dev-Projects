import { useContext } from 'react';
import { TestContext } from '../context/TestContext';

const TestStats = () => {
  const { tests } = useContext(TestContext);

  // Calculate average percentage
  const averagePercentage = tests.length > 0 
    ? (tests.reduce((sum, test) => sum + (test.marksObtained / test.totalMarks), 0) / tests.length * 100).toFixed(2)
    : 0;

  // Count tests by subject
  const subjectCounts = tests.reduce((acc, test) => {
    acc[test.subject] = (acc[test.subject] || 0) + 1;
    return acc;
  }, {});

  // Count tests by type
  const typeCounts = tests.reduce((acc, test) => {
    acc[test.testType] = (acc[test.testType] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="test-stats">
      <h2>Performance Statistics</h2>
      
      {tests.length === 0 ? (
        <p className="no-stats">No tests available for analysis. Add some tests to see your progress.</p>
      ) : (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Tests Taken</h3>
              <p>{tests.length}</p>
            </div>
            
            <div className="stat-card">
              <h3>Average Percentage</h3>
              <p>{averagePercentage}%</p>
            </div>
          </div>

          <div className="charts-section">
            <div className="chart">
              <h3>Tests by Subject</h3>
              <ul className="subject-list">
                {Object.entries(subjectCounts).map(([subject, count]) => (
                  <li key={subject}>
                    <span className="subject-name">{subject}</span>
                    <span className="subject-count">{count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="chart">
              <h3>Tests by Type</h3>
              <ul className="type-list">
                {Object.entries(typeCounts).map(([type, count]) => (
                  <li key={type}>
                    <span className="type-name">{type}</span>
                    <span className="type-count">{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="progress-trend">
            <h3>Progress Trend</h3>
            <p className="trend-message">
              {tests.length >= 3 ? 
                "Analyze your last few tests to see improvement trends." : 
                "Take at least 3 tests to see your progress trend."}
            </p>
            {/* In a real app, you would add a chart here */}
          </div>
        </>
      )}
    </div>
  );
};

export default TestStats;