import { createSignal, createEffect } from 'solid-js';
import "solid-slider/slider.css";
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import Sidebar from '../components/Sidebar';
import SidebarProfile from '../components/SidebarProfile';

const Dashboard = () => {
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
                <div class='flex absolute justify-center top-0 left-0 m-4'>
                    <button class="text-3xl text-gray-800 focus:outline-none" onClick={openSidebar}>
                        ☰
                    </button>
                    <img src="logo2.png" alt="Logo" class="ml-4 w-64 h-14" />
                    <div class="w-47 h-45 absolute top-28 items-right">
                        <img src='people.png' alt="People" class="w-47 h-45 absolute top-0 left-0 border-1.50 border-black" />
                    </div>
                    <div style="width: 709px; height: 15px; color: rgba(0, 0, 0, 0.40); font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word"></div>
                    <div style="width: 400px; height: 15px; color: rgba(0, 0, 0, 0.40); font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word"></div>
                    <input
                        type="text"
                        placeholder="Enter a keyword to search Flavour"
                        class="w-96 h-8 px-3 text-sm border border-gray-500 rounded-md mr-8 focus:outline-none"
                    />
                    <div style="width: 47px; height: 45px; position: relative">
                        <img style="width: 47px; height: 45px; left: 0px; top: 0px; position: absolute; black solid" src='people.png' onclick={openSidebarProfile}></img>
                    </div>
                </div>
                <div style="width: 1249px; height: 341px; position: relative">
                    <div style="width: 1249px; height: 310px; left: 0px; top: 0px; position: absolute; background: #BA43F2; box-shadow: 9px 19px 5.5px rgba(0, 0, 0, 0.25); border-radius: 75px; border: 1px black solid"></div>
                    <div style="width: 356px; height: 96px; left: 50px; top: 157px; position: absolute; background: #EF2F88; box-shadow: 9px 19px 5.5px rgba(0, 0, 0, 0.25); border-radius: 75px; border: 1px black solid"></div>
                    <div class="w-[1249px] h-[341px] relative">
                        <div class="w-[954px] h-[89px] left-[50px] top-[34px] absolute text-white text-[40px] font-bold font-['Inter']">Flavors that Speak Your Heart, Emotions That Melt in Your Mouth</div>
                        <div class="w-[213px] h-9 left-[183px] top-[187px] absolute text-white text-3xl font-bold font-['Inter']">100 Points</div>
                        <img class="w-[133px] h-[133px] left-[50px] top-[139px] absolute" src="image4.png" />
                        <img class="w-[264px] h-[272px] left-[921px] top-[69px] absolute" src="image5.png" />
                        <div class="w-[130px] h-[125px] left-[1075px] top-[8px] absolute bg-rose-600 rounded-full"></div>
                        <div class="w-[123.93px] h-[52.59px] left-[1078px] top-[45px] absolute text-center text-white text-2xl font-bold font-['Inter']">50% <br />Discount</div>
                    </div>
                </div>
                <div class="w-[1249px] h-[437px] bg-purple-500 rounded-[75px] items-center shadow border border-black relative overflow-hidden">
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

export default Dashboard;
