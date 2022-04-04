import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import * as S from 'components/slider/slider.styled'
import Slide from './slide/slide'
import { User } from 'types';
  
type SliderProps = {
  users: User[],
  onClick: (userId: number) => void,
  currentUser?: User,
}

export default function SliderApp(props: SliderProps): JSX.Element {
  const { users, onClick, currentUser } = props;

  const settings = {
    position: 'relative',
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <S.PrevButton></S.PrevButton>,
    nextArrow: <S.NextButton></S.NextButton>,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 789,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
      <Slider {... settings}>
          {users.map((user, idx) => {
            return (
              <Slide
                key={idx}
                user={user}
                currentUser={currentUser}
                imgSrc={`https://i.pravatar.cc/290?img=${idx + 40}`}
                onClick={() => onClick(user.id)}
              ></Slide>
            )
          })}
      </Slider>
  )
}