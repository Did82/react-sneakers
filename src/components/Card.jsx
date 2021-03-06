import React, {Fragment} from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";
import images from "../assets";
import sneakers from "../assets/img/goods";

const Card = ({
                  isLoading,
                  id,
                  name,
                  price,
                  onClickPlus,
                  onClickFavorite,
              }) => {
    const {isGoodsInCart, isGoodsInFavorites} = React.useContext(AppContext);

    const onClickPlusButton = () => {
        onClickPlus({good: id});
    };

    const onClickFavoriteButton = () => {
        onClickFavorite({good: id});
    };

    return (
        <div
            className="border rounded-2xl w-56 p-6 flex flex-col gap-4 relative hover:shadow-xl transition ease-in-out duration-200 transform hover:-translate-y-1">
            {isLoading ?
                <ContentLoader
                    speed={2}
                    width={200}
                    height={235}
                    viewBox="0 0 210 260"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="175" height="130"/>
                    <rect x="0" y="170" rx="4" ry="4" width="93" height="15"/>
                    <rect x="0" y="230" rx="0" ry="0" width="70" height="32"/>
                    <rect x="143" y="230" rx="0" ry="0" width="32" height="32"/>
                    <rect x="0" y="150" rx="4" ry="4" width="175" height="15"/>
                </ContentLoader>
                : <Fragment>
                    {onClickFavorite && <button
                        className="absolute border-0  focus:outline-none transition ease-in-out duration-200 transform hover:scale-125"
                        onClick={onClickFavoriteButton}>
                        <img src={isGoodsInFavorites(id) ? images.heartActive : images.heart} alt="Heart"/>
                    </button>}
                    <img className="place-self-center" src={sneakers[id - 1]} alt="sneakers" width={133} height={113}/>
                    <h5 className="font-normal">{name}</h5>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="uppercase text-sm text-gray-400">????????:</p>
                            <b>{price} ??????.</b>
                        </div>
                        {onClickPlus && <button
                            className="border-0 focus:outline-none transition ease-in-out duration-200 transform hover:scale-125"
                            onClick={onClickPlusButton}>
                            <img src={isGoodsInCart(id) ? images.checked : images.plus} alt="Plus"/>
                        </button>}
                    </div>
                </Fragment>}
        </div>)
}

export default Card;
