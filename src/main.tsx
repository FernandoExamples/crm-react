import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './views/MainLayout'
import { IndexPage, IndexLoader } from './views/Index/IndexPage'
import { NuevoCliente, FormAction } from './views/NuevoCliente/NuevoCliente'
import './assets/css/index.css'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
        loader: IndexLoader,
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: FormAction,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
