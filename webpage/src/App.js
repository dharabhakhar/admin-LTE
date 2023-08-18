import './App.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import SinglePage from './pages/SinglePage';
import CourseDetail from './pages/CourseDetail';
import CourseForm from './pages/CourseForm';
import AddCourseDetail from './pages/AddCourseDetail';
import Protected from './services/protected';

function App() {
  return (
    <>
    <div className="main menu_open">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Protected><Home /></Protected>} />
          <Route path="/form" element={<Protected><CourseForm /></Protected>} />
          <Route path="/table" element={<Protected><CourseDetail/></Protected>} />
          <Route path="/Get_Single_Course/:id" element={<Protected><SinglePage/></Protected>} />
          <Route path="/addCourseDetail" element={<Protected><AddCourseDetail/></Protected>} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
