import { createSignal, onCleanup } from 'solid-js';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const [counter, setCounter] = createSignal(0);

  const navigate = (path: string) => {
    window.history.pushState(null, '', path);
  };

  const renderPage = () => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/register':
        return <Register />;
      case '/dashboard':
        return <Dashboard />;
      default:
        return <Login />;
    }
  };

  onCleanup(() => {
    // Cleanup logic if needed
  });

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
