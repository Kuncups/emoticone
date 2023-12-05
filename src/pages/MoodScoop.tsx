import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';

const MoodScoop = () => {
    const [isSidebarOpen, setSidebarOpen] = createSignal(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

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
                        <img style="width: 47px; height: 45px; left: 0px; top: 0px; position: absolute; black solid" src='people.png'></img>
                    </div>
                </div>

                <div class='mt-20' style="width: 1342.60px; height: 832.60px; position: relative">
                    <img class="w-[319px] h-[319px] left-0 top-[128.41px] absolute origin-top-left rotate-[-46.00deg]" src="image1.png" />
                    <img class="w-[360px] h-[360px] left-[1034.82px] top-[568px] absolute origin-top-right rotate-[70.33deg]" src="image3.png" />
                    <div style="width: 884px; height: 805px; left: 199px; top: 0px; position: absolute; background: #BA43F2; box-shadow: 9px 19px 5.5px rgba(0, 0, 0, 0.25); border-radius: 75px; border: 1px black solid"></div>
                    <div style="width: 672px; height: 567px; left: 306px; top: 184px; position: absolute; justify-content: center; align-items: center; display: inline-flex">
                        <div style="width: 672px; height: 567px; position: relative">
                            <div style="width: 300px; height: 129px; left: 0px; top: 0px; position: absolute">
                                <img style="width: 95px; height: 95px; left: 15px; top: 17px; position: absolute" src="happy.png" />
                                <div style="width: 300px; height: 129px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 75px"></div>
                                <div style="left: 138px; top: 47px; position: absolute; color: #FFF8F8; font-size: 30px; font-family: Inter; font-weight: 600; word-wrap: break-word">Happy</div>
                            </div>
                            <div style="width: 300px; height: 129px; left: 0px; top: 219px; position: absolute">
                                <div style="width: 300px; height: 129px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 75px"></div>
                                <div style="left: 138px; top: 47px; position: absolute; color: #FFF8F8; font-size: 30px; font-family: Inter; font-weight: 600; word-wrap: break-word">Anxious</div>
                            </div>
                            <div style="width: 300px; height: 129px; left: 0px; top: 438px; position: absolute">
                                <div style="width: 300px; height: 129px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 75px"></div>
                                <div style="left: 118px; top: 47px; position: absolute; color: #FFF8F8; font-size: 30px; font-family: Inter; font-weight: 600; word-wrap: break-word">Anthusiast<br /></div>
                            </div>
                            <div style="width: 300px; height: 348px; left: 372px; top: 219px; position: absolute">
                                <div style="width: 300px; height: 129px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 75px"></div>
                                <div style="width: 300px; height: 129px; left: 0px; top: 219px; position: absolute; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 75px"></div>
                                <div style="left: 138px; top: 47px; position: absolute; color: #FFF8F8; font-size: 30px; font-family: Inter; font-weight: 600; word-wrap: break-word">Love</div>
                                <div style="left: 138px; top: 266px; position: absolute; color: #FFF8F8; font-size: 30px; font-family: Inter; font-weight: 600; word-wrap: break-word">Tired</div>
                            </div>
                            <div style="width: 300px; height: 129px; left: 372px; top: 0px; position: absolute">
                                <div style="width: 300px; height: 129px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 75px"></div>
                                <div style="left: 138px; top: 47px; position: absolute; color: #FFF8F8; font-size: 30px; font-family: Inter; font-weight: 600; word-wrap: break-word">Sad</div>
                            </div>
                        </div>
                    </div>
                    <div style="width: 332px; left: 512px; top: 38px; position: absolute; color: white; font-size: 45px; font-family: Inter; font-weight: 700; word-wrap: break-word">MoodScoop</div>
                    <img style="width: 95px; height: 95px; left: 700px; top: 201px; position: absolute" src="sad.png" />
                    <div style="width: 743px; height: 0px; left: 270px; top: 126px; position: absolute; border: 1px black solid"></div>
                    <img style="width: 95px; height: 95px; left: 321px; top: 420px; position: absolute" src="worry.png" />
                    <img style="width: 95px; height: 95px; left: 700px; top: 639px; position: absolute" src="tired.png" />
                    <img style="width: 95px; height: 95px; left: 697px; top: 419px; position: absolute" src="love.png" />
                </div>

            </div>

            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
            </div>
        </>
    );
};

export default MoodScoop;
