interface SidebarProfileProps {
    isOpen: boolean;
    onClose: () => void;
}

const SidebarProfile = (props: SidebarProfileProps) => {
    return (
        <div class={`w-356 h-96 fixed top-0 right-0 bg-[#BA43F2] ${props.isOpen ? 'translate-x-0' : 'translate-x-full'} border border-black rounded-l-3xl transition-transform ease-in-out duration-300`}>
            <div class="order-first mb-10 flex items-center mt-3">
                <div class="flex flex-col mt-3">
                    <div class="flex justify-center items-center mb-1">
                        <img src="people.png" class="ml-4 h-10 w-10" />
                        <p class="ml-2 text-white font-bold text-xl">Bima Putra Effendi</p>
                    </div>
                    <p class="ml-5 text-white font-semibold">bimaputraeffendi@gmail.com</p>
                </div>
                <button class="text-3xl text-white focus:outline-none ml-4 p-4" onClick={props.onClose}>
                    &gt; {/* Ini adalah karakter HTML untuk tanda panah kanan */}
                </button>
            </div>

            <nav class="mb-10">
                <ul class="space-y-4 flex flex-col gap-10 items-center">
                    <li>
                        <a href="/profile" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 px-16 border rounded-full flex items-center">
                            <p>Profiles</p>
                        </a>
                    </li>
                    <li>
                        <a href="/landingpage" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 px-16 border rounded-full flex items-center">
                            <p>Logout</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SidebarProfile;