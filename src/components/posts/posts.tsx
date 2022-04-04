import Loader from 'components/loader/loader';
import * as S from 'components/posts/posts.styled';
import { FetchStatus } from 'constants/constants';
import { Post, User } from 'types';
import UserPost from './post/post';

type PostsProps = {
  currentUser?: User,
  posts: Post[],
  postsStatus: FetchStatus,
}

export default function Posts(props: PostsProps): JSX.Element {
  const { currentUser, posts, postsStatus } = props;

  return(
    <S.SectionWrap>
      {currentUser ? 
        <S.SectionTitle>3 актуальных поста {currentUser?.name}</S.SectionTitle> : 
        <S.SectionTitle>Выберите любого топ-блогера</S.SectionTitle>
      }
      {postsStatus === FetchStatus.Loading && <Loader />}
      {posts.slice(0,3).map((post, idx) => {
        return (
          <UserPost key={idx} post={post} />
        )
      })}
    </S.SectionWrap>
  )
}