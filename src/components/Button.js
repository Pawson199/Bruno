import styled from 'styled-components';


export const Button = styled.button`
    height: 4em;
    width: 12em;
    background: white;
    border: black solid 2px;
    position: relative;
    margin: 0 0 0 8px;
    font-family: Montserrat, sans-serif;
    ::after {
        content: "";
        width: 12em;
        height: 4em;
        position: absolute;
        left: -8px;
        top: -8px;
        background: #EEBB39;
        z-index: -5
    };

    &:hover {
        left: -8px;
        top: -8px;
        ::after {
            left: 0px;
            top: 0px;
        };
      }

      @media (max-width: 901px) {
        a{
            font-size: 1rem
          }
      }
      @media (min-width: 901px) {
          a{
            font-size: 1.2rem
          }
      }

      a{
          text-decoration: none;
          color: black
      }

`;
