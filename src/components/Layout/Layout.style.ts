import styled from 'styled-components/macro';
import tw from 'twin.macro';

/**
 * Main Content Wrapper
 * Will change layout depending if user is logged in or not
 */
export const Layout = styled.main`
  height: auto;
  width: 100%;
  > section {
    ${tw`py-[60px]`}
  }
`;
