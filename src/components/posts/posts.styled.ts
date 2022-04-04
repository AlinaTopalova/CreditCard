import styled from 'styled-components';

const SectionWrap = styled.div`
  position: relative;
  max-width: 938px;
  margin-left: auto;
  min-height: 400px;
  
  @media (max-width: 1439px) {
    padding: 100px;
    max-width: 700px;
  }

  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 311px;
    height: 330px;
    top: 0;
    left: -150px;
    background-image: url('../img/decor-title.png');
    background-repeat: no-repeat;

    @media (max-width: 1439px) {
      top: 0;
      left: 40%;
    }
  }
`

const SectionTitle = styled.h1`
  font-family: 'OpenSans', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  color: #384758;
  margin: 0 0 40px;

  @media (max-width: 1439px) {
    font-size: 32px;
    line-height: 32px;
  }
`

export {
  SectionWrap,
  SectionTitle
}