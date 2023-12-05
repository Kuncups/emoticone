interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = (props: SidebarProps) => {
    return (
        <div class={`w-356 h-screen fixed top-0 left-0 bg-[#BA43F2] ${props.isOpen ? 'translate-x-0' : '-translate-x-full'} border border-black rounded-r-3xl transition-transform ease-in-out duration-300`}>
            <div class="order-first mb-20 flex items-center mt-3">
                <img src="logo2.png" alt="Emoticone Logo" class="w-60 h-18 p-2" />
                <button class="text-3xl text-white focus:outline-none ml-4 p-4" onClick={props.onClose}>
                    &lt; {/* Ini adalah karakter HTML untuk tanda panah kiri */}
                </button>
            </div>

            <nav class="mb-10">
                <ul class="space-y-4 flex flex-col gap-10 items-center">
                    <li>
                        <a href="/dashboard" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 px-16 border rounded-full flex items-center">
                            <img src="home.png" alt="Home Icon" class="mr-2 items-start" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a href="/promo" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 px-16 border rounded-full flex items-center">
                            <img src="promos.png" alt="Promo Icon" class="mr-2 items-start" />
                            <p>Promos</p>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 px-16 border rounded-full flex items-center">
                            <img src="Vector.png" alt="Home Icon" class="mr-2 items-start" />
                            <p>Orders</p>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 px-16 border rounded-full flex items-center">
                            <img src="Union.png" alt="Home Icon" class="mr-2 items-start" />
                            <p>MoodScoop</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
