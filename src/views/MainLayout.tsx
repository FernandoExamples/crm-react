import { Outlet, Link, useLocation } from 'react-router-dom'

export const MainLayout = () => {
  const { pathname } = useLocation()

  const getNavClasses = (path: string) => {
    let classes = 'block text-2xl text-white hover:text-blue-300'
    if (path == pathname) classes += ' text-blue-300'
    return classes
  }

  return (
    <div className="md:flex md:h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM - React</h2>

        <nav className='mt-10 px-4'>
          <Link to="/" className={getNavClasses('/')}>
            Clientes
          </Link>
          <Link to="/clientes/nuevo" className={getNavClasses('/clientes/nuevo')}>
            Nuevo Cliente
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
