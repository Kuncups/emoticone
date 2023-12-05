import { createSignal } from 'solid-js';

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
                        <a href="/dashboard" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 border rounded-full">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 border rounded-full">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 border rounded-full">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-xl text-[#BA43F2] font-bold hover:text-yellow-600 bg-white p-4 border rounded-full">
                            Services
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
