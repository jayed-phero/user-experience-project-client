import React from 'react';
import 'tw-elements';
import './Carousel.css';

const Caurosel = () => {
    return (
        <div className='md:px-52 min-h-screen bg-zinc-800 pt-7'>
            <div
                id="carouselDarkVariant"
                class="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div class="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div class="carousel-item active relative float-left w-full">
                        <div className='carosel-img'>
                            <img
                                src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="block w-full rounded-xl "
                                alt="Motorbike Smoke"
                            />
                        </div>
                        <div class="carousel-caption hidden md:block absolute text-center top-56">
                            <h5 className="text-6xl text-green-500 font-semibold">Dental bonding is a technique</h5>
                            <p className='text-white'>Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile. Bonding is used to repair chipped teeth, decayed teeth, and cracked teeth.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div class="carousel-item relative float-left w-full">
                        <div className='carosel-img'>
                            <img
                                src="https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="block w-full rounded-xl"
                                alt="Mountaintop"
                            />
                        </div>
                        <div class="carousel-caption hidden md:block absolute text-center top-56">
                            <h5 className="text-6xl text-green-500 font-semibold">A dental bridge is a structure</h5>
                            <p className='text-white'>A dental bridge is a structure between two dental crowns to fill the gap between missing teeth. A bridge can be supported by your teeth, implants, or a combination of teeth and implants.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div class="carousel-item relative float-left w-full">
                        <div className='carosel-img'>
                            <img
                                src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="block w-full rounded-xl"
                                alt="Woman Reading a Book"
                            />
                        </div>
                        <div class="carousel-caption hidden md:block absolute text-center top-56">
                            <h5 className="text-6xl font-semibold text-green-500">A dental crown is a dental prosthesis</h5>
                            <p className='text-white'>A dental crown is a dental prosthesis which replaces the visible part of a tooth. A dental crown functions to strengthen teeth, restore their original shape, and improve their appearance.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner -->

                <!-- Controls --> */}
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Caurosel;