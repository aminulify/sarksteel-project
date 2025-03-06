export const metadata = {
    title: "Sarkbd । About"
}

const AboutUs = () => {
    return (
        <section>
            <div className='about-heading-img flex items-center justify-center text-center' title="about us background image">
                <div className="grid place-items-center mt-8">
                <h1 className="text-[32px] md:text-[42px] font-black text-white mx-10">About Us</h1>
                <p className="md:w-[500px] mx-12 text-center text-white md:text-xl">We have strong and experienced team member. We are ready to build your dream.</p>
                </div>
            </div>  

            <main>
                {/* blur color  */}
                <div className="absolute md:w-[260px] md:h-[200px] w-[150px] h-[150px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-80"></div>
            </main>  
        </section>
    );
};

export default AboutUs;