import * as S from 'mainContainer/mainContainer.styled';

type ContainerProps = {
  children: React.ReactNode
}

export default function MainContainer(props: ContainerProps): JSX.Element {
  const { children } = props;

  return (
    <S.Container>{children}</S.Container>
  )
}