import React from 'react'
import Link from './Link';
import logo from '../assets/logo.svg';
import '../pages/Home.css'
import BuyMeCoffee from './BuyMeCoffee';

export default function NavBar() {

    const SIZE=50

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
                            width:SIZE,
                            height:SIZE,
                            cursor:'pointer'
                        }} src={logo} alt='logo' />
                    </a>
                </div>
                <ul>
                    {socialMedia.map((social, index) => {
                        return (
                            <Link
                                key={index}
                                url={social.url}
                                label={social.label}
                            />
                        )
                    })}
                    <BuyMeCoffee/>
                </ul>
            </nav>
        </>
    )
}
