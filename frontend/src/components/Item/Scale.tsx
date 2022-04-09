import styled from "styled-components"

const Wrapper = styled.div(({ score }: { score: number }) => `
    border-radius: 10px;
    padding: 7.5px;
    background-color: ${getColorRGB(score, 255, 200, 200, 200, 240, 180)};
    color: ${getColorRGB(score, 255, 0, 0, 118, 186, 27)};
    font-family: inherit
    font-weight: 400;
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 800;
    align-items: center;
    justify-content: center;
    gap: 2px;
`)

const getColorRGB = (value: number, r0: number, g0: number, b0: number, r1: number, g1: number, b1: number) => {
    const pct = value / 100
    const r = (r1 - r0) * pct + r0
    const g = (g1 - g0) * pct + g0
    const b = (b1 - b0) * pct + b0

    return `rgb(${r}, ${g}, ${b})`
}

const Scale = ({ score }: { score: number }) => {

    const mapping = 'FDCBA'

    return (
        <Wrapper score={score}>
            {mapping[Math.min(Math.max(Math.round((score - 55) / 10), 0), 4)]} ({score})
        </Wrapper>
    )
}

export default Scale