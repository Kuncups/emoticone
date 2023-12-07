import { createSignal, createEffect } from 'solid-js';
import "solid-slider/slider.css";
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import Sidebar from '../components/Sidebar';
import SidebarProfile from '../components/SidebarProfile';

const Recommendation = () => {
    const [isSidebarOpen, setSidebarOpen] = createSignal(false);
    const [isSidebarProfileOpen, setSidebarProfileOpen] = createSignal(false);

    const openSidebarProfile = () => {
        setSidebarProfileOpen(true);
    };

    const closeSidebarProfile = () => {
        setSidebarProfileOpen(false);
    };
    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };


    const images = [
        "image5.png", "image6.png", "image7.png", "image7.png",
        "image6.png", "image5.png", "image5.png", "image6.png",
        "image7.png", "image5.png", "image6.png", "image7.png"
    ];

    const [, setCurrentSlide] = createSignal<number>(0);

    createEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000); // Change the duration as needed

        return () => clearInterval(interval);
    });

    return (
        <>
            <div class="relative min-h-screen flex flex-col items-center justify-center bg-[#F9D371]">
                <div class='flex absolute justify-center top-0 left-0 m-4 p-4 -mt-2 px-40 ml-0 bg-[#BA43F2]'>
                    <button class="text-3xl text-gray-800 focus:outline-none" onClick={openSidebar}>
                        ☰
                    </button>
                    <img src="logo2.png" alt="Logo" class="ml-4 w-64 h-14" />

                    <div class="w-47 h-45 absolute mt-10 items-right">
                        <img src='people.png' alt="People" class="w-47 h-45 absolute top-0 left-0 border-1.50 border-black" />
                    </div>
                    <div style="width: 709px; height: 15px; color: rgba(0, 0, 0, 0.40); font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word"></div>
                    <div style="width: 401px; height: 15px; color: rgba(0, 0, 0, 0.40); font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word"></div>

                    <div style="width: 400px; height: 15px; color: rgba(0, 0, 0, 0.40); font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word"></div>
                    <div style="width: 47px; height: 45px; position: relative">
                        <img style="width: 47px; height: 45px; left: 0px; top: 0px; position: absolute; black solid" src='people.png' onclick={openSidebarProfile}></img>
                    </div>
                </div>

                <div class='mt-20' style="width: 1365px; height: 393px; position: relative">
                    <div style="width: 1365px; height: 393px; left: 0px; top: 0px; position: absolute; background: #BA43F2; box-shadow: 9px 19px 5.5px rgba(0, 0, 0, 0.25); border-radius: 75px; border: 1px black solid"></div>
                    <div style="width: 434px; left: 42px; top: 40px; position: absolute; color: white; font-size: 45px; font-family: Inter; font-weight: 700; word-wrap: break-word">Recommendation</div>
                    <div style="width: 1163px; height: 225px; left: 101px; top: 129px; position: absolute">
                        <div style="width: 539px; height: 225px; left: 0px; top: 0px; position: absolute">
                            <div style="width: 539px; height: 225px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 25px"></div>
                            <div style="width: 229px; height: 59px; left: 154px; top: 78px; position: absolute; text-align: justify"><span style="color: white; font-size: 20px; font-family: Inter; font-weight: 700; word-wrap: break-word"><br /></span><span style="color: white; font-size: 22px; font-family: Inter; font-weight: 900; word-wrap: break-word">Strawberry Passion<br /></span><span style="color: white; font-size: 20px; font-family: Inter; font-weight: 700; word-wrap: break-word"><br /></span></div>
                            <img style="width: 144px; height: 192px; left: 10px; top: 17px; position: absolute" src="image7.png" />
                        </div>
                        <div style="width: 539px; height: 225px; left: 624px; top: 0px; position: absolute">
                            <div style="width: 539px; height: 225px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 25px"></div>
                            <div style="width: 229px; height: 59px; left: 232px; top: 78px; position: absolute; text-align: justify"><span style="color: white; font-size: 20px; font-family: Inter; font-weight: 700; word-wrap: break-word"><br /></span><span style="color: white; font-size: 22px; font-family: Inter; font-weight: 900; word-wrap: break-word">Strawberry Passion<br /></span><span style="color: white; font-size: 20px; font-family: Inter; font-weight: 700; word-wrap: break-word"><br /></span></div>
                        </div>
                    </div>
                    <img style="width: 144px; height: 192px; left: 750px; top: 140px; position: absolute" src="image6.png" />
                </div>

                <div class="w-[1365px] h-[437px] bg-purple-500 rounded-[75px] items-center shadow border border-black relative overflow-hidden mt-10">
                    <div class="text-white flex items-start justify-left ml-28 mt-7 text-3xl font-bold font-['Inter']"><a href='/menu'>Menu</a></div>
                    <SliderProvider>
                        <div class="flex items-center justify-center">
                            <Slider options={{ loop: true }}>
                                {Array.from({ length: Math.ceil(images.length / 3) }).map((_, i) => (
                                    <div class="flex justify-center gap-36 items-center p-5">
                                        {images.slice(i * 3, i * 3 + 3).map((image, index) => (
                                            <div style="width: 261px; height: 261px; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 25px">
                                                <img src={image} alt={`Slide ${i * 3 + index + 1}`} class="mr-4" />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div class="flex items-center absolute top-1/2 transform -translate-y-1/2 right-4">
                            <SliderButton next class="text-white text-2xl px-4 cursor-pointer">&gt;</SliderButton>
                        </div>

                        <div class="flex items-center absolute top-1/2 transform -translate-y-1/2 left-4">
                            <SliderButton prev class="text-white text-2xl px-4 cursor-pointer">&lt;</SliderButton>
                        </div>
                    </SliderProvider>
                </div>

            </div>

            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
                <SidebarProfile isOpen={isSidebarProfileOpen()} onClose={closeSidebarProfile} />
            </div>
        </>
    );
};

export default Recommendation;
