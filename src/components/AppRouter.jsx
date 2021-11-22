import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router"
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="/" element={<Navigate replace to="/posts" />} />
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
            </Routes>
    );
}

export default AppRouter;