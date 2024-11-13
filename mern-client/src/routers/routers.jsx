import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App"; // Import App component
import Home from "../home/home"; // Import Home component
import Shop from "../shop/shop"; // Import Shop component
import About from "../components/about"; // Import About component
import Blog from "../components/blog"; // Import Blog component
import SingleBook from "../shop/SingleBook"; // Import SingleBook component
import DashBoardLayout from "../components/dashboard/DashBoardLayout";
import DashBoard from "../components/dashboard/DashBoard";
import UploadBook from "../components/dashboard/UploadBook";
import Managebooks from "../components/dashboard/Managebooks";
import Editbooks from "../components/dashboard/Editbooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // Use App component here
        children: [
            {
                path: '', // Default route for Home component (no need for `/`)
                element: <Home />
            },
            {
                path: 'shop', // Route for Shop component
                element: <Shop />
            },
            {
                path: 'about', // Route for About component
                element: <About />
            },
            {
                path: 'blog', // Route for Blog component
                element: <Blog />
            },
            {
                path: 'book/:id', // Corrected: Removed leading slash for SingleBook component
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:8280/book/${params.id}`)
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <DashBoardLayout />,
        children: [
            {
                path: '', // Default route for the dashboard
                element: <DashBoard />
            },
            {
                path: 'upload', // Corrected: Removed leading slash for nested path
                element: <UploadBook />
            },
            {
                path: 'manage', // Corrected: Removed leading slash for nested path
                element: <Managebooks />
            },
            {
                path: 'editbooks/:id', // Corrected: Removed leading slash for nested path
                element: <Editbooks />,
                loader: ({ params }) => fetch(`http://localhost:8280/book/${params.id}`)
            }
        ]
    }
]);

export default router;
