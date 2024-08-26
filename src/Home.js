import Container from "./Home/Container";
import ResponsiveAppBar from "./shared/Header";





// it is parent component of home
const Home = () => {

    return (
        <>
            {/* header of this page */}
            <ResponsiveAppBar></ResponsiveAppBar>
            <div className="cotainer">
                <Container></Container>
            </div>
        </>
    )
}

export default Home;