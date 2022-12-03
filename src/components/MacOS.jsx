import React from 'react'
import ShadowEditor from '../pages/ShadowEditor'
import '../styles/MacOS.css'
import logo from '../assets/logo.svg';
import eron from '../assets/dock_eron_logo.svg';
import Github from '../assets/Github.png';
import Dribbble from '../assets/Dribbble.png';
import Twitter from '../assets/Twitter.png';
import Figma from '../assets/Figma.svg';
import LinkedIn from '../assets/LinkedIn.png';
import Instagram from '../assets/Instagram.png';

export default function MacOS() {

    const apps = [
        {
            name: 'Shadow',
            logo: logo,
            url: 'aa'
        },
        {
            name: 'Dribbble',
            logo: Dribbble,
            url: 'aa'
        },
        {
            name: 'Twitter',
            logo: Twitter,
            url: 'https://twitter.com/imeronn'
        },
        {
            name: 'Github',
            logo: Github,
            url: 'aa'
        },
        {
            name: 'Figma',
            logo: Figma,
            url: 'aa'
        }, 
        {
            name: 'LinkedIn',
            logo: LinkedIn,
            url: 'https://twitter.com/imeronn'
        },
        {
            name: 'Instagram',
            logo: Instagram,
            url: 'https://twitter.com/imeronn'
        },
        {
            name: 'Eronred',
            logo: eron,
            url: 'aa'
        }, 

    ]

    return (
        <div className='macOS__container'>
            <div className='window__container'>
                <ShadowEditor />
            </div>
            <div className='dock__container'>
                <ul className='dock__wrapper'>

                    {
                        apps.map((app, index) => {
                            return (
                                <li>
                                    <a
                                        _blank
                                        key={index}
                                        href={app.url}>
                                        <img style={{
                                            width: 60,
                                            height: 60
                                        }}
                                            src={app.logo} alt='logo' />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
