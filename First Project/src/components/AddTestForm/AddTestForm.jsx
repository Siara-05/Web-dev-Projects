import { useState, useContext } from 'react';
import { TestContext } from '../context/TestContext';

const AddTestForm = () => {
  const { addTest } = useContext(TestContext);
  const [formData, setFormData] = useState({
    testName: '',
    subject: 'GS Paper I',
    testType: 'Full Mock',
    marksObtained: '',
    totalMarks: '200',
    date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTest = {
      id: Date.now(),
      ...formData,
      marksObtained: parseFloat(formData.marksObtained),
      totalMarks: parseFloat(formData.totalMarks),
      date: new Date(formData.date).toLocaleDateString()
    };
    addTest(newTest);
    setFormData({
      testName: '',
      subject: 'GS Paper I',
      testType: 'Full Mock',
      marksObtained: '',
      totalMarks: '200',
      date: new Date().toISOString().split('T')[0],
    });
    alert('Test added successfully!');
  };

  return (
    <div className="form-container">
      <h2>Add New Test</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Test Name:</label>
          <input
            type="text"
            name="testName"
            value={formData.testName}
            onChange={handleChange}
            required
            placeholder="e.g., Vision IAS Test 1"
          />
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <select name="subject" value={formData.subject} onChange={handleChange} required>
            <option value="GS Paper I">GS Paper I</option>
            <option value="GS Paper II">GS Paper II</option>
            <option value="GS Paper III">GS Paper III</option>
            <option value="GS Paper IV">GS Paper IV</option>
            <option value="Essay">Essay</option>
            <option value="Current Affairs">Current Affairs</option>
            <option value="CSAT">CSAT</option>
          </select>
        </div>

        <div className="form-group">
          <label>Test Type:</label>
          <select name="testType" value={formData.testType} onChange={handleChange} required>
            <option value="Full Mock">Full Mock</option>
            <option value="Sectional Test">Sectional Test</option>
            <option value="Previous Year">Previous Year</option>
            <option value="Revision Test">Revision Test</option>
          </select>
        </div>

        <div className="form-group">
          <label>Marks Obtained:</label>
          <input
            type="number"
            name="marksObtained"
            value={formData.marksObtained}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Total Marks:</label>
          <input
            type="number"
            name="totalMarks"
            value={formData.totalMarks}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Test</button>
      </form>
    </div>
  );
};

export default AddTestForm;