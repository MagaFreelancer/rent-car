import { SliderGroup, SliderBullets, SliderArrows } from '@/components/slider'
import { useAppDispatch } from '@/redux/store'
import { useEffect } from 'react'
import { getCarsFetch } from '@/redux/thunk/cars-fetch'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const SinglePage = () => {
    const imgs = [
        'https://i.pinimg.com/736x/a6/ec/45/a6ec456777ffb4d783c357b210e360da.jpg',
        'https://img.freepik.com/free-photo/side-view-anime-girl-hugging-cat_23-2150970941.jpg'
    ]
    const dispatch = useAppDispatch()


    useEffect(() => {
        getCarsFetch()
    })
    return (
        <div className='font-inter'>
            <SliderGroup imgs={imgs}  >
                <SliderBullets />
                <SliderArrows />
            </SliderGroup>
            <div>
                <h2 className="mb-12">Lamborghini Aventador, 2013</h2>
                <Rating
                    name="text-feedback"
                    value={0}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
            </div>
        </div>
    )
}

export default SinglePage