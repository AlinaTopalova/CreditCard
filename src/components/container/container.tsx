import * as S from 'components/container/container.styled';

type ContainerProps = {
  children: React.ReactNode
}

export default function Container(props: ContainerProps):JSX.Element {
  const { children } = props;

  return (
    <S.Container>{children}</S.Container>
  )
}