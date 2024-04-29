// import React from 'react'
// <<<<<<< HEAD
// // eslint-disable-next-line
// import { Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import SkillList from './pages/skill/skillList'
// import ProjectList from './pages/project/projectList'

// const router = createBrowserRouter([
//   {
//     path: "/skill",
//     element:<SkillList/>
//   },
//   {
//     path: "/project",
//     element:<ProjectList/>
//   }
// ])

import { Landing, Error, SkillList, Register1, ProtectedRoute, Login1} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stats,AddJob, SharedLayout, AllJobs, Dashboard, EmploeeList} from './pages/dashboard';
import ProjectList from './pages/project/projectList' 
import ProfilePage from "./pages/profile/ProfilePage";
import ProfilePages from "./pages/profile/ProfilePages";
import Dashboard2 from "./pages/dashboard/Dashboard2";
import ProjectListing from "./pages/project/ProjectsListings";
import EmployeeList from "./pages/dashboard/EmployeeList";
import ManagerList from "./pages/dashboard/ManagerList";


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
     <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='profile' element={<ProfilePages />} />

          {/* <Route path='employee-list' element={<EmploeeList />} /> */}
        </Route>
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-projects' element={<ProjectList />} />
          {/* <Route path='add-skill' element={<AllJobs />} /> */}
          <Route path='view-skill' element={<SkillList />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
        <Route
          path='/admin-dashboard'
          element={
            <ProtectedRoute>
              <Dashboard2/>
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='projectlist' element={<ProjectListing />} />
          <Route path='employee-list' element={<EmployeeList/>}/>
          <Route path='manager-list' element={<ManagerList/>}/>
          <Route path='profile' element={<ProfilePage />} />
        </Route>
      <Route path="landing" element={<Landing/>}></Route>
      <Route path="login" element={<Login1/>}></Route>
      <Route path="register" element={<Register1/>}></Route>
      <Route path="*" element={<Error/>}></Route>
     </Routes>
     <ToastContainer position='top-center'/>
   </BrowserRouter>
  )
}

export default App