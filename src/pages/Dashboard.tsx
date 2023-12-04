import { Accessor, createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = createSignal(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const images = ["image6.png", "image7.png", "image8.png"];

    const [currentSlide, setCurrentSlide] = createSignal<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };


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
                        <img style="width: 47px; height: 45px; left: 0px; top: 0px; position: absolute; black solid" src='people.png'></img>
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
                    <div class="text-white flex items-start justify-left ml-28 mt-7 text-3xl font-bold font-['Inter']">Menu</div>
                    <div class="flex absolute items-center justify-center top-0 left-0 w-full h-full">
                        {images.map((image, index) => (
                            <div
                                style={`width: 261px; height: 261px; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 25px; transform: translateX(${(index - currentSlide()) * 60}%)`}
                                onClick={() => setCurrentSlide(index)}
                            >
                                <img
                                    src={image}
                                    alt={`Gambar ${index + 1}`}
                                    class="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    <button class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl" onClick={prevSlide}>
                        ❮
                    </button>
                    <button class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl" onClick={nextSlide}>
                        ❯
                    </button>
                </div>

            </div>
            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
            </div>
        </>
    );
};

export default Dashboard;
