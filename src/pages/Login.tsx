import { createSignal } from 'solid-js';

const Login = () => {
    const [username, setUsername] = createSignal('');
    const [password, setPassword] = createSignal('');

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Logika autentikasi dapat ditambahkan di sini
        console.log('Username:', username(), 'Password:', password());
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

            {/* Paragraf di atas formulir */}
            <div class="mb-10">
                <p class="text-center">Sign in to EMOTICONE or create an account</p>
            </div>

            {/* Formulir Login */}
            <div class="bg-[#FFEFC6] p-8 rounded shadow-md w-96 border border-black mb-4">
                <form onSubmit={handleLogin}>
                    <div class="mb-4">
                        <label for="username" class="block text-sm font-medium text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username()}
                            onInput={(e) => setUsername(e.target.value)}
                            class="mt-1 p-2 w-full border border-black rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Your username"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password()}
                            onInput={(e) => setPassword(e.target.value)}
                            class="mt-1 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 border border-black"
                            placeholder="Your password"
                        />
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-[#EF2F88] text-white p-2 font-bold border border-black"
                    >
                        Sign In
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
                    Don't have an account? <a class='text-[#EF2F88]' href="#">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
