import React, { Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeConfig } from 'app/providers/router/config/routeConfig'
import AppLayout from 'shared/ui/AppLayout/AppLayout'

const AppRouter = () => {
    const routerChildren: RouteObject[] = Object.values(routeConfig).map(({ element, path }) => {
        return { element: element, path }
    })

    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            children: routerChildren,
        },
    ])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default AppRouter
