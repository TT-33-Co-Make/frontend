import styled from 'styled-components';

const FooterStyled = styled.div`
 .footer {
    background: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
    color: white;
}

.footer a {
    color: #fff;
    font-size: 30px;
}

.footer a:hover {
    color:#28a745;
}

.footer .social > * {
    margin-right: 30px;
}
`;  

export default FooterStyled;