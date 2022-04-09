import React from "react";
import styled from "styled-components"

const TitleWrapper = styled.div`
    font-family: ${p => p.theme.headingFont};
    color: ${p => p.theme.accentColor};
    font-size: 3em;
    font-weight: 800;
`

const Title = ({ title }: { title: string }) => <TitleWrapper>
    {title}
</TitleWrapper>

export default Title