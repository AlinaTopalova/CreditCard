import { useEffect, useState } from "react";
import { MainWrap } from "./mainPage.styled";
import { getPosts, getUsers } from "api";
import { FetchStatus } from 'constants/constants';
import { Post, User } from "types";
import Container from "components/container/container";
import Header from "components/header/header";
import Posts from "components/posts/posts";
import SliderApp from "components/slider/slider";

export default function MainPage(): JSX.Element {

  const [users, setUsers] = useState<User[]>([]);

  const [posts, setPosts] = useState<Post[]>([]);

  const [postsStatus, setPostsStatus] = useState<FetchStatus>(FetchStatus.Idle);

  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  const handleSlideClick = (id: number) => {
    setPosts([]);
    setCurrentUser(users.find((user) => user.id === id))
  }
  
  useEffect(() => {
    const fetchUsers = async() => {
      const users = await getUsers();
      setUsers(users);
      setPostsStatus(FetchStatus.Complete);
  }

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async() => {
      setPostsStatus(FetchStatus.Loading);
      try {
        const posts = await getPosts(currentUser?.id);
        setPosts(posts);
        setPostsStatus(FetchStatus.Complete);
      } catch {
        setPostsStatus(FetchStatus.Error);
      }
    }
    fetchPosts();
  }, [currentUser]);

  return (
    <Container>
      <MainWrap>
        <Header />
        <SliderApp
          onClick={handleSlideClick}
          currentUser={currentUser}
          users={users}
        />
        <Posts
          currentUser={currentUser}
          posts={posts}
          postsStatus={postsStatus}
        />
      </MainWrap>
    </Container>
  );
}
