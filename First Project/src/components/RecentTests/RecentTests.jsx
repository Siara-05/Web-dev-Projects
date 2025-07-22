import { useContext } from 'react';
import { TestContext } from '../context/TestContext';

const RecentTests = () => {
  const { tests, deleteTest } = useContext(TestContext);

  return (
    <div className="recent-tests">
      <h2>Recent Mock Tests</h2>
      {tests.length === 0 ? (
        <p className="no-tests">No tests added yet. Add your first test to get started!</p>
      ) : (
        <div className="tests-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Test Name</th>
                <th>Subject</th>
                <th>Type</th>
                <th>Marks</th>
                <th>Percentage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tests.map(test => (
                <tr key={test.id}>
                  <td>{test.date}</td>
                  <td>{test.testName}</td>
                  <td>{test.subject}</td>
                  <td>{test.testType}</td>
                  <td>{test.marksObtained}/{test.totalMarks}</td>
                  <td>{((test.marksObtained / test.totalMarks) * 100).toFixed(2)}%</td>
                  <td>
                    <button 
                      onClick={() => deleteTest(test.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentTests;