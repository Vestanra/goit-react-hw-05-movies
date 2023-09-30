import { Suspense } from "react";
import { Header, List, StyledNavLink } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import { LineWave } from 'react-loader-spinner';


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
            <Suspense fallback={<LineWave width="100%" color = '#6a857e'/>}> 
                <Outlet />
            </Suspense>
        </div>
    )
};

export default SharedLayout;