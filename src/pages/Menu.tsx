import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';

const Menu = () => {
    const [isSidebarOpen, setSidebarOpen] = createSignal(false);
    const [totalPrice, setTotalPrice] = createSignal(0); // Initialize total price to zero
    const [totalItems, setTotalItems] = createSignal(0); // Initialize total items to zero
    const [searchInput, setSearchInput] = createSignal('');
    
    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const addToCart = (price: string) => {
        setTotalItems((prevItems) => prevItems + 1);
        setTotalPrice((prevTotal) => prevTotal + parseInt(price.replace(/\D/g, ''), 10));
    };

    // Array of image data
    const imageData = [
        { imageUrl: 'image7.png', title: 'Bubblegum Bliss', description: 'Bubblegum Bliss Ice Cream is ice cream that is full of creamy smoothness and the taste of bubble gum', price: 'Rp.10.000' },
        { imageUrl: 'image8.png', title: 'Bubblegum Bliss', description: 'Bubblegum Bliss Ice Cream is ice cream that is full of creamy smoothness and the taste of bubble gum', price: 'Rp.16.000' },
        { imageUrl: 'image7.png', title: 'Bubblegum Bliss', description: 'Bubblegum Bliss Ice Cream is ice cream that is full of creamy smoothness and the taste of bubble gum', price: 'Rp.10.000' },
        { imageUrl: 'image7.png', title: 'Bubblegum Bliss', description: 'Bubblegum Bliss Ice Cream is ice cream that is full of creamy smoothness and the taste of bubble gum', price: 'Rp.10.000' },
        { imageUrl: 'image7.png', title: 'Bubblegum Bliss', description: 'Bubblegum Bliss Ice Cream is ice cream that is full of creamy smoothness and the taste of bubble gum', price: 'Rp.10.000' },
        { imageUrl: 'image7.png', title: 'Bubblegum Bliss', description: 'Bubblegum Bliss Ice Cream is ice cream that is full of creamy smoothness and the taste of bubble gum', price: 'Rp.10.000' },
    ];

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
                <div class='mt-10 flex gap-10 items-center justify-center' style="width: 1391px; height: 854px; background: #BA43F2; box-shadow: 9px 19px 5.5px rgba(0, 0, 0, 0.25); border-radius: 75px; border: 1px black solid">
                    {/* Image Grid */}
                    <div class="grid grid-cols-2 gap-10">
                        {imageData.map((data) => (
                            <div class="flex items-center justify-center gap-2">
                                <div class='flex items-center justify-center mr-10' style="width: 200px; height: 200px; background: rgba(217, 217, 217, 0.01); box-shadow: 0px 0px 11.199999809265137px 5px rgba(255, 255, 255, 0.25); border-radius: 25px">
                                    <img src={data.imageUrl} alt={data.title} class="w-40 h-40 object-contain" />
                                </div>
                                <div class="w-80 h-60 text-justify">
                                    <span class="text-white text-xl font-bold font-['Inter']"><br /></span>
                                    <span class="text-white text-xl font-black font-sans">{data.title}<br /></span>
                                    <span class="text-white text-xl font-bold font-sans"><br /></span>
                                    <span class="text-white text-base font-semibold font-sans">{data.description}</span>
                                    <span class="text-white text-xl font-bold font-sans"><br /></span>
                                    <div class='flex gap-36 items-center justify-center'>
                                        <p class="text-orange-300 text-lg font-bold font-sans mt-4">{data.price}</p>
                                        <button
                                            class="bg-white text-lg text-purple-500 p-2 rounded-full px-7 font-bold font-sans mt-4"
                                            onClick={() => addToCart(data.price)}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class='flex items-center justify-between gap-10 px-20 bg-white p-2 rounded-full mt-4 shadow-black'>
                    <p class="text-lg font-bold text-purple-500 font-sans items mr-10">
                        {totalItems()} Items
                    </p>
                    <p class="text-lg font-bold text-purple-500 font-sans">
                        Rp. {totalPrice()}
                    </p>
                </div>
            </div>
            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
            </div>
        </>
    );
};

export default Menu;
