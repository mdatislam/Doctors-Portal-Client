import React from 'react';
import quote from '../../assets/icons/quote.svg'
import Reviews from './Reviews';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {
    const reviews =[
        {_id:1, name:'Winson Herry', location: 'california', reviews:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quam voluptatibus vero recusandae a deserunt similique animi perspiciatis veniam officia veritatis minus debitis facilis hic ullam accusantium, tempora corporis exercitationem.',img:people1},
        {_id:2, name:'Winson Herry', location: 'california', reviews:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quam voluptatibus vero recusandae a deserunt similique animi perspiciatis veniam officia veritatis minus debitis facilis hic ullam accusantium, tempora corporis exercitationem.',img:people2},
        {_id:3, name:'Winson Herry', location: 'california', reviews:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quam voluptatibus vero recusandae a deserunt similique animi perspiciatis veniam officia veritatis minus debitis facilis hic ullam accusantium, tempora corporis exercitationem.',img:people3},
    ]
    return (
        <div className=''>
            <div className='flex justify-between pt-10'>
            <div>
                <h3 className='text-primary'>Testimonial</h3>
                <h2 className='text-accent text-3xl'>What Our Patient Says</h2>
            </div>
            <div>
                <img src={quote} className='w-40' alt="" />
            </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    reviews.map(review=> <Reviews
                    key={review._id}
                    review={review}
                    ></Reviews>)
                }
            </div>

            
        </div>
    );
};

export default Testimonial;