import "./views/landing-page";
import "./views/profile-page";
import "./views/shopping-cart";
import "./views/individual-page";

export default [
    {
        path: "/app/profile",
        component: "profile-page"
    },
    {
        path: "/app/shopping-cart",
        component: "cart-page"
    },
    {
        path: "/app",
        component: "landing-page"
    },
    {
        path: "/app/items/:id",
        component: "individual-page"
    },
    {
        path: "/",
        redirect: "/app"
    }, 
    {
        path: "/app/shopping-cart",
        component: "cart-page"
    }
    
];