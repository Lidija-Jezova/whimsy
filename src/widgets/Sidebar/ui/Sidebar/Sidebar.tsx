import styles from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode, useState} from "react";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {Button} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string
    toggleCollapse: () => void
}

export const Sidebar = (props: SidebarProps) => {

    const {className, toggleCollapse} = props

    return (
        <aside className={classNames(styles.Sidebar, {}, [className])}>
            <div className={styles.content}>
                <Button onClick={toggleCollapse}>Toggle</Button>
                <nav>
                    <ul>
                        <li>My profile</li>
                        <li>About</li>
                        <li>Articles</li>
                    </ul>
                </nav>
            </div>
            <ThemeSwitcher className={styles.themeSwitcher}/>
        </aside>
    );
};