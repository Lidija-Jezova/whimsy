import React, {Suspense} from 'react';
import './styles/index.scss'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>,
        },
        {
            path: "/about",
            element: <AboutPage/>,
        },
    ]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>switch theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router}/>
            </Suspense>
        </div>
    );
};

export default App;