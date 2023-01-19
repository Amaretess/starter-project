import Home from "../pages/Home"
import Docs from "../pages/Docs"
import About from "../pages/About"
import Support from "../pages/Support"

export const routesConfig = [
    {
        id: 1,
        path: '/',
        element: <Home />
    },
    {
        id: 2,
        path: '/docs',
        element: <Docs />
    },
    {
        id: 3,
        path: '/about',
        element: <About />
    },
    {
        id: 4,
        path: '/support',
        element: <Support />
    },

]