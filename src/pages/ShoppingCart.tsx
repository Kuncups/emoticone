import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';

const ShoppingCart = () => {
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

                <div class="w-[1275.60px] h-[867px] relative mt-20">
                    <img class="w-[319px] h-[319px] left-0 top-[128.41px] absolute origin-top-left rotate-[-46.00deg]" src="image1.png" />
                    <img class="w-[360px] h-[360px] left-[974.82px] top-[668px] absolute origin-top-right rotate-[70.33deg]" src="image3.png" />
                    <div class="w-[801px] h-[867px] left-[203px] top-0 absolute bg-purple-500 rounded-[75px] shadow border border-black"></div>
                    <div class="w-[743px] h-[148px] left-[232px] top-[349px] absolute">
                        <div class="w-[743px] h-28 left-0 top-0 absolute bg-pink-600 rounded-[15px] shadow border border-black">
                            <div class="w-[87px] h-[86px] justify-center items-center inline-flex mt-3 ml-3">
                                <img class="w-[87px] h-[86px] shadow" src="image7.png" />
                            </div>
                        </div>
                        <div class="w-[197px] h-[72px] left-[128px] top-[1px] absolute text-white text-lg font-bold font-['Inter']"><br />Peanut Butter Power<br /><br /><br /><br /><br /></div>
                        <div class="w-[109px] h-[22px] left-[571px] top-[41px] absolute text-white text-lg font-bold font-['Inter']">IDR 10.000</div>
                        <div class="w-[131px] h-[34px] left-[128px] top-[56px] absolute bg-white rounded-[100px]"></div>
                        <div class='flex items-center justify-center'>
                            <div class="w-[205px] h-[83px] left-[148px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">-</div>
                            <div class="w-[205px] h-[83px] left-[188px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">1</div>
                            <div class="w-[205px] h-[83px] left-[230px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">+</div>
                        </div>
                        <img class="w-[25px] h-[25px] left-[691px] top-[39px] absolute" src="trash.png" />
                    </div>
                    <div class="w-[743px] h-[148px] left-[232px] top-[497px] absolute">
                        <div class="w-[743px] h-28 left-0 top-0 absolute bg-pink-600 rounded-[15px] shadow border border-black">
                            <div class="w-[87px] h-[86px] justify-center items-center inline-flex mt-3 ml-3">
                                <img class="w-[87px] h-[86px] shadow" src="image7.png" />
                            </div>
                        </div>
                        <div class="w-[280px] h-[72px] left-[128px] top-[23px] absolute text-white text-lg font-bold font-['Inter']">Strawberry Passion</div>
                        <div class="w-[109px] h-[22px] left-[571px] top-[41px] absolute text-white text-lg font-bold font-['Inter']">IDR 10.000</div>
                        <div class="w-[131px] h-[34px] left-[128px] top-[56px] absolute bg-white rounded-[100px]"></div>
                        <div class='flex items-center justify-center'>
                            <div class="w-[205px] h-[83px] left-[148px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">-</div>
                            <div class="w-[205px] h-[83px] left-[188px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">1</div>
                            <div class="w-[205px] h-[83px] left-[230px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">+</div>
                        </div>
                        <img class="w-[25px] h-[25px] left-[691px] top-[39px] absolute" src="trash.png" />
                    </div>
                    <div class="w-[743px] h-[148px] left-[232px] top-[201px] absolute">
                        <div class="w-[743px] h-[148px] left-0 top-0 absolute">
                            <div class="w-[743px] h-28 left-0 top-0 absolute bg-pink-600 rounded-[15px] shadow border border-black">
                                <div class="w-[87px] h-[86px] justify-center items-center inline-flex mt-3 ml-3">
                                    <img class="w-[87px] h-[86px] shadow" src="image7.png" />
                                </div>
                            </div>
                            <div class="w-[197px] h-[72px] left-[128px] top-[1px] absolute text-white text-lg font-bold font-['Inter']"><br />Cookies n cream<br /><br /><br /><br /><br /></div>
                            <div class="w-[109px] h-[22px] left-[571px] top-[41px] absolute text-white text-lg font-bold font-['Inter']">IDR 10.000</div>
                            <div class="w-[131px] h-[34px] left-[128px] top-[56px] absolute bg-white rounded-[100px]"></div>
                            <div class='flex items-center justify-center'>
                                <div class="w-[205px] h-[83px] left-[148px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">-</div>
                                <div class="w-[205px] h-[83px] left-[188px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">1</div>
                                <div class="w-[205px] h-[83px] left-[230px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">+</div>
                            </div>
                            <img class="w-[87px] h-[86px] left-[22px] top-[13px] absolute rounded-[15px] border-2 border-white" src="https://via.placeholder.com/87x86" />
                            <img class="w-[25px] h-[25px] left-[691px] top-[39px] absolute" src="trash.png" />
                        </div>
                        <div class="w-[743px] h-[148px] left-0 top-0 absolute">
                            <div class="w-[743px] h-28 left-0 top-0 absolute bg-pink-600 rounded-[15px] shadow border border-black">
                                <div class="w-[87px] h-[86px] justify-center items-center inline-flex mt-3 ml-3">
                                    <img class="w-[87px] h-[86px] shadow" src="image7.png" />
                                </div>
                            </div>
                            <div class="w-[197px] h-[72px] left-[128px] top-[23px] absolute text-white text-lg font-bold font-['Inter']">Coffe Boost</div>
                            <div class="w-[109px] h-[22px] left-[571px] top-[41px] absolute text-white text-lg font-bold font-['Inter']">IDR 10.000</div>
                            <div class="w-[131px] h-[34px] left-[128px] top-[56px] absolute bg-white rounded-[100px]"></div>
                            <div class='flex items-center justify-center'>
                                <div class="w-[205px] h-[83px] left-[148px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">-</div>
                                <div class="w-[205px] h-[83px] left-[188px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">1</div>
                                <div class="w-[205px] h-[83px] left-[230px] top-[65px] absolute text-purple-500 text-[15px] font-bold font-['Inter']">+</div>
                            </div>
                            <img class="w-[25px] h-[25px] left-[691px] top-[39px] absolute" src="trash.png" />
                        </div>
                        <a href='/payment'>
                            <div class="w-[635px] h-24 relative mt-96 top-20 ml-16">
                                <div class="w-[635px] h-24 left-0 top-0 absolute bg-pink-600 rounded-[15px] shadow border border-black"></div>
                                <div class="w-[199px] h-9 left-[417px] top-[28px] absolute text-white text-3xl font-bold font-['Inter']">IDR 30.000</div>
                                <div class="w-[252px] h-[43px] left-[36px] top-[28px] absolute text-white text-3xl font-bold font-['Inter']">Total Payment</div>
                            </div>
                        </a>
                    </div>
                    <div class="w-[332px] left-[232px] top-[32px] absolute text-white text-[45px] font-bold font-['Inter']">Shopping Cart</div>
                    <div class="w-[629px] h-[72px] left-[232px] top-[97px] absolute text-white text-xl font-bold font-['Inter']">You have 3 item in your cart</div>
                    <div class="w-[743px] h-[0px] left-[232px] top-[147px] absolute border border-black">

                    </div>

                </div>
            </div>

            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
            </div>
        </>
    );
};

export default ShoppingCart;
