import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {Navigate, NavLink, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";

export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <nav style={{display: 'flex', flexDirection: 'column'}}>
                        <NavLink to="/page1" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>ADIDAS</NavLink>
                        <NavLink to="/page2" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>PUMA</NavLink>
                        <NavLink to="/page3" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>ABIBAS</NavLink>                    </nav>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/page1"/>}/>
                        <Route path="/page1" element={<PageOne/>}/>
                        <Route path="/page2" element={<PageTwo/>}/>
                        <Route path="/page3" element={<PageThree/>}/>
                        <Route path="/error404" element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to="/error404"/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
