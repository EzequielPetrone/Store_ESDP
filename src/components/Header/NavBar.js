import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.webp';
import CartWidget from './CartWidget';
import DivisaSelector from './DivisaSelector';

const navigation = [
  { name: 'Pósters', route: 'shop/graficas' },
  { name: 'Discos', route: 'shop/discos' },
  { name: 'Indumentaria', route: 'shop/indumentaria' },
  { name: 'ALL', route: 'shop-all' }
]

export default function NavBar() {

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto py-2 sm:py-4 px-2 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center custom-position-logo">
                  <Link to='/'>
                    <img
                      className="block h-12 md:h-16 w-auto rounded-full hover:animate-spin anima"
                      src={logo}
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden sm:flex items-center sm:ml-6 sm:pl-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.route}
                        className={({ isActive }) =>
                          (isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') + ' block px-3 py-2 rounded-md text-base font-medium'
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-4 sm:gap-6 pr-2 static inset-auto sm:pr-0'>
                <DivisaSelector />
                <NavLink to='cart'>
                  {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}
                  <div className="">
                    <CartWidget />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col flex-wrap content-center">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name}>
                  <NavLink
                    key={item.name}
                    to={item.route}
                    className={({ isActive }) =>
                      (isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') + ' block px-3 py-2 rounded-md text-base font-medium'
                    }
                  >
                    {item.name}
                  </NavLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
