import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">8+ years</span>
            </div>

            <div className="about__box">
                <i className='bx bx-book-reader about__icon'></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">B.Tech</span>
            </div>

            <div className="about__box">
                <i className='bx bx-user-voice about__icon'></i>
                <h3 className="about__title">Languages</h3>
                <span className="about__subtitle">English, Hindi</span>
            </div>
        </div>
    )
}

export default Info;