import Filter from '../filter/Filter';
import PizzasList from '../pizzasList/PizzasList';
import { Helmet } from "react-helmet";

const MainPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Main page where you can choose pizza"
                    />
                 <title>Pizza Shop</title>   
            </Helmet>
            <Filter/>
            <PizzasList/>
        </>
    )
}

export default MainPage;