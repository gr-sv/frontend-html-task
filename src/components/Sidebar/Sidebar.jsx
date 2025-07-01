import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import {
	StyledSidebar,
	StyledLogoWrapper,
	StyledLogo,
	StyledTitle,
	StyledToggle,
	AllRoutesWrapper,
	StyledRoutesWrapper,
	StyledRoute,
	StyledIcon,
	StyledItem,
	StyledButtonThemeWrapper
} from './Sidebar.styles'

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

const Sidebar = ({ color = 'light', onToggleTheme }) => {
    const [isOpened, setIsOpened] = useState(true);

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

	const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    return (
        <StyledSidebar color={color} isOpened={isOpened}>
            <StyledLogoWrapper isOpened={isOpened}>
                <StyledLogo src={ logo } alt="TensorFlow logo"/>

                <StyledTitle color={color} isOpened={isOpened}>TensorFlow</StyledTitle>

                <StyledToggle color={color} onClick={ toggleSidebar } isOpened={isOpened}>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
                </StyledToggle>
            </StyledLogoWrapper>

			<AllRoutesWrapper>
				<StyledRoutesWrapper>
					{
						routes.map(route => (
							<StyledRoute
								key={ route.title }
								color={color}
								onClick={() => {
									goToRoute(route.path);
								}}
								isOpened={isOpened}
							>
								<StyledIcon icon={ route.icon }/>
								<StyledItem isOpened={isOpened}>{ route.title }</StyledItem>
							</StyledRoute>
						))
					}
				</StyledRoutesWrapper>

				<StyledRoutesWrapper>
					{
						bottomRoutes.map(route => (
							<StyledRoute
								key={ route.title }
								color={color}
								onClick={() => {
									goToRoute(route.path);
								}}
								isOpened={isOpened}
							>
								<StyledIcon icon={ route.icon }/>
								<StyledItem isOpened={isOpened}>{ route.title }</StyledItem>
							</StyledRoute>
						))
					}
				</StyledRoutesWrapper>
			</AllRoutesWrapper>

			<StyledButtonThemeWrapper color={color}>
					<StyledRoute
						isOpened={isOpened}
						onClick={onToggleTheme}
						color={color}
					>
						<StyledIcon icon={ (color === 'light') ? 'fa-solid fa-moon' : 'fa-solid fa-sun' } />
						<StyledItem isOpened={isOpened}>
							{ (color === 'light') ? 'Dark theme' : 'Light theme' }
						</StyledItem>
					</StyledRoute>
			</StyledButtonThemeWrapper>
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
