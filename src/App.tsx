import { useRoutes } from "react-router-dom";
import routes from "router/routes";
import LazyLoadRoute from "router/LazyLoadRoute";
import Layout from "ui/commons/Layout/Layout";

import './App.css';

const  App = () => {
    
    const routing = useRoutes(routes);

    return (
        <div className="App">
            <Layout>
                <LazyLoadRoute>
                    {routing}
                </LazyLoadRoute>
            </Layout>
        </div>
    )
}

export default App;
