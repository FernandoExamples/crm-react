import { Outlet, Link, useLocation } from 'react-router-dom'

function MainLayout() {
  const { pathname } = useLocation()

  return (
    <div className='md:min-h-screen md:flex'>
      <div className='md:w-1/4 bg-blue-700 px-5 py-10 text-white'>
        <h2 className='text-4xl font-black text-center'>CRM -Clientes</h2>

        <nav className='mt-10'>
          <Link
            to='/clients'
            className={`text-2xl block mt-2 hover:text-blue-300 ${
              pathname == '/clients' ? 'text-blue-300' : ''
            }`}
          >
            Clientes
          </Link>
          <Link
            to='/clients/new'
            className={`text-2xl block mt-2 hover:text-blue-300 ${
              pathname == '/clients/new' ? 'text-blue-300' : ''
            }`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
