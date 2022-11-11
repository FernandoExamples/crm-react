import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './views/MainLayout'
import { IndexPage, IndexLoader } from './views/IndexPage'
import { NuevoCliente, FormAction } from './views/NuevoCliente'
import { ErrorPage } from './views/ErrorPage'
import { EditarCliente, loader as EditarLoader, action as EditarAction, action } from './views/EditarCliente'
import { action as DeleteAction } from './components/ClientRow'

import './assets/css/index.css'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: '/clientes/:id',
        element: <EditarCliente />,
        loader: EditarLoader,
        action: EditarAction,
      },
      {
        path: '/clientes/:id/eliminar',
        action: DeleteAction,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
