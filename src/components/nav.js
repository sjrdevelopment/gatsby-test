import React from "react"
import { Link } from 'gatsby'

import Styles from './nav.module.css'

const Nav = () => {
    return (
        <nav>
            <Link to="/" className={Styles.navItem}>Go back to the homepage</Link>
            <Link to="/page-2/" className={Styles.navItem}>Go to page 2</Link>
            <Link to="/page-3/" className={Styles.navItem}>Go to page 3</Link>
        </nav>
    )
}

export default Nav