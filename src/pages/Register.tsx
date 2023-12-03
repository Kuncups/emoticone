import { createSignal } from 'solid-js';

const Register = () => {
    const [username, setUsername] = createSignal('');
    const [password, setPassword] = createSignal('');
    const [repeatPassword, setRepeatPassword] = createSignal('');
    const [email, setEmail] = createSignal('');
    const [address, setAddress] = createSignal('');
    const [showPassword, setShowPassword] = createSignal(false);

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Authentication logic can be added here
        console.log('Username:', username(), 'Password:', password(), 'Email:', email(), 'Address:', address());
    };

    return (
        <div class="min-h-screen flex flex-col items-center justify-center bg-[#F9D371]">
            {/* Logo Emoticone - Pojok Kiri */}
            <img src="image1.png" alt="Emoticone Logo" class="absolute -left-4 -bottom-4 w-40 h-40 mb-4 ml-4" />

            {/* Logo Emoticone - Pojok Kanan */}
            <img src="image3.png" alt="Emoticone Logo" class="absolute -right-4 -bottom-4 w-40 h-40 mb-4 mr-4" />
            {/* Logo Emoticone */}
            <div class="mb-4">
                <img src="logo.png" alt="Emoticone Logo" class="w-full h-48 mx-auto mb-4" />
            </div>

            {/* Formulir Register */}
            <div class="bg-[#FFEFC6] p-8 rounded shadow-md w-96 border border-black mb-4">
                <form onSubmit={handleLogin}>
                    {/* ... (unchanged part of the form) ... */}
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email()}
                            onInput={(e) => setEmail(e.target.value)}
                            class="mt-1 p-2 w-full border border-black rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Your email"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="address" class="block text-sm font-medium text-gray-600">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address()}
                            onInput={(e) => setAddress(e.target.value)}
                            class="mt-1 p-2 w-full border border-black rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Your address"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <div class="relative">
                            <input
                                type={showPassword() ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password()}
                                onInput={(e) => setPassword(e.target.value)}
                                class="mt-1 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 border border-black"
                                placeholder="Your password"
                            />
                            <div
                                class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword())}
                            >
                                {showPassword() ? 'Hide' : 'Show'}
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="repeatPassword" class="block text-sm font-medium text-gray-600">
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            id="repeatPassword"
                            name="repeatPassword"
                            value={repeatPassword()}
                            onInput={(e) => setRepeatPassword(e.target.value)}
                            class="mt-1 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 border border-black"
                            placeholder="Repeat your password"
                        />
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-[#EF2F88] text-white p-2 font-bold border border-black"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Forgot Password */}
                <div class="mt-4 text-sm text-blue-500 text-center">
                    <a href="#">Forgot Password?</a>
                </div>
                {/* Divider */}
                <div class="my-4 border-t border-gray-300"></div>

                {/* Sign Up */}
                <div class="text-sm text-center text-gray-600">
                    Don't have an account? <a class='text-[#EF2F88]' href="/register">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
