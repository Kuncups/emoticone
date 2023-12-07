import { onCleanup } from 'solid-js';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import Promo from './pages/Promo';
import ShoppingCart from './pages/ShoppingCart';
import Payment from './pages/Payment';
import BuktiTransaksi from './pages/BuktiTransaksi';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import MoodScoop from './pages/MoodScoop';
import Recommendation from './pages/Recommendation';
import LandingPage from './pages/LandingPage';
import MenuKedua from './pages/MenuKedua';

function App() {

  const renderPage = () => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/register':
        return <Register />;
      case '/login':
        return <Login />;
      case '/dashboard':
        return <Dashboard />;
      case '/menu':
        return <Menu />;
      case '/menukedua':
        return <MenuKedua />;
      case '/promo':
        return <Promo />;
      case '/shoppingcart':
        return <ShoppingCart />;
      case '/payment':
        return <Payment />;
      case '/buktitransaksi':
        return <BuktiTransaksi />;
      case '/orders':
        return <Orders />;
      case '/profile':
        return <Profile />;
      case '/moodscoop':
        return <MoodScoop />;
      case '/recommendation':
        return <Recommendation />;
      default:
        return <LandingPage />;
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
