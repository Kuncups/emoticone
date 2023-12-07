import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';
import SidebarProfile from '../components/SidebarProfile';

const Profile = () => {
    const [isSidebarOpen, setSidebarOpen] = createSignal(false);
    const [showPassword, setShowPassword] = createSignal(false);
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword());
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

                <div class='mt-20' style="width: 884px; height: 805px; position: relative">
                    <div style="width: 884px; height: 805px; left: 0px; top: 0px; position: absolute; background: linear-gradient(180deg, #BA43F2 0%, rgba(186, 67, 242, 0) 100%); box-shadow: 9px 19px 5.5px rgba(0, 0, 0, 0.25); border-radius: 75px; border: 1px black solid"></div>
                    <div style="width: 105.49px; height: 101px; left: 389px; top: 39px; position: absolute">
                        <img style="width: 105.49px; height: 101px; left: 0px; top: 0px; position: absolute; solid" src='people.png'></img>
                    </div>
                    <div style="left: 308px; top: 174px; position: absolute; color: #FFF8F8; font-size: 30px; font-family: Inter; font-weight: 600; word-wrap: break-word">Bima Putra Effendi</div>
                    <div style="left: 398px; top: 228px; position: absolute; color: #FFF8F8; font-size: 18px; font-family: Inter; font-weight: 600; word-wrap: break-word">Customer</div>
                    <div style="left: 81px; top: 287px; position: absolute; color: #FFF8F8; font-size: 25px; font-family: Inter; font-weight: 600; word-wrap: break-word">Username</div>
                    <div style="left: 81px; top: 415px; position: absolute; color: #FFF8F8; font-size: 25px; font-family: Inter; font-weight: 600; word-wrap: break-word">Email</div>
                    <div style="left: 81px; top: 547px; position: absolute; color: #FFF8F8; font-size: 25px; font-family: Inter; font-weight: 600; word-wrap: break-word">Password</div>
                    <a href='/profile'>
                        <div style="width: 722px; height: 52px; left: 81px; top: 338px; position: absolute; background: #EF2F88; border-radius: 5px; border: 1px rgba(0, 0, 0, 0.60) solid"></div>
                        <div style="width: 722px; height: 52px; left: 81px; top: 466px; position: absolute; background: #EF2F88; border-radius: 5px; border: 1px rgba(0, 0, 0, 0.60) solid"></div>
                        <div style="width: 722px; height: 52px; left: 81px; top: 594px; position: absolute; background: #EF2F88; border-radius: 5px; border: 1px rgba(0, 0, 0, 0.60) solid"></div>
                        <div style="width: 167px; height: 52px; left: 636px; top: 722px; position: absolute; background: #FF1494; border-radius: 5px; border: 1px rgba(0, 0, 0, 0.60) solid"></div>
                        <div style="left: 701px; top: 730px; position: absolute; color: #FFF8F8; font-size: 25px; font-family: Inter; font-weight: 600; word-wrap: break-word">OK</div>
                    </a>
                    <input class='border border-black rounded-md bg-[#EF2F88] p-4' style="width: 723px; height: 50px; left: 80px; top: 339px; position: absolute; color: black; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word" />
                    <input class='border border-black rounded-md bg-[#EF2F88] p-4' style="width: 723px; height: 50px; left: 80px; top: 467px; position: absolute; color: black; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word" />
                    <input class='border border-black rounded-md bg-[#EF2F88] p-4' style="width: 723px; height: 50px; left: 80px; top: 595px; position: absolute; color: black; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word" type={showPassword() ? 'text' : 'password'} />
                    <div style="width: 48px; height: 48px; left: 597px; top: 168px; position: absolute">
                        <img src='edit.png'></img>
                    </div>
                    <div style="width: 39px; height: 39px; left: 740px; top: 345px; position: absolute">
                        <div style="width: 39px; height: 39px; left: 0px; top: 0px; position: absolute; background: #FFD600; border-radius: 15px; border: 0.50px black solid">
                            <img src='edit.png'></img>
                        </div>
                        <div style="width: 23.40px; height: 23.40px; left: 7.80px; top: 7.80px; position: absolute">
                        </div>
                    </div>
                    <div style="width: 39px; height: 39px; left: 740px; top: 473px; position: absolute">
                        <div style="width: 39px; height: 39px; left: 0px; top: 0px; position: absolute; background: #FFD600; border-radius: 15px; border: 0.50px black solid">
                            <img src='edit.png'></img>
                        </div>
                        <div style="width: 23.40px; height: 23.40px; left: 7.80px; top: 7.80px; position: absolute">
                        </div>
                    </div>
                    <div style="width: 39px; height: 39px; left: 740px; top: 600px; position: absolute">
                        <div style="width: 39px; height: 39px; left: 0px; top: 0px; position: absolute; background: #FFD600; border-radius: 15px; border: 0.50px black solid">
                            <img src='edit.png'></img>
                        </div>
                        <div style="width: 23.40px; height: 23.40px; left: 7.80px; top: 7.80px; position: absolute">
                        </div>
                    </div>
                    <div style="width: 190px; height: 29px; left: 81px; top: 663px; position: absolute">
                        <input
                            type='checkbox'
                            checked={showPassword()}
                            onChange={togglePasswordVisibility}
                            style="width: 27px; height: 29px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 5px; border: 1px rgba(0, 0, 0, 0.60) solid"
                        />
                        <div style="left: 39px; top: 5px; position: absolute; color: black; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Show Password</div>
                    </div>
                </div>

            </div>

            <div class="fixed top-0 left-0">
                <Sidebar isOpen={isSidebarOpen()} onClose={closeSidebar} />
                <SidebarProfile isOpen={isSidebarProfileOpen()} onClose={closeSidebarProfile} />
            </div>
        </>
    );
};

export default Profile;
