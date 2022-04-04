import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const HeaderTitle = styled.h1`
  margin: 0 0 30px;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  color: #384758;
  line-height: 48px;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`
const HeaderDescr = styled.h2`
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #606F81;
`

export {
  HeaderWrapper,
  HeaderTitle,
  HeaderDescr,
};
 