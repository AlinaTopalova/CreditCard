import styled from 'styled-components';

const SlideWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 405px;
`

const PhotoWrap = styled.div<{active: boolean}>`
  position: relative;
  width: 290px;
  height: 320px;
  margin-bottom: 19px;
  cursor: pointer;

  @media (max-width: 1024px) {
      margin: 0 auto;
  }
  
  @media (max-width: 789px) {
      margin: 0 auto;
  }

  ::before {
    content: '';
    position: absolute;
    width: 290px;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: ${({active}) => active ? '#FE8700' : 'transparent'};;
    background-repeat: no-repeat;
  }
`

const Photo = styled.img`
  object-fit: cover;
  width: 290px;
  height: 320px;
  box-sizing: border-box;
  src: 'https://i.pravatar.cc/290';
`

const Name = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  color: #384758;

  @media (max-width: 1024px) {
      margin: 0 auto;
  }

  @media (max-width: 789px) {
      margin: 0 auto;
  }
`

const CompanyName = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #606F81;

  @media (max-width: 1024px) {
      margin: 0 auto;
  }

  @media (max-width: 789px) {
      margin: 0 auto;
    }
`

export {
  CompanyName,
  PhotoWrap,
  Photo,
  Name,
  SlideWrap,
};