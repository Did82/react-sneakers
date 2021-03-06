import React from 'react';
import {Link} from "react-router-dom";
import images from "../assets";

const Empty = ({title, description, img, onClose}) => {
    return (
        <div className="flex flex-col items-center gap-4 flex-grow justify-center my-14">
            <img src={img} alt="Empty"/>
            <h3 className="font-bold text-xl">{title}</h3>
            <span className="text-center w-52 text-sm">{description}</span>
            {onClose ? <button
                    className="flex flex-none group justify-center items-center text-center border-0 bg-btn relative h-14 w-56 text-white rounded-xl active:bg-green-700 hover:opacity-90 focus:outline-none"
                    onClick={onClose}>
                    <img
                        className="absolute left-6 transition duration-500 ease-in-out transform group-hover:-translate-x-1"
                        src={images.arrowLeft} alt="Arrow"/>
                    <span className="pl-4">Вернуться назад</span>
                </button> :
                <Link to="/react-sneakers/">
                    <button
                        className="flex flex-none group justify-center items-center text-center border-0 bg-btn relative h-14 w-56 text-white rounded-xl active:bg-green-700 hover:opacity-90 focus:outline-none">
                        <img
                            className="absolute left-6 transition duration-500 ease-in-out transform group-hover:-translate-x-1"
                            src={images.arrowLeft} alt="Arrow"/>
                        <span className="pl-4">Вернуться назад</span>
                    </button>
                </Link>}
        </div>
    );
};

export default Empty;
