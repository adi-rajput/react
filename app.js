import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar} from './src/components/Navbar';
import {Body} from './src/components/Body';
import { createBrowserRouter , RouterProvider ,Outlet } from 'react-router-dom';
import Men from './src/components/Men'
import Women from './src/components/Women';
import Error from './src/components/Error';
import ProductDetails from './src/components/ProductDetails';


const Grocery = lazy(() => import('./src/components/Grocery'));
const App = () => { 
    return(
        <div>     
            <Navbar />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement : <Error />,
        children : [
            {
                path: '/',
                element : <Body />,
                errorElement : <Error />
            },
            {
                path: '/Men',
                element : <Men />,
                errorElement : <Error />
            },
            {
                path: '/Women',
                element : <Women />,
                errorElement : <Error />
            },
            {
                path: '/products/:id',
                element : <ProductDetails />,
                errorElement : <Error />
            },
            {
                path:'/grocery',
                element : <Suspense fallback={<h3>Loading...</h3>}><Grocery/></Suspense>
            }
        ]
    },
    
]); 

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<RouterProvider router={appRouter} />);
