import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';

const Orders = () => {
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

                <div class="w-[1340px] h-[867px] relative mt-20">
                    <div class="w-[1205px] h-[220px] left-[91px] top-[141px] absolute bg-orange-400 rounded-[75px] shadow border border-black"></div>
                    <div class="w-[1340px] h-[867px] left-0 top-0 absolute bg-purple-500 rounded-[75px] shadow border border-black"></div>
                    <div class="w-[1240px] h-[235px] left-[56px] top-[134px] absolute bg-pink-600 rounded-[75px] shadow border border-black"></div>
                    <div class="w-[436px] h-[61px] left-[466px] top-[39px] absolute text-center text-white text-5xl font-bold font-['Inter']">Riwayat Transaksi</div>
                    <div class="w-[1205px] h-[210px] left-[56px] top-[145px] absolute">
                        <div class="w-[236px] left-[190px] top-0 absolute text-center text-white text-xl font-bold font-['Inter']">2023-11-24     15:30:00</div>
                        <div class="w-[1015px] h-[33px] left-[190px] top-[31px] absolute">
                            <div class="w-[331px] left-[74px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Choco Mint Ice Cream</div>
                            <div class="w-[45px] left-0 top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">1</div>
                            <div class="w-[168px] left-[501px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">@Rp 10.000</div>
                            <div class="w-[153px] left-[862px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 10.000</div>
                        </div>
                        <div class="w-[1015px] h-[34px] left-[190px] top-[77px] absolute">
                            <div class="w-[374px] left-[38px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Pistachio Ice Cream</div>
                            <div class="w-[45px] left-0 top-[1px] absolute text-center text-white text-[27px] font-bold font-['Inter']">1</div>
                            <div class="w-[168px] left-[501px] top-[1px] absolute text-center text-white text-[27px] font-bold font-['Inter']">@Rp 10.000</div>
                            <div class="w-[153px] left-[862px] top-[1px] absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 10.000</div>
                        </div>
                        <div class="w-[1015px] h-[33px] left-[190px] top-[125px] absolute">
                            <div class="w-[387px] left-[94px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Strawberry Vanilla Ice Cream</div>
                            <div class="w-[45px] left-0 top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">1</div>
                            <div class="w-[168px] left-[501px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">@Rp 20.000</div>
                            <div class="w-[153px] left-[862px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 20.000</div>
                        </div>
                        <div class="w-[1011px] h-[35px] left-[190px] top-[171px] absolute">
                            <div class="w-[107px] left-0 top-0 absolute text-center text-white text-[29px] font-bold font-['Inter']">TOTAL</div>
                            <div class="w-36 left-[867px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 40.000</div>
                        </div>
                        <img class="w-[216px] h-[201px] left-0 top-[9px] absolute" src="image9.png" />
                    </div>
                    <div class="w-[1246px] h-[189px] left-[50px] top-[389px] absolute">
                        <div class="w-[1240px] h-[189px] left-[6px] top-0 absolute bg-fuchsia-500 rounded-[75px] shadow border border-black"></div>
                        <div class="w-[1211px] h-[164px] left-0 top-[13px] absolute">
                            <div class="w-[236px] left-[196px] top-[6px] absolute text-center text-white text-xl font-bold font-['Inter']">2023-11-24     15:30:00</div>
                            <div class="w-[1015px] h-[33px] left-[196px] top-[37px] absolute">
                                <div class="w-[284px] left-[94px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Chocolate Ice Cream</div>
                                <div class="w-[45px] left-0 top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">1</div>
                                <div class="w-[168px] left-[501px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">@Rp 10.000</div>
                                <div class="w-[153px] left-[862px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 10.000</div>
                            </div>
                            <div class="w-[1015px] h-[33px] left-[196px] top-[77px] absolute">
                                <div class="w-[387px] left-[94px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Strawberry Vanilla Ice Cream</div>
                                <div class="w-[45px] left-0 top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">1</div>
                                <div class="w-[168px] left-[501px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">@Rp 20.000</div>
                                <div class="w-[153px] left-[862px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 20.000</div>
                            </div>
                            <div class="w-[1011px] h-[35px] left-[196px] top-[123px] absolute">
                                <div class="w-[107px] left-0 top-0 absolute text-center text-white text-[29px] font-bold font-['Inter']">TOTAL</div>
                                <div class="w-36 left-[867px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 40.000</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[1246px] h-[189px] left-[50px] top-[389px] absolute">
                        <div class="w-[1240px] h-[189px] left-[6px] top-0 absolute bg-orange-400 rounded-[75px] shadow border border-black"></div>
                        <div class="w-[1211px] h-[164px] left-0 top-[13px] absolute">
                            <div class="w-[236px] left-[196px] top-[6px] absolute text-center text-white text-xl font-bold font-['Inter']">2023-11-24     15:30:00</div>
                            <div class="w-[1015px] h-[33px] left-[196px] top-[37px] absolute">
                                <div class="w-[284px] left-[94px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Chocolate Ice Cream</div>
                                <div class="w-[45px] left-0 top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">1</div>
                                <div class="w-[168px] left-[501px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">@Rp 10.000</div>
                                <div class="w-[153px] left-[862px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 10.000</div>
                            </div>
                            <img class="w-[221px] h-[164px] left-0 top-0 absolute" src="image10.png" />
                            <div class="w-[1015px] h-[33px] left-[196px] top-[77px] absolute">
                                <div class="w-[387px] left-[94px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Strawberry Vanilla Ice Cream</div>
                                <div class="w-[45px] left-0 top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">1</div>
                                <div class="w-[168px] left-[501px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">@Rp 20.000</div>
                                <div class="w-[153px] left-[862px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 20.000</div>
                            </div>
                            <div class="w-[1011px] h-[35px] left-[196px] top-[123px] absolute">
                                <div class="w-[107px] left-0 top-0 absolute text-center text-white text-[29px] font-bold font-['Inter']">TOTAL</div>
                                <div class="w-36 left-[867px] top-0 absolute text-center text-white text-[27px] font-bold font-['Inter']">Rp 40.000</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
            </div>
        </>
    );
};

export default Orders;
