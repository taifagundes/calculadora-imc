import React from "react";

//Blog
import BlogData from "./BlogData";
import services from "../components/Services";

//icon
import {CgCloseR} from 'react-icons/cg'

const Modal = ({activeID, setShowModal}) => {

    const services = BlogData.find(services => services.id === activeID)
    
    if (!services){
        return null;
    }

    return (
        <div className="w-full h-full fixed top-0 left-0 z-10 bg-custom-color bg-opacity-50
        flex items-center justify-center">
            <div className="p-4 md:p-5 w-[90%] h-auto max-w-screen-md bg-white rounded-xl overflow-y-auto ">

                {/* button close*/}
                <button 
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 text-custom-color border-2 border-custom-color rounded-md text-[30px] md:text-[40px] cursor-pointer">
                        <CgCloseR />    
                </button> 
                
                {/* image*/}
                <div className="w-full">
                    <img 
                        className="rounded-xl h-[250px] w-full md:h-[300px] md:w-[450px] mx-auto" 
                        src={services.imgUrl} 
                        alt="image" />
                </div>

                {/* content */}
                <div className="w-full mt-4">

                    {/* title */}
                    <h2 className="text-2xl text-primary font-secondary font-semibold my-3">
                        {services.title}
                    </h2>
                    {/* description */}
                    <p className="text-[14px] text-justify md:text-[15px] leading-7 text-primary mb-3">
                        {services.description}
                    </p>
                <div>
                    {/* link page */}
                    <a 
                        href={services.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-primary hover:underline"
                    >
                        Leia mais 
                    </a>    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;