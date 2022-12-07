import React, { useState } from 'react'
import CardView from '../components/CardView'
import './ShadowSection.css'
import CalendarWidget from '../components/CalendarWidget';


export default function ShadowsSection() {

    const [isCard, setIsCard] = useState(false)
    const boxShadows = [
        {
            name: 'xs',
            day: 'Monday',
            task: 'Working...👨‍💻'
        },
        {
            name: 'sm',
            day: 'Tuesday',
            task: 'Working...👨‍💻'
        },
        {
            name: 'md',
            day: 'Wednesday',
            task: 'Working...👨‍💻'
        },
        {
            name: 'lg',
            day: 'Thursday',
            task: 'Flutter Update💙'
        },
        {
            name: 'xl',
            day: 'Friday',
            task: 'Working...👨‍💻'
        },
        {
            name: '2xl',
            day: 'Saturday',
            task: 'Swift Update🧡'
        }
    ]

    return (
        <div className='header__container'>
            <h1>Shadow in Design: “More than meets the eye"</h1>
            <p>Shadows allow you to add depth and realism to designs by positioning elements on a z-axis.</p>
            <div className='input__wrapper'>
                <span style={{
                    color: isCard ? '#828282' : '#000',
                }} className='card__span'>Card</span>
                <label class="switch">
                    <input
                        type='checkbox'
                        value={isCard}
                        onChange={() => setIsCard(!isCard)} />
                    <span class="slider"></span>
                </label>
                <span style={{
                    color: isCard ? '#11B5FB' : '#828282',
                }} className='ui__span'>UI</span>
            </div>

            <div className='element__wrapper'>
                {
                    boxShadows.map((shadow, index) => {
                        return (
                            !isCard ?
                                <CardView
                                    key={index}
                                    name={shadow.name}
                                /> :
                                <CalendarWidget
                                    key={index}
                                    name={shadow.name}
                                    index={index}
                                    day={shadow.day}
                                    task={shadow.task}
                                />
                        )
                    })
                }
            </div>
        </div>
    )
}
