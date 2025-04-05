
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[calc(100vh-65px)]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full rounded-lg" />
                <div className="absolute rounded-lg left-0  flex  justify-between items-end  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className=" text-white space-y-7 pl-8 md:py-90 w-2/3">
                        <h2 className="text-4xl md:text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-3 ">
                            <button className="btn btn-error bg-red-500 text-white border-none">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                    <div className="md:absolute md:flex md:gap-1 py-12 md:py-4 md:ml-450 ">
                        <a href="#slide4" className="btn btn-circle bg-red-500 text-white border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-500 text-white border-none">❯</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;