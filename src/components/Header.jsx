import React from 'react';
import { useCart } from "../utils/useCart";

const Header = () => {
  // Pull cartItems from your context to show the real-time count
  const { cartItems } = useCart();
  
  // Calculate total quantity of items (sum of all qty)
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className='p-4 bg-amber-400 flex items-center justify-between shadow-md'>
      {/* Logo Section */}
      <div className='flex items-center'>
        <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold'>
          L
        </div>
        <span className='ml-2 font-bold text-xl hidden sm:inline'>MyStore</span>
      </div>
       
      {/* Navigation Links */}
      <nav>
        <ul className='flex items-center space-x-8 font-medium'>
          <li className='hover:text-white cursor-pointer transition-colors'>
            Home
          </li>
          <li className='hover:text-white cursor-pointer transition-colors'>
            About
          </li>
          <li className='relative flex items-center hover:text-white cursor-pointer transition-colors'>
            <span>Cart</span>
            {/* Cart Badge */}
            {totalItems > 0 && (
              <span className='ml-1 absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce'>
                {totalItems}
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;