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
                    <a href="https://www.producthunt.com/posts/variants-tool-beta-1-0?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-variants&#0045;tool&#0045;beta&#0045;1&#0045;0" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=369665&theme=light" alt="Variants&#0032;Tool&#0032;Beta&#0032;1&#0046;0 - Make&#0032;unlimited&#0032;variations&#0032;of&#0032;your&#0032;image&#0032;using&#0032;color&#0032;palettes | Product Hunt" /></a>
                </ul>
            </nav>
        </>
    )
}
