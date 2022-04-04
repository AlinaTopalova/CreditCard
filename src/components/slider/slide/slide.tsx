import * as S from 'components/slider/slide/slide.styled';
import { User } from 'types';

type SlideType = {
  user: User,
  imgSrc: string,
  currentUser?: User,
  onClick: () => void,
}

export default function Slide(props: SlideType): JSX.Element {
  const { user, imgSrc, currentUser, onClick } = props;

  return (
    <S.SlideWrap>
      <S.PhotoWrap active={currentUser?.id === user.id} onClick={onClick}>
        <S.Photo src={imgSrc}>
        </S.Photo>
      </S.PhotoWrap>
      <S.Name>{user.name}</S.Name>
      <S.CompanyName>{user.company.name}</S.CompanyName>
    </S.SlideWrap>
  )
}