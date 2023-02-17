import styles from './AppLayout.module.scss'
import { Outlet } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar/Navbar'
import Footer from 'widgets/Footer/Footer'
import { Sidebar } from 'widgets/Sidebar'
import { useState } from 'react'

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleSidebarCollapse = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(styles.AppLayout, { [styles.collapsed]: collapsed }, [])}>
            <Navbar />
            <Sidebar toggleCollapse={toggleSidebarCollapse} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
