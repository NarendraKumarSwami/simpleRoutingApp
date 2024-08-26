import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";








const route = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/dashboard' element={<Dashboard />} >
            </Route>
            <Route path="/profile" element={<Profile />}></Route>

        </Route>
    )
)

export default route;


