import styled from "styled-components";

export const StyledHeader = styled.header`
background: ${({ theme: { backgroundColors } }) => backgroundColors.header};
padding: 40px 0;
h1{
    color: ${({ theme: { textColor } }) => textColor.header};
}
&:hover{
    background:black;
}
`