import styled from 'styled-components';

const NavBarStyled = styled.div` 

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    width: 100%;
    background: transparent;
    .navList {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
    .navList a {
        transition: 0.1s ease-in-out;
        text-decoration: none;
        color: black;
        padding: 0 50px;
        font-size: 1rem;
    }
    .navList a:hover {
    border-bottom: 4px solid #28A745;
    padding: 13px 50px;
    }
    .logo {
        align-items: center;
        display: flex;
    
        flex: 1;
    }
    .i {
      font-size: 30px;
      color: #28A745;
    }
`;

export default NavBarStyled;