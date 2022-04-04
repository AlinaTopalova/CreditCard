import * as S from 'components/posts/post/post.styled';
import { Post } from 'types';

type UserPostProps = {
  post: Post,
}

export default function UserPost(props: UserPostProps): JSX.Element {
  const { post } = props;

  return(
    <S.PostWrap>
      <S.PostTitle>{post.title}</S.PostTitle>
      <S.PostDescr>{post.body}</S.PostDescr>
    </S.PostWrap>
  )

}