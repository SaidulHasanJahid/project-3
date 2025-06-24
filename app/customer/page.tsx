'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const CartPage = () => {
  const [quantity, setQuantity] = useState(2);

  const price = 100;
  const subtotal = quantity * price;

  return (
    <div className="w-full bg-white">
      {/* ✅ Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Cart</h1>
        <p className="text-sm mt-1   "><Link href={'/'}><span className='text-[16px]'>Home</span></Link> / Cart</p>
      </div>

      {/* ✅ Cart Body */}
      <div className="py-10 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Cart Table */}
          <div className="lg:col-span-2 w-full overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                  <th className="p-4 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-4 flex items-center gap-4 max-w-[250px]">
                    <div className="min-w-[64px] min-h-[64px]">
                      <img
                        src="https://via.placeholder.com/80"
                        alt="Product"
                        width={64}
                        height={64}
                        className="object-cover border rounded"
                      />
                    </div>
                    <span className="truncate font-medium text-gray-800 text-sm">
                      Top Rated product title will be her...
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-700">${price}</td>
                  <td className="p-4">
                    <div className="flex items-center border rounded w-[100px]">
                      <button
                        onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                        className="w-8 h-8 text-lg font-semibold flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 text-lg font-semibold flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-semibold text-gray-800">${subtotal}</td>
                  <td className="p-4 text-center">
                    <button className="text-red-500 hover:text-red-700">
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right - Cart Totals */}
          <div className="border border-gray-200 rounded p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">CART TOTALS</h2>
            <div className="flex justify-between py-2 border-b text-sm text-gray-700">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between py-2 border-b text-sm text-gray-700">
              <span>Discount</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-base text-gray-900">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded hover:bg-black transition-all duration-300">
             <Link href={'/customer/customardeatile'}> Proceed to checkout </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
