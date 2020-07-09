import styled from "styled-components"

export const Slider = styled.div`
  width: 100%;
  display: flex;
  max-height: 100vh;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`

export const SlidesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform var(--transition);
`

export const Slide = styled.div`
  position: relative;
  min-width: 100%;
`
export const SlideTitle = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 30%;
`
