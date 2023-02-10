import styles from './AppLayout.module.scss'
import {Outlet} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/ui/Navbar/Navbar";
import Footer from "widgets/ui/Footer/Footer";

const AppLayout = () => {
    return (
        <div className={classNames(styles.AppLayout)}>
            <Navbar/>
            <aside>sidebar</aside>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default AppLayout;