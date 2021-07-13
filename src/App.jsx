import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Ahead from "./components/Ahead";

const store = [
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imgUrl: '/img/goods/1.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: 12999,
        imgUrl: '/img/goods/2.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 8499,
        imgUrl: '/img/goods/3.jpg'
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 8999,
        imgUrl: '/img/goods/4.jpg'
    },
    {
        name: 'Мужские Кроссовки Under Armour Curry 8',
        price: 15199,
        imgUrl: '/img/goods/5.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Kyrie 7',
        price: 11299,
        imgUrl: '/img/goods/6.jpg'
    },
    {
        name: 'Мужские Кроссовки Jordan Air Jordan 11',
        price: 10799,
        imgUrl: '/img/goods/7.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike LeBron XVIII',
        price: 16499,
        imgUrl: '/img/goods/8.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Lebron XVIII Low',
        price: 13999,
        imgUrl: '/img/goods/9.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 8499,
        imgUrl: '/img/goods/10.jpg'
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 8999,
        imgUrl: '/img/goods/11.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
        price: 11299,
        imgUrl: '/img/goods/12.jpg'
    },
]

const App = () => {
    return (
        <div className="bg-white rounded-3xl shadow-lg max-w-wrapper my-12 mx-auto">
            <Header />
            <Ahead />

            <main className="p-4">
                <div className="flex items-center justify-between m-4">
                    <h1 className="font-bold text-3xl">Все кроссовки</h1>
                    <div className="flex border rounded-lg items-center w-60">
                        <svg className="mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <input className="border-0 outline-none h-10 text-gray-700" type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="flex p-4 flex-wrap gap-8">
                    {
                        store.map((obj) => <Card title={obj.name} price={obj.price} img={obj.imgUrl} onClick={() => alert(obj.name)}/>)
                    }
                </div>
            </main>

        </div>
    )
}

export default App

