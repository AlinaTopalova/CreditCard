import styled from 'styled-components';

const PostWrap = styled.li`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
`

const PostTitle = styled.h3`
  margin: 0;
  font-family: 'OpenSans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #384758;
`

const PostDescr = styled.p`
  margin: 0;
  font-family: 'OpenSans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #606F81;
`

export {
  PostWrap,
  PostTitle,
  PostDescr
}