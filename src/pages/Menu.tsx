import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
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
                <div class='mt-10' style="width: 1391px; height: 854px; background: #BA43F2; box-shadow: 9px 19px 5.5px rgba(0, 0, 0, 0.25); border-radius: 75px; border: 1px black solid">
                    
                </div>
            </div>
            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
            </div>
        </>
    );
};

export default Dashboard;
