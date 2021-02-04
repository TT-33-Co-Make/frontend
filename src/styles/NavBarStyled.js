import styled from 'styled-components';

const NavBarStyled = styled.div` 
    /* z-index: 10; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: fixed; */
    width: 100%;
    background: #333333;
    .navList {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
    .navList a {
        transition: 0.1s ease-in-out;
        text-decoration: none;
        color: white;
        padding: 0 50px;
        font-size: 1rem;
    }
    .navList a:hover {
    border-bottom: 4px solid #28A745;
    padding: 13px 50px;
    }
    .logo {
        padding-left: 30px;
        align-items: center;
        display: flex;
        color: white;
        flex: 1;
        cursor: default;
    }
    .i {
      font-size: 30px;
      color: #28A745;
    }
    .top {
        background: #333333;
        opacity: 0.3;
    }
`;

export default NavBarStyled;