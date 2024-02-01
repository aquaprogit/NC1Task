import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeesPage from './pages/EmployeesPage';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeesPage />}/>
          <Route path='/add' element={<AddEmployee />}/>
          <Route path='/edit/:id' element={<EditEmployee />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
