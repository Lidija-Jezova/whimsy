import React, {Suspense, useContext} from 'react';
import './styles/index.scss'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPageAsync/>,
        },
        {
            path: "/about",
            element: <AboutPageAsync/>,
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