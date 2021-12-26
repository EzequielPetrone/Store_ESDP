<Disclosure.Button key={item.name}>
  <NavLink
    key={item.name}
    to={item.route}
    className={({ isActive }) =>
      (isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') + ' block px-3 py-2 rounded-md text-base font-medium'
    }
  // aria-current={item.current ? 'page' : undefined}
  >
    {item.name}
  </NavLink>
</Disclosure.Button>