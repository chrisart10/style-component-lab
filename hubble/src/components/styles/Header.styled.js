import styled from "styled-components";

export const StyledHeader = styled.header`
background: ${({ theme: { backgroundColor } }) => backgroundColor.header};
padding: 40px 0;
h1{
    color: ${({ theme: { textColor } }) => textColor.header};
}

`
export const Logo = styled.img`
@media (max-width: ${({theme:{mobile}})=> mobile}) {
    margin-bottom:40px;
}
`
export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;
@media (max-width: ${({theme:{mobile}})=> mobile}) {
    flex-direction:column;
}
`

export const Image = styled.img`
width:375px;
margin-left:40px;

@media (max-width: ${({theme:{mobile}})=> mobile}) {
    margin: 40px 0 30px;
}
`