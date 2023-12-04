import { createSignal } from 'solid-js';

const Register = () => {
    const [username, setUsername] = createSignal('');
    const [password, setPassword] = createSignal('');
    const [repeatPassword, setRepeatPassword] = createSignal('');
    const [email, setEmail] = createSignal('');
    const [address, setAddress] = createSignal('');
    const [showPassword, setShowPassword] = createSignal(false);
    const [showRepeatPassword, setShowRepeatPassword] = createSignal(false);
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
            <div class="bg-[#FFEFC6] p-8 rounded shadow-md w-[100vh] border border-black mb-4">
                <p class='font-bold mb-4'>Account Information</p>
                <form onSubmit={handleLogin}>
                    <div class="mb-4 flex items-center">
                        <label for="address" class="block text-sm font-medium text-gray-600 flex-shrink-0 w-1/4">
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
                    <div class="mb-4 flex items-center">
                        <label for="email" class="block text-sm font-medium text-gray-600 flex-shrink-0 w-1/4">
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
                    <div class="mb-4 flex items-center">
                        <label for="username" class="block text-sm font-medium text-gray-600 flex-shrink-0 w-1/4">
                            Username
                        </label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            value={username()}
                            onInput={(e) => setUsername(e.target.value)}
                            class="mt-1 p-2 w-full border border-black rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Your username"
                        />
                    </div>
                    <div class="mb-4 flex items-center">
                        <label for="password" class="block text-sm font-medium text-gray-600 flex-shrink-0 w-1/4">
                            Password
                        </label>
                        <div class="relative w-3/4">
                            <input
                                type={showPassword() ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password()}
                                onInput={(e) => setPassword(e.target.value)}
                                class="mt-1 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 border border-black"
                                placeholder="Your password"
                            />
                            <div class="mt-2 flex items-center">
                                <input
                                    type="checkbox"
                                    id="showPasswordCheckbox"
                                    name="showPasswordCheckbox"
                                    checked={showPassword()}
                                    onChange={() => setShowPassword(!showPassword())}
                                />
                                <label for="showPasswordCheckbox" class="text-sm font-medium text-gray-600 ml-2">
                                    Show Password
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4 flex items-center">
                        <label for="repeatPassword" class="block text-sm font-medium text-gray-600 flex-shrink-0 w-1/4">
                            Re-Password
                        </label>
                        <div class="relative w-3/4">
                            <input
                                type={showRepeatPassword() ? 'text' : 'password'}
                                id="repeatPassword"
                                name="repeatPassword"
                                value={repeatPassword()}
                                onInput={(e) => setRepeatPassword(e.target.value)}
                                class="mt-1 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 border border-black"
                                placeholder="Your repeat password"
                            />
                            <div class="mt-2 flex items-center">
                                <input
                                    type="checkbox"
                                    id="showRepeatPasswordCheckbox"
                                    name="showRepeatPasswordCheckbox"
                                    checked={showRepeatPassword()}
                                    onChange={() => setShowRepeatPassword(!showRepeatPassword())}
                                />
                                <label for="showRepeatPasswordCheckbox" class="text-sm font-medium text-gray-600 ml-2">
                                    Show Password
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class=" flex  items-center justify-center ">
                        <button
                            type="submit"
                            class="w-96 bg-[#EF2F88] text-white p-2 font-bold rounded-md"
                        >
                            Create My Account
                        </button>
                    </div>
                </form>

                {/* Sign Up */}
                <div class="text-sm text-center mt-4 text-gray-600">
                    Have an account? <a class='text-[#EF2F88]' href="/login">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
