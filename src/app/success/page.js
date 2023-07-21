import HeroSection from '@/components/HeroSection'
import React from 'react'

export default function Sucess() {
    return (
        <div className='sections'>
            <HeroSection
                subtitle='Submission successful'
                low_moon
                btn_text='Click to go back'
                btn_link='/'
            />
        </div>
    )
}
