import { Children } from "react";
import Header from "./shared/Header";



const Dashboard = ({ children }) => {

    // logic for authentication


    return (
        <>
            <Header></Header>
            <h1>This is Dashboard</h1>
            <div>
                {children}
            </div>
        </>
    )
}


export default Dashboard;