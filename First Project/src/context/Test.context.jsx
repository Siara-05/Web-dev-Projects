import { createContext, useState } from 'react';

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [tests, setTests] = useState([]);

  const addTest = (newTest) => {
    setTests([newTest, ...tests]);
  };

  const deleteTest = (id) => {
    setTests(tests.filter(test => test.id !== id));
  };

  return (
    <TestContext.Provider value={{ tests, addTest, deleteTest }}>
      {children}
    </TestContext.Provider>
  );
};