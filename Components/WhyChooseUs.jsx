import Image from 'next/image';
import imgStyle from '../public/logo/style-vector2.png';

const WhyChooseUs = () => {
    return (
        <div className="max-w-[1050px] mx-auto mb-20">
            
            {/* blur color 
            <div className="absolute md:w-[200px] md:h-[200px] w-[150px] h-[150px] blur-[200px] bg-[var(--mainColor)] -z-10"></div> */}

            {/* heading section  */}
            <div className="">
                <div className="flex justify-center -z-10">
                    <Image src={imgStyle} width={300} className="absolute md:mt-[58px] mt-[56px] md:w-[300px] w-[250px]"/>
                </div>
                <h1 className="mt-7 text-[35px] md:text-[40px] text-center text-[var(--secondaryColor)]">Why customer love to</h1>
                <h1 className="-mt-2 text-[35px] md:text-[40px] text-center font-bold text-[var(--mainColor)]">Choose Us</h1>
            </div>

            {/* ***************** */}
            {/* TODO  */}
            </div>
    );
};

export default WhyChooseUs;