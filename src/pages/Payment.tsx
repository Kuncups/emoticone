import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';

const Payment = () => {
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

                <div class="w-[1270.60px] h-[867px] relative mt-20">
                    <img class="w-[319px] h-[319px] left-0 top-[128.41px] absolute origin-top-left rotate-[-46.00deg]" src="image1.png" />
                    <img class="w-[360px] h-[360px] left-[974.82px] top-[668px] absolute origin-top-right rotate-[70.33deg]" src="image3.png" />
                    <div class="w-[801px] h-[867px] left-[204px] top-0 absolute bg-purple-500 rounded-[75px] shadow border border-black"></div>
                    <div class="w-[332px] left-[241px] top-[32px] absolute text-white text-[45px] font-bold font-['Inter']">Payment</div>
                    <div class="w-[629px] h-[72px] left-[241px] top-[96px] absolute text-white text-xl font-bold font-['Inter']">Pilih Salah Satu Bank</div>
                    <div class="w-[743px] h-[0px] left-[233px] top-[151px] absolute border border-black"></div>
                    <div class="w-[743px] h-[0px] left-[241px] top-[306px] absolute border border-black"></div>
                    <div class="w-[743px] h-[0px] left-[241px] top-[465px] absolute border border-black"></div>
                    <div class="w-[743px] h-[0px] left-[241px] top-[631px] absolute border border-black"></div>
                    <img class="w-[183px] h-[109px] left-[241px] top-[178px] absolute border border-black" src="BCA.png" />
                    <img class="w-[183px] h-[119px] left-[241px] top-[325px] absolute border border-black" src="BNI.png" />
                    <img class="w-[183px] h-[120px] left-[241px] top-[486px] absolute border border-black" src="Mandiri.png" />
                    <div class="w-[272px] h-[72px] left-[460px] top-[193px] absolute text-white text-2xl font-bold font-['Inter']"><br />BCA Virtual Account<br /><br /><br /><br /><br /></div>
                    <div class="w-[272px] h-[72px] left-[460px] top-[339px] absolute text-white text-2xl font-bold font-['Inter']"><br />BNI Virtual Account<br /><br /><br /><br /><br /></div>
                    <div class="left-[252px] top-[663px] absolute text-center text-white text-2xl font-bold font-['Inter']">Kode Unik Pembayaran</div>
                    <div class="left-[679px] top-[663px] absolute text-center text-white text-2xl font-bold font-['Inter']">: 8700-221-2110512113</div>
                    <div class="left-[679px] top-[701px] absolute text-center text-white text-2xl font-bold font-['Inter']">: Rp 30.000</div>
                    <div class="w-[272px] h-[72px] left-[460px] top-[339px] absolute text-white text-2xl font-bold font-['Inter']"><br />BNI Virtual Account<br /><br /><br /><br /><br /></div>
                    <div class="w-[318px] h-[72px] left-[460px] top-[506px] absolute text-white text-2xl font-bold font-['Inter']"><br />Mandiri Virtual Account<br /><br /><br /><br /><br /></div>
                    <div class="left-[252px] top-[701px] absolute text-center text-white text-2xl font-bold font-['Inter']">Jumlah Yang Harus Dibayarkan</div>
                    <div class="w-[735px] h-16 left-[241px] top-[761px] absolute bg-pink-600 rounded-[15px] shadow border border-black"></div>
                    <a href='/buktitransaksi'>
                        <div class="w-[187px] h-[50px] left-[502px] top-[768px] absolute text-center text-white text-3xl font-bold font-['Poppins']">Lanjut</div>
                    </a>
                </div>

            </div>

            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
            </div>
        </>
    );
};

export default Payment;
