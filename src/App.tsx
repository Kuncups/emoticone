import { onCleanup } from 'solid-js';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';

function App() {

  const renderPage = () => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/register':
        return <Register />;
      case '/dashboard':
        return <Dashboard />;
      case '/menu':
        return <Menu />;
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
