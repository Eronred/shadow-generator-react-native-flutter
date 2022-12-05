import React from 'react'
import '../pages/ShadowSection.css'

export default function CalendarWidget({ name, index, day, task }) {
    return (
        <div className={`widget__container card-${name}`}>
            <div>
                <div className='date__wrapper'>
                    <span>{day}</span>
                    <h2>{19 + index}</h2>
                </div>
                <div className='event__wrapper'>
                    <div style={{
                        background: day === 'Saturday' ? '#FF8000' : day === 'Thursday' ? '#0A84FF' : '#000000'
                    }} className='divider'></div>
                    <div className='event__detail'>
                        <h3>{task}</h3>
                        <span>5AM - 6PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
