import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Routes from '../Routes/Routes';

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

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(true);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const toggleSidebar = () => {
        setIsOpened(v => !v);
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

			<Routes />
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
