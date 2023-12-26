import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import './WorkExp.css';

const WorkExp = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
  ];
  return <React.Fragment>
      <div className="container-work-exp">
        <div className="container-skill-title">
          <h1>Work  Experences</h1>
        </div>
        <Swiper
          modules={[EffectCards]}
          effect={'cards'}
          grabCursor={true}
          className="mySwiper"
    >
      {itemData.map((item) => (
         <SwiperSlide>
       <div className="work-exp-description">I started working at FPT in May 2022 as a full-stack developer.</div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
    </React.Fragment>
};
export default WorkExp;
