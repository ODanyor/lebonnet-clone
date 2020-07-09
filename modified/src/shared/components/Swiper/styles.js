import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Swiper = styled.div`
  padding: 10px 0;
  border: 1px solid ${color.gray};
  overflow: hidden;
  text-transform: uppercase;
  color: ${color.red};
  ${font.size(15)};
`

export const SwiperItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform var(--transition);
`

export const SwiperItem = styled.li`
  position: relative;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
