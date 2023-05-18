import React from 'react';
import PropTypes from 'prop-types';
import '../pages/ShadowSection.css';

const CalendarWidget = ({ name, index, day, task }) => {
    const getDividerColor = () => {
        if (day === 'Saturday') {
            return '#FF8000';
        } else if (day === 'Thursday') {
            return '#0A84FF';
        } else {
            return '#000000';
        }
    };

    return (
        <div className={`widget__container card-${name}`}>
            <div>
                <div className='date__wrapper'>
                    <span>{day}</span>
                    <h2>{1 + index}</h2>
                </div>
                <div className='event__wrapper'>
                    <div
                        style={{ background: getDividerColor() }}
                        className='divider'
                    ></div>
                    <div className='event__detail'>
                        <h3>{task}</h3>
                        <span>5AM - 6PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

CalendarWidget.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    day: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
};

export default CalendarWidget;
