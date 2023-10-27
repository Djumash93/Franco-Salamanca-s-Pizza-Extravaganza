import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="font-pizza  flex items-center justify-between border-b border-stone-200 bg-amber-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Franco Salamanca's Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;