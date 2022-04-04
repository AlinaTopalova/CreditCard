import * as S from 'components/header/header.styled';

export default function Header():JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.HeaderTitle>Наши топ-блогеры</S.HeaderTitle>
      <S.HeaderDescr>
        Лучшие специалисты в своем деле,
      </S.HeaderDescr>
      <S.HeaderDescr>
        средний опыт работы в профессии - 27 лет
      </S.HeaderDescr>
    </S.HeaderWrapper>
  )
}