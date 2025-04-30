// components/Header.tsx
"use client"

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10 m-0">
      <div className="bg-sky-700 text-white justify-between py-1">
        <div className="flex justify-between space-x-4">
          <div className="flex items-center space-x-2 pl-4">
            <img src="/svg/cell.svg" alt="Cell Icon" className="w-6 h-6" />


            <h1 className="text-base font-sans text-center">(505) 448-8346</h1>
            <h1 className="text-base font-sans text-center">| Fax:</h1>
            <h1 className="text-base font-sans text-center">(505) 531-8914</h1>
          </div>

          <div className="flex items-center space-x-2 pl-4">
          <img src="/svg/location.svg" alt="Cell Icon" className="w-6 h-6" />
            <h1 className="text-lg font-sans text-center">Our</h1>
            <h1 className="text-lg font-extrabold text-center">Osuna Road NE, Albuquerque</h1>
            <h1 className="text-lg font-sans text-center">Office</h1>
          </div>

          <div className="flex items-center space-x-2 pr-4">
            <h1 className="text-lg font-extrabold text-center">Hola Amigos!</h1>
            {/* <h1 className="text-lg font-bold text-center">(505) 531-8914</h1> */}
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-0 flex justify-between items-center max-w-screen-2xl">
        <Link href="/">
          <img src="/image.png" alt="Advanced Vascular" className="h-32 w-auto" />
        </Link>

        <div className="flex">
          <nav className="flex space-x-8 items-center">
            {[
              { label: 'Home', href: '/' },
              { label: 'Venous Conditions' },
              { label: 'Reasons to be Checked' },
              { label: 'Services And Treatments' },
              { label: 'Contact Us', href: '/contact-us' },
              { label: 'Referral Form', href: '../referra_form' },
            ].map((menu, idx) => (
              <div className="relative group" key={idx}>
              
              <Link href={menu.href || '#'}>
                <button className="text-sky-900 hover:text-sky-600 transition duration-300 text-base cursor-pointer">
                  {menu.label}
                </button>
              </Link>

              {menu.label === 'Venous Conditions' && (
                <div className="absolute hidden group-hover:block bg-white shadow-lg w-48 z-30">
                <ul className="text-gray-700 text-sm">
                  <li>
                  <Link href="/venous_condition/cvi" className="block px-4 py-2 hover:bg-blue-100">Chronic Venous Insufficiency</Link>
                  </li>
                  <li>
                  <Link href="/venous_condition/varicose" className="block px-4 py-2 hover:bg-blue-100">Varicose Veins</Link>
                  </li>
                  <li>
                  <Link href="/venous_condition/spider" className="block px-4 py-2 hover:bg-blue-100">Spider Veins</Link>
                  </li>
                  <li>
                  <Link href="/venous_condition/venous_ulcers" className="block px-4 py-2 hover:bg-blue-100">Venous Ulcers</Link>
                  </li>
                </ul>
                </div>
              )}

              {menu.label === 'Services And Treatments' && (
                <div className="absolute hidden group-hover:block bg-white shadow-lg w-48 z-30">
                <ul className="text-gray-700 text-sm">
                  <li>
                  <Link href="/treatments/rfa" className="block px-4 py-2 hover:bg-blue-100">Radio Frequency Ablation</Link>
                  </li>
                  <li>
                  <Link href="/treatments/venaseal" className="block px-4 py-2 hover:bg-blue-100">Venaseal</Link>
                  </li>
                  <li>
                  <Link href="/treatments/varithena" className="block px-4 py-2 hover:bg-blue-100">Varithena</Link>
                  </li>
                  <li>
                  <Link href="/treatments/asclera" className="block px-4 py-2 hover:bg-blue-100">Asclera</Link>
                  </li>
                  <li>
                  <Link href="/treatments/la" className="block px-4 py-2 hover:bg-blue-100">Laser Ablation</Link>
                  </li>
                </ul>
                </div>
              )}
              {/* Add more dropdowns for other labels as needed */}
              </div>
            ))}
          </nav>

          <Link
            href="/contact-us"
            className="bg-sky-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-800 transition duration-300 ml-4"
          >
            Appointments
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
