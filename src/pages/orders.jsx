import React, {Fragment} from 'react';
import Card from "../components/Card";
import AppContext from "../context";
import axios from "axios";
import Empty from "../components/Empty";
import images from "../assets";

const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const {goods} = React.useContext(AppContext);
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
                {isLoading ? [...Array(8)].map((item, index) =>
                    (
                        <Card
                            isLoading={isLoading}
                            key={index}
                            {...item}
                        />
                    )
                ) : orders.length > 0 ? orders.map((item, index) => (
                            <Card
                                isLoading={isLoading}
                                key={index}
                                {...item}
                            />
                        )
                    ) :
                    <Empty
                        title="У вас нет заказов"
                        description="Оформите хотя бы один заказ."
                        img={images.ordersEmpty}
                    />
                }
            </div>
        </Fragment>
    )
};

export default Orders;
