import { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
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

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(true);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    return (
        <StyledSidebar className={ containerClassnames }>
           	<Logo />

			<Routes />
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
