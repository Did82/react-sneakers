import React from "react";

const Card = ({id, name, imgUrl, price, onClickPlus, onClickFavorite, goodsInCart, goodsInFavorites, favorites}) => {
    const [isAdded, setIsAdded] = React.useState(goodsInCart);
    const [isFavorite, setIsFavorite] = React.useState(goodsInFavorites);

    const onClickPlusButton = () => {
        setIsAdded(!isAdded);
        onClickPlus({good: id});
    };

    const onClickFavoriteButton = () => {
        setIsFavorite(!isFavorite);
        onClickFavorite({good: id});
    };

    return (
        <div
            className="border rounded-2xl w-56 p-6 flex flex-col gap-4 relative hover:shadow-xl transition ease-in-out duration-200 transform hover:-translate-y-1">
            <button
                className="absolute border-0  focus:outline-none transition ease-in-out duration-200 transform hover:scale-125"
                onClick={onClickFavoriteButton}>
                <img src={isFavorite ? '/img/heart-active.svg' : '/img/heart.svg'} alt="Heart"/>
            </button>
            <img className="place-self-center" src={imgUrl} alt="sneakers" width={133} height={113}/>
            <h5 className="font-normal">{name}</h5>
            <div className="flex justify-between items-center">
                <div>
                    <p className="uppercase text-sm text-gray-400">цена:</p>
                    <b>{price} руб.</b>
                </div>
                <button
                    className="border-0 focus:outline-none transition ease-in-out duration-200 transform hover:scale-125"
                    onClick={onClickPlusButton}>
                    <img src={isAdded ? '/img/checked.svg' : '/img/plus.svg'} alt="Plus"/>
                </button>
            </div>
        </div>
    )
}

export default Card;
