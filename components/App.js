import Banner from "./Banner";
import HouseList from "./HouseList"
const cors = require("cors");

const App = () => {

    return (
        <>
        <Banner headerText = "World Class Houses" />
        <HouseList />
        </>
       
    )
    
};

export default App;