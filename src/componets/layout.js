import React from 'react'

import Footer from "../componets/footer"
import Header from "../componets/header"
import  "../styles/index.scss"

import Styles from './layout.module.scss'

const Layout = (props) => (
    <div className={Styles.container}>
        <div className={Styles.content}>
            <Header />
            { props.children }
            
        </div>
        <Footer />
    </div>
)

export default Layout