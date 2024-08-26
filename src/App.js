import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Content from './Content';




function App() {
  return (
    <>


      {/* <RouterProvider router={route} ></RouterProvider> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard"  >

            <Route path="profile" index={true} element={<Profile />} />
            <Route path="content" element={<Content />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
