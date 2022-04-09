import React from "react";
import styled from "styled-components"

const FooterWrapper = styled.div`
    color: ${p => p.theme.complementColor};
    position: fixed;
    z-index: -1;
    bottom: 10px;
`

const Footer = () => <FooterWrapper>
    Eddie, Srilakshmi, Ravi
</FooterWrapper>

export default Footer