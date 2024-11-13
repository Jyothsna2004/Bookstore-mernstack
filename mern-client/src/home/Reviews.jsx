import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {FaStar} from "react-icons/fa6"
import 'flowbite';
import { Avatar } from "flowbite-react";
import Profile from "../assets/profile.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center ml-10 leading-none'>Our Customers Reviews</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}  // Add Pagination here
          className="mySwiper"
        >
          <SwiperSlide className='shadow-2xl bg-thistle py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus delectus sit aliquam, et perspiciatis perferendis est, ipsum beatae recusandae blanditiis adipisci, illo ut ipsa fuga eveniet. Inventore, non et.</p>
                <Avatar img={Profile} alt="avatar of Jese" className='w-10 mb-4 rounded-full'/>
                <h5 className='text-lg font-medium'>Lara Jean</h5>
                <p className='text-base'>Student</p>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-thistle py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus delectus sit aliquam, et perspiciatis perferendis est, ipsum beatae recusandae blanditiis adipisci, illo ut ipsa fuga eveniet. Inventore, non et.</p>
                <Avatar img={Profile} alt="avatar of Jese" className='w-10 mb-4 rounded-full'/>
                <h5 className='text-lg font-medium'>Lara Jean</h5>
                <p className='text-base'>Student</p>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-thistle py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus delectus sit aliquam, et perspiciatis perferendis est, ipsum beatae recusandae blanditiis adipisci, illo ut ipsa fuga eveniet. Inventore, non et.</p>
                <Avatar img={Profile} alt="avatar of Jese" className='w-10 mb-4 rounded-full'/>
                <h5 className='text-lg font-medium'>Lara Jean</h5>
                <p className='text-base'>Student</p>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-thistle py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus delectus sit aliquam, et perspiciatis perferendis est, ipsum beatae recusandae blanditiis adipisci, illo ut ipsa fuga eveniet. Inventore, non et.</p>
                <Avatar img={Profile} alt="avatar of Jese" className='w-10 mb-4 rounded-full'/>
                <h5 className='text-lg font-medium'>Lara Jean</h5>
                <p className='text-base'>Student</p>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-thistle py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus delectus sit aliquam, et perspiciatis perferendis est, ipsum beatae recusandae blanditiis adipisci, illo ut ipsa fuga eveniet. Inventore, non et.</p>
                <Avatar img={Profile} alt="avatar of Jese" className='w-10 mb-4 rounded-full'/>
                <h5 className='text-lg font-medium'>Lara Jean</h5>
                <p className='text-base'>Student</p>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-thistle py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus delectus sit aliquam, et perspiciatis perferendis est, ipsum beatae recusandae blanditiis adipisci, illo ut ipsa fuga eveniet. Inventore, non et.</p>
                <Avatar img={Profile} alt="avatar of Jese" className='w-10 mb-4 rounded-full'/>
                <h5 className='text-lg font-medium'>Lara Jean</h5>
                <p className='text-base'>Student</p>
              </div>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
