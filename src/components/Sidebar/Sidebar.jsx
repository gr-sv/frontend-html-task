import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Title from '../Title/Title';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

//Sidebar
const StyledSidebar = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 20px;
	color: var(--color-text-light-default);
	background-color: var(--color-sidebar-background-light-default);
	border-radius: 15px;
	outline: 2px solid var(--color-sidebar-background-light-default);
	outline-offset: 2px;
`;

//Logo
const StyledLogoWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const StyledLogo = styled.img`
	width: 2.5em;
	height: auto;
`;

const StyledTitle = styled.h1`
	color: var(--color-text-logo-light-default);
`;

const StyledToggle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2em;
	height: 2em;
	padding: 10px;
	color: var(--color-text-light-default);
	background: #e2e8f0;
	border-radius: 100%;
`;


//routes


const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(false);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <StyledSidebar className={ containerClassnames }>

			{/* <Title /> */}

            <StyledLogoWrapper>
                <StyledLogo src={ logo } alt="TensorFlow logo"/>

                <StyledTitle>TensorFlow</StyledTitle>

                <StyledToggle onClick={ toggleSidebar }>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
                </StyledToggle>
            </StyledLogoWrapper>

            <div>
                {
                    routes.map(route => (
                        <div
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    bottomRoutes.map(route => (
                        <div
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                        </div>
                    ))
                }
            </div>
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
