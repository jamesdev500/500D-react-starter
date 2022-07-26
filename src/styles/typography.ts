import { css } from 'styled-components';
import tw from 'twin.macro';

const Typography = css`
  main {
    h1,
    h2,
    h3,
    h4,
    h5 {
      ${tw`font-heading font-semibold`};
    }
    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 50px;
    }
    h3 {
      font-size: 35px;
    }
    h4 {
      font-size: 30px;
    }
    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;

export default Typography;
