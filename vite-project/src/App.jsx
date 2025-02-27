/* eslint-disable no-unused-vars */
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// components
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"

// pages
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'

// layouts
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </>
  )

);

const App = () => {
  return (<RouterProvider router={router} />)
};

export default App