import { styled } from "styled-components";

export const Wrapper = styled.main`
  background: ${({ theme }) => theme.color.codGrey};
  color: ${({ theme }) => theme.color.silver};
  max-width: 800px;
  margin: 0 auto;
`;
