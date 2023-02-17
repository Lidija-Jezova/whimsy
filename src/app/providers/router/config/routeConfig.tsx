import React from 'react'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import type { RouteProps } from 'react-router-dom'

export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
} as const

type ValueOf<T> = T[keyof T]
type AppRoute = ValueOf<typeof AppRoutes>

export const RoutePath: Record<AppRoute, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
]
