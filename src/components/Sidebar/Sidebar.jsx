import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
	width: max-content;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 1.5em;
	color: var(--color-text-light-default);
	background-color: var(--color-sidebar-background-light-default);
	border-radius: 1em;
	outline: 0.13em solid var(--color-sidebar-background-light-default);
	outline-offset: 0.13em;
	position: relative;
`;

//Logo
const StyledLogoWrapper = styled.div`
	width: 100%;
	padding-right: 4em;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 0.4em;
`;

const StyledLogo = styled.img`
	width: 2em;
	height: auto;
`;

const StyledTitle = styled.h1`
	font-size: 1.5em;
	color: var(--color-text-logo-light-default);
`;

const StyledToggle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2em;
	height: 2em;
	padding: 0.63em;
	color: var(--color-text-light-default);
	background: #e2e8f0;
	border-radius: 100%;
	position: absolute;
	right: -7%;
	z-index: 10;

	&:hover {
		color: var(--color-text-light-hover);
	}

	&:active {
		color: var(--color-text-light-active);
	}
`;

//Routes
const AllRoutesWrapper = styled.div`
	width: 100%;
	padding-top: 1.5em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	flex-grow: 1;
`;

const StyledRoutesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	gap: 0.3em;
`;

const StyledRoute = styled.div`
	padding: 0.7em;
	color: var(--color-text-light-default);
	background-color: var(--color-sidebar-background-light-default);
	border-radius: 1em;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 0.6em;
	transition: 0.3s;

	&:hover {
		color: var(--color-text-light-hover);
		background-color: var(--color-sidebar-background-light-hover);
	}

	&:active {
		color: var(--color-text-light-active);
		background-color: var(--color-button-background-light-active);
	}
`;

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(true);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

	const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    return (
        <StyledSidebar className={ containerClassnames }>
            <StyledLogoWrapper>
                <StyledLogo src={ logo } alt="TensorFlow logo"/>

                <StyledTitle>TensorFlow</StyledTitle>

                <StyledToggle onClick={ toggleSidebar }>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
                </StyledToggle>
            </StyledLogoWrapper>

			<AllRoutesWrapper>
			<StyledRoutesWrapper>
				{
					routes.map(route => (
						<StyledRoute
							key={ route.title }
							onClick={() => {
								goToRoute(route.path);
							}}
						>
							<FontAwesomeIcon icon={ route.icon }/>
							<span>{ route.title }</span>
						</StyledRoute>
					))
				}
			</StyledRoutesWrapper>

			<StyledRoutesWrapper>
				{
					bottomRoutes.map(route => (
						<StyledRoute
							key={ route.title }
							onClick={() => {
								goToRoute(route.path);
							}}
						>
							<FontAwesomeIcon icon={ route.icon }/>
							<span>{ route.title }</span>
						</StyledRoute>
					))
				}
			</StyledRoutesWrapper>
		</AllRoutesWrapper>

			
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
