import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';
import SidebarProfile from '../components/SidebarProfile';

const BuktiTransaksi = () => {
    const [isSidebarOpen, setSidebarOpen] = createSignal(false);
    const [imagePreview, setImagePreview] = createSignal<string | null>(null);
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

    const handleFileChange = (event: Event) => {
        const inputElement = event.target as HTMLInputElement;
        const file = inputElement.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
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
                        <img style="width: 47px; height: 45px; left: 0px; top: 0px; position: absolute; black solid" src='people.png' onclick={openSidebarProfile}></img>
                    </div>
                </div>

                <div class="w-[1341px] h-[867px] relative mt-20">
                    <div class="w-[1341px] h-[867px] left-0 top-0 absolute bg-purple-500 rounded-[75px] shadow border border-black"></div>
                    <div class="w-[544px] left-[53px] top-[37px] absolute text-white text-[45px] font-bold font-['Inter']">Upload Bukti Transaksi</div>
                    <div class="w-[1237px] h-[0px] left-[52px] top-[151px] absolute border border-black"></div>
                    <div class="w-[515px] h-[334px] left-[413px] top-[318px] absolute">
                        <div class="w-[515px] h-[334px] left-0 top-0 absolute bg-stone-300 bg-opacity-90 rounded-[25px]">
                            <div class="w-[515px] h-[334px] left-0 top-0 absolute bg-stone-300 bg-opacity-90 rounded-[25px]">
                                <div class="w-[362px] h-[242px] left-[32px] top-0 absolute bg-stone-300 bg-opacity-0"></div>
                                <div class="w-[35px] h-[35px] left-[455px] top-[24px] absolute"></div>
                                {imagePreview() && (
                                    <img
                                        class="w-full h-full rounded-xl -left-[0px] top-[0px] absolute border border-black"
                                        src={imagePreview() ?? undefined}
                                        alt="Preview"
                                    />
                                )}
                            </div>

                        </div>
                        <div class="w-[233px] left-[150px] top-[206px] absolute text-white text-xl font-normal font-['Inter']">

                        </div>
                    </div>
                    <div class="w-[1237px] h-16 left-[52px] top-[763px] absolute bg-pink-600 rounded-[15px] shadow border border-black"></div>
                    <input
                        type="file"
                        class="bg-pink-600 w-[187px] h-[50px] left-[577px] top-[770px] absolute text-center text-white text-3xl font-bold font-['Poppins']"
                        onChange={handleFileChange}
                    >
                        Upload
                    </input>
                    <div class="left-[53px] top-[185px] absolute text-center text-white text-[32px] font-bold font-['Inter']">Silahkan mengupload bukti transaksi di bawah ini :</div>
                </div>

            </div>

            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
                <SidebarProfile isOpen={isSidebarProfileOpen()} onClose={closeSidebarProfile} />
            </div>
        </>
    );
};

export default BuktiTransaksi;
