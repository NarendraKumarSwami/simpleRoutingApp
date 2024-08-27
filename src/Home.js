



import ResponsiveAppBar from "./shared/Header";

// it is parent component of home
const Home = () => {

    return (
        <>
            {/* header of this page */}
            <ResponsiveAppBar></ResponsiveAppBar>
            <div className="cotainer">
                This is the home
            </div>
        </>
    )
}

export default Home;