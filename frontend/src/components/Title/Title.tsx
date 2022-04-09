import React from "react";
import styled from "styled-components"

const TitleWrapper = styled.div`
    font-family: ${p => p.theme.headingFont};
`

const Title = ({ title }: { title: string }) => <TitleWrapper>
    {title}
</TitleWrapper>

export default Title