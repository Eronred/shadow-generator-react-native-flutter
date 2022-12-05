import React from 'react'
import Link from './Link';
import logo from '../assets/logo.svg';
import '../pages/Home.css'
import BuyMeCoffee from './BuyMeCoffee';

export default function NavBar() {

    const SIZE = 50

    const socialMedia = [
        {
            url: "https://dribbble.com/imeron",
            label: "Dribbble"
        },
        {
            url: "https://github.com/Eronred",
            label: "Github"
        },
        {
            url: "https://twitter.com/imeronn",
            label: "Twitter"
        },
        {
            url: "https://m2.material.io/design/environment/light-shadows.html#research",
            label: "Instagram"
        },
    ]

    return (
        <>
            <nav>
                <div>
                    <a>
                        <img className='logo__' style={{
                            width: SIZE,
                            height: SIZE,
                            cursor: 'pointer'
                        }} src={logo} alt='logo' />
                    </a>
                </div>
                <ul className='nav__container'>
                    {/* {socialMedia.map((social, index) => {
                        return (
                            <Link
                                key={index}
                                url={social.url}
                                label={social.label}
                            />
                        )
                    })} */}
                    <BuyMeCoffee />
                    <a href="https://www.producthunt.com/posts/shadow-generator-for-mobile?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-shadow&#0045;generator&#0045;for&#0045;mobile" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=369913&theme=light" alt="Shadow&#0032;Generator&#0032;For&#0032;Mobile - React&#0032;Native&#0032;Flutter&#0032;Swift | Product Hunt" /></a>
                </ul>
            </nav>
        </>
    )
}
