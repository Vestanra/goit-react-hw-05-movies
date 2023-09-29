import { Suspense } from "react";
import { Header, List, StyledNavLink } from "./SharedLayout.styled";
const { Outlet } = require("react-router-dom");


const SharedLayout = () => {
    return (
        <div>
            <Header>
                <List>
                    <li>
                        <StyledNavLink to="/">Home</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/movies" end>Movies</StyledNavLink>
                    </li>
                </List>
            </Header>
            <Suspense fallback={<div>Loading...</div>}> 
                <Outlet />
            </Suspense>
        </div>
    )
};

export default SharedLayout;