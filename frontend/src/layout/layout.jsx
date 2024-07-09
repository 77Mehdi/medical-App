import React from 'react'
import Header from '../components/Header/Header'
import Routers from '../routes/Route'
import Footer from '../components/Footer/Footer'

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />
        </>
    )
}

export default Layout