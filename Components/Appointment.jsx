import { FaArrowRight } from "react-icons/fa6";

const Appointment = () => {
    return (
        <div className="mt-24 mb-10">
            <div className="bgImgAppointment flex flex-col justify-center items-center h-[350px]">
                    <h1 className="mx-10 md:mx-0 max-w-[700px] text-center leading-8 md:leading-11 font-bold md:text-[35px] text-[28px] text-white md:mb-6 mb-2">A company involved in service,
                maintenance</h1>
                <div className="flex md:flex-row flex-col justify-between md:gap-5 gap-4 md:max-w-[700px] mx-10 items-center">
                    <p className="md:text-[30px] text-[25px] text-white">01712-500-921</p>
                    <button className="flex gap-1 text-md md:text-xl items-center text-white py-3 px-8 border-2 border-white rounded-full duration-300 hover:gap-3 hover:backdrop-blur-md cursor-pointer">Get Appointment <FaArrowRight/></button>
                </div>
                
            </div>
        </div>
    );
};

export default Appointment;