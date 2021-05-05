import React, {Suspense, lazy} from 'react'

const Home = lazy(()=>import('./lazy-loading/Home'))
const About = lazy(()=>import('./lazy-loading/About'))

function AppLazy() {
    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
            <Home />
            <About />
            </Suspense>
        </div>
    )
}

export default AppLazy
