import { Children } from "react";
import Header from "./shared/Header";
import { Outlet } from "react-router-dom";



const Dashboard = () => {

    // logic for authentication


    return (
        <>
            <Header></Header>
            <h1>This is Dashboard</h1>
            <Outlet />
        </>
    )
}


export default Dashboard;