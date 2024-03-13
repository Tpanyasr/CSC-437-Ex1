import "./views/landing-page";
import "./views/profile-page";

export default [
    {
        path: "/app/profile",
        component: "profile-page"
    },
    {
        path: "/app/shopping-cart",
        component: "shopping-cart"
    },
    {
        path: "/app",
        component: "landing-page"
    },
    {
        path: "/app",
        component: "landing-page"
    },
    {
        path: "/",
        redirect: "/app"
    }, 
    
];