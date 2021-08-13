import React, {Fragment} from 'react';
import Card from "../components/Card";
import AppContext from "../context";
import axios from "axios";

const Orders = ({onAddToCart, onAddToFavorites}) => {
    const [orders, setOrders] = React.useState([]);
    const {goods, goodsInFavorites, isLoading, setIsLoading} = React.useContext(AppContext);
    React.useEffect(() => {
        setIsLoading(true);
        axios.get('https://60f0071af587af00179d3cf2.mockapi.io/orders')
            .then(res => {
                const arr = res.data
                    .reduce((prev, obj) => [...prev, ...obj.goods], [])
                    .map(obj => goods.find(item => item.id === obj.good));
                setOrders(arr);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <Fragment>
            <div className="flex items-center justify-between m-4">
                <h1 className="font-bold text-3xl">Ваши заказы</h1>
            </div>
            <div className="flex p-4 flex-wrap gap-8 justify-start">
                {
                    (isLoading ? [...Array(8)] : orders).map((item, index) => (
                            <Card
                                isLoading={isLoading}
                                key={index}
                                {...item}
                            />
                        )
                    )
                }
            </div>
        </Fragment>
    )
};

export default Orders;
