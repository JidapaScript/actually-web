import { Swiper, SwiperSlide } from "swiper/react"
export default function CategoriesSwiper({menu}) {
    return (
        <Swiper className="my-8"
        spaceBetween={12}
        slidesPerView={2.8} >
        {
            menu.map((item, index) => (){
                <SwiperSlide className={index == 0 ? 'tag-menu active' : 'tag-menu' }>{item}</
                SwiperSlide>
            })
        }
        ...
        </Swiper>
        );
}