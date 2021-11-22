import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error"
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";
import React from "react";

const NavigateToPosts = () => {
    return (
        <Navigate replace to='/posts'/>
    );
};
const NavigateToLogin = () => {
    return (
        <Navigate replace to='/login'/>
    );
};

export const privateRoutes = [
    {path: '*', element: Error, exact: false},
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostIdPage, exact: true},
    {path: '/', element: NavigateToPosts, exact: true},
    {path: '/login', element: NavigateToPosts, exact: true}
]

export const publicRoutes = [
    {path: '*', element: Error, exact: false},
    {path: '/login', element: Login, exact: true},
    {path: '/', element: NavigateToLogin, exact: true},
    {path: '/posts', element: NavigateToLogin, exact: true},
    {path: '/posts/:id', element: NavigateToLogin, exact: true},
    {path: '/about', element: NavigateToLogin, exact: true}
]
