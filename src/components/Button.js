import styled from 'styled-components';


export const Button = styled.div`
    background: white;
    position: relative;
    margin: 0 0 0 8px;
    transition: all linear 100ms;

    & button{
        width:100%;
        height:100%;
        border: solid 2px black;
        background-color: white;
        font-family: Montserrat, sans-serif;
        cursor: pointer;
    }

    ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: -6px;
        top: -6px;
        background: #EEBB39;
        z-index: -5;
        transition: all linear 100ms;
    };

    &:hover {
        transform: translateY(-5px);
        ::after {
            top: 5px;
        };
      }

      @media (max-width: 901px) {
        height: 3em;
        width: 9em;
        a{
            font-size: 1rem
          }
      }

      @media (min-width: 901px) {
        height: 4em;
        width: 12em;
          a{
            font-size: 1.2rem
          }
      }

      a{
          text-decoration: none;
          color: black
      }

`;
