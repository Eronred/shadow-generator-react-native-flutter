import React, { useState, useRef } from 'react'
import './Home.css'
import { RgbaColorPicker } from "react-colorful";
import { rgba } from 'polished'
import { Button, NavBar, Slider, Banner } from './index'
import useClose from '../hooks/useClose';
import { flexColumnCentered, flexRowCentered } from '../styles/style';
import { useMediaQuery } from '@react-hook/media-query'

export default function Home() {

  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 0.08 })
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0)
  const { r, g, b, a } = color;
  const SIZE = 60;
  const { ref, isComponentOpen, setIsComponentOpen } = useClose(false)

  const matches = useMediaQuery('(min-width:1170px)');
  return (
    <div style={flexColumnCentered}>
      <Banner
        label="Follow for next tools!🎯"
      />
      <NavBar />
      <div className='header__container'>

        <div className='languages__wrapper'>
          <svg width={SIZE} height={SIZE} viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.100098" width="81" height="81" rx="40.5" fill="white" />
            <path d="M40.4292 47.387C44.0759 47.387 47.0322 44.4307 47.0322 40.784C47.0322 37.1372 44.0759 34.181 40.4292 34.181C36.7824 34.181 33.8262 37.1372 33.8262 40.784C33.8262 44.4307 36.7824 47.387 40.4292 47.387Z" fill="#61DAFB" />
            <path d="M40.429 65.066C45.612 70.107 50.724 73.089 54.842 73.089C56.191 73.089 57.469 72.805 58.534 72.166C62.226 70.036 63.575 64.711 62.297 57.114C62.084 55.765 61.8 54.416 61.445 52.996C62.865 52.57 64.143 52.144 65.421 51.718C72.592 48.949 76.568 45.115 76.568 40.926C76.568 36.666 72.592 32.832 65.421 30.134C64.143 29.637 62.865 29.211 61.445 28.856C61.8 27.436 62.084 26.087 62.297 24.738C63.504 16.999 62.155 11.603 58.463 9.47299C57.398 8.83399 56.12 8.54999 54.771 8.54999C50.724 8.54999 45.541 11.532 40.358 16.573C35.246 11.532 30.134 8.54999 26.016 8.54999C24.667 8.54999 23.389 8.83399 22.324 9.47299C18.632 11.603 17.283 16.928 18.561 24.525C18.774 25.874 19.058 27.223 19.413 28.643C17.993 29.069 16.715 29.495 15.437 29.921C8.26604 32.69 4.29004 36.524 4.29004 40.713C4.29004 44.973 8.26604 48.807 15.437 51.505C16.715 52.002 17.993 52.428 19.413 52.783C19.058 54.203 18.774 55.552 18.561 56.901C17.354 64.498 18.703 69.894 22.324 71.953C23.389 72.592 24.667 72.876 26.016 72.876C30.134 73.018 35.246 70.036 40.429 65.066ZM36.453 55.481C37.731 55.552 39.08 55.552 40.429 55.552C41.778 55.552 43.127 55.552 44.405 55.481C43.127 57.185 41.778 58.747 40.429 60.238C39.08 58.747 37.731 57.185 36.453 55.481ZM27.649 48.168C28.359 49.375 28.998 50.511 29.779 51.647C27.578 51.363 25.519 51.008 23.531 50.582C24.17 48.665 24.88 46.677 25.732 44.689C26.3 45.825 26.939 47.032 27.649 48.168ZM23.531 31.057C25.519 30.631 27.578 30.276 29.779 29.992C29.069 31.128 28.359 32.264 27.649 33.471C26.939 34.678 26.3 35.814 25.732 37.021C24.809 34.962 24.099 32.974 23.531 31.057ZM27.436 40.784C28.359 38.867 29.353 36.95 30.489 35.033C31.554 33.187 32.761 31.341 33.968 29.495C36.098 29.353 38.228 29.282 40.429 29.282C42.701 29.282 44.831 29.353 46.89 29.495C48.168 31.341 49.304 33.187 50.369 35.033C51.505 36.95 52.499 38.867 53.422 40.784C52.499 42.701 51.505 44.618 50.369 46.535C49.304 48.381 48.097 50.227 46.89 52.073C44.76 52.215 42.63 52.286 40.429 52.286C38.157 52.286 36.027 52.215 33.968 52.073C32.69 50.227 31.554 48.381 30.489 46.535C29.353 44.618 28.359 42.701 27.436 40.784ZM55.197 36.95L53.28 33.4C52.57 32.193 51.931 31.057 51.15 29.921C53.351 30.205 55.41 30.56 57.398 30.986C56.759 32.974 56.049 34.962 55.197 36.95ZM55.197 44.618C56.049 46.606 56.759 48.594 57.398 50.511C55.41 50.937 53.351 51.292 51.15 51.576C51.86 50.44 52.57 49.304 53.28 48.097C53.919 47.032 54.558 45.825 55.197 44.618ZM56.83 69.255C56.262 69.61 55.552 69.752 54.771 69.752C51.292 69.752 46.961 66.912 42.701 62.652C44.76 60.451 46.748 57.966 48.736 55.197C52.073 54.913 55.268 54.416 58.25 53.706C58.605 54.984 58.818 56.262 59.031 57.54C60.025 63.575 59.244 67.906 56.83 69.255ZM60.522 31.838C68.474 34.11 73.231 37.589 73.231 40.784C73.231 43.553 69.965 46.322 64.214 48.523C63.078 48.949 61.8 49.375 60.522 49.73C59.599 46.819 58.463 43.837 57.043 40.784C58.463 37.731 59.67 34.749 60.522 31.838ZM54.842 11.816C55.623 11.816 56.262 11.958 56.901 12.313C59.244 13.662 60.096 17.922 59.102 24.028C58.889 25.235 58.605 26.513 58.321 27.862C55.339 27.223 52.144 26.726 48.807 26.371C46.89 23.602 44.831 21.117 42.772 18.916C47.032 14.727 51.363 11.816 54.842 11.816ZM44.405 26.087C43.127 26.016 41.778 26.016 40.429 26.016C39.08 26.016 37.731 26.016 36.453 26.087C37.731 24.383 39.08 22.821 40.429 21.33C41.778 22.821 43.127 24.454 44.405 26.087ZM24.028 12.313C24.596 11.958 25.306 11.816 26.087 11.816C29.566 11.816 33.897 14.656 38.157 18.916C36.098 21.117 34.11 23.602 32.122 26.371C28.785 26.655 25.59 27.152 22.608 27.862C22.253 26.584 22.04 25.306 21.827 24.028C20.833 17.993 21.614 13.733 24.028 12.313ZM20.336 49.73C12.384 47.458 7.62704 43.979 7.62704 40.784C7.62704 38.015 10.893 35.246 16.644 33.045C17.78 32.619 19.058 32.193 20.336 31.838C21.259 34.749 22.395 37.731 23.815 40.784C22.395 43.837 21.188 46.89 20.336 49.73ZM21.827 57.54C22.04 56.333 22.324 55.055 22.608 53.706C25.59 54.345 28.785 54.842 32.122 55.197C34.039 57.966 36.098 60.451 38.157 62.652C33.897 66.841 29.566 69.752 26.087 69.752C25.306 69.752 24.667 69.61 24.028 69.255C21.614 67.906 20.833 63.575 21.827 57.54Z" fill="#61DAFB" />
            <rect x="0.606348" y="0.50625" width="79.9875" height="79.9875" rx="39.9938" stroke="black" stroke-opacity="0.06" stroke-width="1.0125" />
          </svg>
          <svg width={SIZE} height={SIZE} viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="81" height="81" rx="40.5" fill="white" />
            <g clip-path="url(#clip0_714_441)">
              <path d="M29.4553 51.9123L37.2231 59.6849L58.5954 38.3077H43.055L29.4553 51.9123Z" fill="#39CEFD" />
              <path d="M43.055 14.9946H58.5954L25.569 48.0259L17.7964 40.2533L43.055 14.9946Z" fill="#39CEFD" />
              <path d="M37.2229 59.6849L43.0548 65.5119H58.5952L44.9955 51.9122L37.2229 59.6849Z" fill="#03569B" />
              <path d="M48.7505 55.6915L44.9955 51.9122L37.2229 59.6849L48.7505 55.6915Z" fill="url(#paint0_linear_714_441)" />
              <path d="M29.4543 51.9095L37.2272 44.1367L45.0005 51.9095L37.2272 59.6824L29.4543 51.9095Z" fill="#16B9FD" />
              <path d="M58.5954 38.3077L44.9958 51.9122L58.5954 65.5168H43.055L29.4505 51.9122L43.055 38.3077H58.5954ZM43.055 14.9946L17.7964 40.2533L25.569 48.0259L58.5954 14.9946H43.055Z" fill="url(#paint1_radial_714_441)" />
            </g>
            <rect x="1.00625" y="0.50625" width="79.9875" height="79.9875" rx="39.9938" stroke="black" stroke-opacity="0.06" stroke-width="1.0125" />
            <defs>
              <linearGradient id="paint0_linear_714_441" x1="39.4912" y1="61.1849" x2="45.2801" y2="55.396" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1A237E" stop-opacity="0.4" />
                <stop offset="1" stop-color="#1A237E" stop-opacity="0" />
              </linearGradient>
              <radialGradient id="paint1_radial_714_441" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.9426 18.4381) scale(61.8077 61.8077)">
                <stop stop-color="white" stop-opacity="0.1" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </radialGradient>
              <clipPath id="clip0_714_441">
                <rect width="45.6529" height="50.5225" fill="white" transform="translate(17.9294 14.9946)" />
              </clipPath>
            </defs>
          </svg>
          <svg width={SIZE} height={SIZE} viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_724_110)">
              <g clip-path="url(#clip1_724_110)">
                <path d="M18.9037 0H63.7701C65.9533 0 68.0732 0.348047 70.1298 1.07578C73.1041 2.15156 75.7935 4.05 77.8185 6.51797C79.8752 8.98594 81.2357 12.0234 81.7103 15.1875C81.9002 16.3582 81.9318 17.5289 81.9318 18.6996V62.4586C81.9318 63.8508 81.8685 65.2746 81.5838 66.6352C80.9509 69.7676 79.4638 72.7102 77.3123 75.0832C75.1923 77.4563 72.408 79.2281 69.4021 80.1773C67.567 80.7469 65.6685 81 63.7384 81C62.8841 81 18.7771 81 18.1127 80.9684C14.8853 80.8102 11.6896 79.766 9.00016 77.9625C6.37399 76.1906 4.22243 73.7227 2.83024 70.875C1.62789 68.4387 1.02672 65.7176 1.02672 62.9965V18.0035C0.963441 15.3141 1.53297 12.6563 2.70368 10.2516C4.06422 7.40391 6.18414 4.9043 8.81032 3.13242C11.4998 1.29727 14.6638 0.221484 17.8912 0.0632813C18.2076 0 18.5556 0 18.9037 0V0Z" fill="url(#paint0_linear_724_110)" />
                <path d="M69.2439 66.2555C68.9591 65.8125 68.6427 65.3695 68.2947 64.9582C67.5037 64.009 66.5861 63.1863 65.5736 62.4902C64.308 61.6359 62.8208 61.098 61.3021 61.0348C60.2263 60.9715 59.1505 61.1613 58.138 61.541C57.1255 61.8891 56.1447 62.3953 55.1955 62.9016C54.088 63.4711 52.9806 64.0406 51.8099 64.5152C50.4177 65.0848 48.9623 65.5277 47.4751 65.8441C45.6083 66.1922 43.7099 66.3188 41.8431 66.2871C38.4576 66.2238 35.072 65.7176 31.8447 64.7684C28.997 63.9141 26.2759 62.7434 23.713 61.2563C21.4666 59.959 19.3783 58.4719 17.4166 56.7949C15.8029 55.4027 14.3158 53.9156 12.9236 52.3336C11.9744 51.2262 11.0568 50.0555 10.2025 48.8531C9.85444 48.3785 9.53804 47.8723 9.25327 47.366L0.900146 38.3484V17.9402C0.900146 8.03672 8.90522 0 18.8087 0H34.7873L46.6208 12.0234C73.3255 30.1852 64.6876 50.2137 64.6876 50.2137C64.6876 50.2137 72.2814 58.7566 69.2439 66.2555V66.2555Z" fill="url(#paint1_linear_724_110)" />
                <path d="M46.684 12.0234C73.3887 30.1852 64.7508 50.2137 64.7508 50.2137C64.7508 50.2137 72.3446 58.7883 69.2754 66.2871C69.2754 66.2871 66.143 61.0348 60.8907 61.0348C55.8282 61.0348 52.854 66.2871 42.6657 66.2871C19.9793 66.2871 9.25317 47.3344 9.25317 47.3344C29.693 60.7816 43.6465 51.2578 43.6465 51.2578C34.4391 45.9105 14.8536 20.3449 14.8536 20.3449C31.9079 34.868 39.2801 38.6965 39.2801 38.6965C34.8821 35.0578 22.5422 17.2758 22.5422 17.2758C32.4141 27.2742 52.0313 41.2277 52.0313 41.2277C57.6001 25.7871 46.684 12.0234 46.684 12.0234Z" fill="white" />
              </g>
            </g>
            <defs>
              <linearGradient id="paint0_linear_724_110" x1="49.086" y1="-2.89037" x2="33.7824" y2="83.9002" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAE42" />
                <stop offset="1" stop-color="#EF3E31" />
              </linearGradient>
              <linearGradient id="paint1_linear_724_110" x1="42.2266" y1="1.30866" x2="31.0261" y2="64.8294" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E39F3A" />
                <stop offset="1" stop-color="#D33929" />
              </linearGradient>
              <clipPath id="clip0_724_110">
                <rect x="0.900146" width="81" height="81" rx="40.5" fill="white" />
              </clipPath>
              <clipPath id="clip1_724_110">
                <rect width="81" height="81" fill="white" transform="translate(0.900146)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <a style={{
          fontSize: 18,
          fontWeight: 500,
          cursor: 'pointer',
          textDecoration: "underline",
          color: 'black'

        }}
          href='https://eron.gumroad.com/l/exclusive-wallpapers-pack'
          className='banner'>
          Download Free wallpapers (desktop & mobile) ✨💻 📱
        </a>
        <h1 style={{
          fontSize: 68
        }}>Shadow Generator for Mobile Frameworks!</h1>
        <p>The easiest way to generate shadows for <br></br><span className='react'>React Native</span>, <span className='flutter'>Flutter</span> and <span className='swift'>Swift</span></p>
        {matches && <div>
          <svg className='mobile__card' width="308" height="178" viewBox="0 0 308 178" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_136_681)">
              <rect width="142" height="212" rx="26" transform="matrix(0.866044 -0.499967 0.866044 0.499967 0 71.315)" fill="white" fill-opacity="0.94" />
              <rect x="0.866044" width="141" height="211" rx="25.5" transform="matrix(0.866044 -0.499967 0.866044 0.499967 0.116012 71.748)" stroke="black" stroke-opacity="0.03" />
            </g>
            <circle r="25" transform="matrix(0.866044 -0.499967 0.866044 0.499967 77.078 74.815)" fill="#2FB8F1" />
            <path fill-rule="evenodd" cap-rule="evenodd" d="M84.1823 70.5568C84.9749 70.5567 85.6176 70.9277 85.6175 71.3853L85.6175 78.0255C85.6176 78.4831 84.975 78.8541 84.1823 78.8541L72.6802 78.8541C71.8875 78.8541 71.2449 78.4831 71.2449 78.0255C71.2449 77.5679 71.8875 77.1969 72.6802 77.1969L80.7172 77.1969L70.6504 71.3853C70.0899 71.0617 70.0899 70.5371 70.6504 70.2135C71.2109 69.8899 72.1196 69.8899 72.6802 70.2135L82.747 76.0251L82.7471 71.3853C82.7471 70.9277 83.3896 70.5568 84.1823 70.5568Z" fill="white" />
            <path d="M105.625 115.331L97.7435 110.782L100.164 109.384C101.553 108.583 102.926 108.197 104.285 108.227C105.651 108.253 106.949 108.622 108.18 109.332C109.389 110.03 110.015 110.773 110.06 111.562C110.105 112.342 109.434 113.132 108.045 113.934L105.625 115.331ZM105.782 114.33L107.235 113.492C108 113.05 108.484 112.628 108.687 112.225C108.89 111.813 108.856 111.416 108.586 111.035C108.308 110.649 107.846 110.27 107.201 109.898C106.54 109.516 105.876 109.246 105.208 109.085C104.54 108.925 103.849 108.903 103.136 109.02C102.431 109.133 101.695 109.41 100.93 109.852L99.4774 110.691L105.782 114.33ZM116.087 109.447C115.562 109.751 114.969 109.954 114.308 110.058C113.648 110.162 112.976 110.16 112.293 110.052C111.61 109.935 110.972 109.705 110.379 109.363C109.786 109.021 109.396 108.652 109.208 108.258C109.013 107.859 109.005 107.469 109.186 107.088C109.373 106.702 109.73 106.358 110.255 106.055C110.78 105.751 111.373 105.548 112.034 105.444C112.694 105.34 113.366 105.346 114.049 105.463C114.732 105.571 115.37 105.797 115.963 106.139C116.556 106.481 116.95 106.852 117.145 107.251C117.333 107.645 117.333 108.035 117.145 108.42C116.965 108.802 116.612 109.144 116.087 109.447ZM115.276 108.979C115.599 108.793 115.821 108.574 115.941 108.323C116.061 108.072 116.049 107.805 115.907 107.523C115.764 107.242 115.46 106.967 114.995 106.698C114.53 106.429 114.053 106.254 113.565 106.172C113.085 106.085 112.627 106.076 112.192 106.146C111.756 106.215 111.381 106.341 111.066 106.523C110.743 106.709 110.522 106.928 110.401 107.179C110.281 107.43 110.293 107.697 110.435 107.978C110.578 108.26 110.882 108.535 111.347 108.804C111.813 109.073 112.289 109.248 112.777 109.33C113.265 109.413 113.723 109.421 114.151 109.356C114.586 109.287 114.961 109.161 115.276 108.979ZM120.987 106.462L113.77 104.181L114.716 103.635L120.278 105.481L117.204 102.199L118.274 101.581L123.971 103.349L120.762 100.145L121.719 99.5924L125.671 103.759L124.703 104.318L118.724 102.452L121.955 105.904L120.987 106.462ZM128.349 102.212L122.765 98.9886L123.621 98.4946L124.679 99.0406C124.506 98.7329 124.488 98.4231 124.623 98.1111C124.758 97.7992 125.039 97.5197 125.467 97.2727C126.128 96.8914 126.856 96.7051 127.651 96.7137C128.447 96.7137 129.261 96.9542 130.094 97.4352L133.359 99.3201L132.414 99.866L129.25 98.0396C128.087 97.368 127.025 97.3095 126.064 97.8642C125.583 98.1415 125.358 98.4751 125.388 98.8651C125.418 99.2464 125.756 99.6234 126.402 99.996L129.295 101.666L128.349 102.212ZM134.792 98.4929L126.686 93.8132L127.632 93.2672L135.738 97.9469L134.792 98.4929ZM139.968 95.6612C139.442 95.9645 138.849 96.1681 138.189 96.2721C137.528 96.3761 136.856 96.3739 136.173 96.2656C135.49 96.1486 134.852 95.919 134.259 95.5767C133.666 95.2343 133.276 94.866 133.089 94.4717C132.893 94.0731 132.886 93.6831 133.066 93.3018C133.254 92.9162 133.61 92.5717 134.136 92.2684C134.661 91.9651 135.254 91.7614 135.914 91.6574C136.575 91.5534 137.247 91.5599 137.93 91.6769C138.613 91.7852 139.251 92.0106 139.844 92.3529C140.437 92.6952 140.831 93.0657 141.026 93.4643C141.213 93.8586 141.213 94.2486 141.026 94.6342C140.846 95.0155 140.493 95.3578 139.968 95.6612ZM139.157 95.1932C139.48 95.0069 139.701 94.788 139.821 94.5367C139.941 94.2854 139.93 94.0189 139.787 93.7373C139.645 93.4556 139.341 93.1805 138.875 92.9118C138.41 92.6432 137.933 92.4677 137.446 92.3854C136.965 92.2987 136.507 92.29 136.072 92.3594C135.637 92.4287 135.261 92.5544 134.946 92.7363C134.623 92.9227 134.402 93.1415 134.282 93.3928C134.162 93.6441 134.173 93.9106 134.316 94.1922C134.458 94.4739 134.762 94.749 135.228 95.0177C135.693 95.2863 136.17 95.4618 136.657 95.5442C137.145 95.6265 137.603 95.6352 138.031 95.5702C138.466 95.5008 138.842 95.3752 139.157 95.1932ZM145.944 92.2112C145.478 92.4798 145.013 92.6575 144.547 92.7442C144.082 92.8308 143.643 92.8417 143.23 92.7767C142.817 92.7117 142.457 92.5903 142.149 92.4127C141.579 92.0834 141.358 91.7042 141.485 91.2753C141.613 90.8463 142.052 90.4151 142.802 89.9818L144.311 89.1109L144.243 89.0719C143.756 88.7903 143.26 88.6516 142.757 88.6559C142.247 88.6559 141.778 88.7794 141.35 89.0264C140.982 89.2387 140.757 89.477 140.675 89.7414C140.592 89.997 140.693 90.2462 140.978 90.4888L140.01 91.0478C139.642 90.7921 139.436 90.517 139.391 90.2223C139.354 89.9233 139.44 89.6309 139.65 89.3449C139.853 89.0546 140.153 88.7946 140.551 88.5649C141.331 88.1143 142.127 87.8976 142.937 87.915C143.748 87.9236 144.499 88.1273 145.189 88.5259L148.623 90.5083L147.779 90.9958L146.72 90.4498C146.878 90.7228 146.916 91.0131 146.833 91.3208C146.75 91.6197 146.454 91.9166 145.944 92.2112ZM145.291 91.6652C145.651 91.4572 145.865 91.2254 145.932 90.9698C146.007 90.7098 145.962 90.4541 145.797 90.2028C145.632 89.9515 145.384 89.7305 145.054 89.5399L145.043 89.5334L143.613 90.3588C143.058 90.6795 142.761 90.9633 142.724 91.2103C142.686 91.4486 142.81 91.6501 143.095 91.8147C143.388 91.9837 143.729 92.0595 144.12 92.0422C144.51 92.0162 144.9 91.8906 145.291 91.6652ZM152.71 88.3049C152.155 88.6255 151.539 88.8335 150.864 88.9288C150.196 89.0198 149.524 89.0046 148.848 88.8833C148.18 88.7577 147.565 88.5323 147.002 88.2074C146.439 87.8824 146.056 87.5271 145.854 87.1414C145.643 86.7515 145.621 86.3658 145.786 85.9845C145.944 85.5989 146.304 85.2436 146.867 84.9186C147.325 84.6543 147.824 84.4744 148.364 84.3791C148.905 84.2838 149.441 84.2773 149.974 84.3596L146.518 82.3642L147.464 81.8183L155.57 86.498L154.714 86.9919L153.701 86.511C153.791 86.771 153.776 87.0613 153.656 87.3819C153.536 87.7026 153.22 88.0102 152.71 88.3049ZM151.99 87.7719C152.365 87.5552 152.609 87.3147 152.721 87.0504C152.834 86.7775 152.811 86.5045 152.654 86.2315C152.504 85.9542 152.218 85.6942 151.798 85.4515C151.378 85.2089 150.928 85.0442 150.447 84.9576C149.974 84.8666 149.505 84.8557 149.04 84.9251C148.574 84.9857 148.154 85.1244 147.779 85.341C147.411 85.5534 147.171 85.796 147.058 86.069C146.946 86.3333 146.964 86.6041 147.115 86.8814C147.272 87.1544 147.561 87.4122 147.982 87.6549C148.402 87.8975 148.848 88.0644 149.321 88.1554C149.802 88.242 150.275 88.255 150.74 88.1944C151.205 88.125 151.622 87.9842 151.99 87.7719Z" fill="black" fill-opacity="0.53" />
            <path d="M137.283 128.281C136.416 128.781 135.528 129.111 134.617 129.269C133.707 129.427 132.802 129.456 131.902 129.354C131.003 129.253 130.141 129.06 129.319 128.775C128.507 128.484 127.755 128.139 127.064 127.74C125.781 126.999 124.848 126.251 124.267 125.498C123.675 124.738 123.461 124.013 123.625 123.322C123.779 122.626 124.338 121.999 125.304 121.441C126.094 120.985 126.922 120.691 127.788 120.558C128.655 120.412 129.494 120.397 130.306 120.511C131.118 120.625 131.842 120.833 132.478 121.137L130.52 122.268C129.917 122.034 129.313 121.932 128.71 121.964C128.106 121.996 127.547 122.16 127.031 122.458C126.296 122.882 126.044 123.42 126.275 124.073C126.494 124.719 127.278 125.45 128.628 126.267C128.441 125.856 128.463 125.412 128.693 124.937C128.924 124.462 129.363 124.038 130.01 123.664C130.646 123.297 131.397 123.041 132.264 122.895C133.131 122.749 134.014 122.74 134.913 122.866C135.824 122.987 136.658 123.265 137.414 123.702C138.106 124.101 138.577 124.57 138.83 125.108C139.093 125.64 139.098 126.188 138.846 126.752C138.605 127.309 138.084 127.819 137.283 128.281ZM135.358 127.303C135.972 126.948 136.29 126.549 136.312 126.106C136.334 125.65 136.054 125.254 135.473 124.918C134.858 124.564 134.162 124.396 133.383 124.415C132.604 124.434 131.902 124.624 131.277 124.985C130.871 125.219 130.597 125.485 130.454 125.783C130.311 126.068 130.3 126.353 130.421 126.638C130.531 126.916 130.772 127.163 131.145 127.379C131.738 127.721 132.429 127.885 133.218 127.873C134.019 127.854 134.732 127.664 135.358 127.303ZM148.452 121.605L146.313 120.37L140.636 123.647L138.958 122.678L136.654 115.117L139.04 113.739L146.593 118.1L148.107 117.226L149.933 118.28L148.419 119.154L150.558 120.389L148.452 121.605ZM141.064 121.291L144.618 119.24L139.386 116.219L141.064 121.291ZM158.648 115.947C157.584 116.561 156.427 116.944 155.176 117.096C153.915 117.242 152.631 117.179 151.326 116.906C150.02 116.621 148.775 116.137 147.59 115.453C146.417 114.775 145.583 114.06 145.089 113.306C144.607 112.546 144.497 111.805 144.76 111.083C145.012 110.355 145.671 109.684 146.735 109.069C147.799 108.455 148.962 108.075 150.223 107.929C151.474 107.777 152.752 107.844 154.057 108.129C155.373 108.408 156.619 108.886 157.792 109.563C158.977 110.247 159.811 110.969 160.293 111.729C160.776 112.476 160.891 113.214 160.639 113.943C160.376 114.664 159.712 115.333 158.648 115.947ZM156.756 114.854C157.622 114.354 157.968 113.737 157.792 113.002C157.617 112.267 156.898 111.536 155.637 110.808C154.375 110.079 153.108 109.665 151.836 109.563C150.563 109.462 149.494 109.661 148.627 110.162C147.749 110.668 147.398 111.289 147.574 112.024C147.76 112.752 148.484 113.48 149.746 114.208C151.007 114.937 152.269 115.355 153.531 115.462C154.803 115.564 155.878 115.361 156.756 114.854Z" fill="black" />
            <path d="M169.134 109.666L161.651 105.346L162.753 104.71L167.211 107.284L167.055 104.914L168.375 104.152L168.52 106.768L173.852 106.942L172.459 107.746L167.595 107.506L170.235 109.03L169.134 109.666ZM177.73 104.847C177.328 105.079 176.891 105.239 176.42 105.327C175.956 105.411 175.488 105.421 175.017 105.357L175.693 105.879L174.705 106.449L167.223 102.129L168.324 101.493L171.452 103.299C171.376 103.063 171.39 102.807 171.494 102.531C171.598 102.255 171.879 101.985 172.336 101.721C172.835 101.433 173.392 101.247 174.009 101.163C174.626 101.079 175.246 101.093 175.869 101.205C176.5 101.313 177.075 101.517 177.594 101.817C178.114 102.117 178.467 102.449 178.654 102.813C178.842 103.169 178.862 103.525 178.717 103.881C178.564 104.233 178.235 104.555 177.73 104.847ZM176.586 104.403C177.057 104.131 177.286 103.815 177.272 103.455C177.251 103.091 176.981 102.759 176.462 102.459C176.122 102.263 175.751 102.129 175.35 102.057C174.948 101.985 174.553 101.977 174.165 102.033C173.77 102.085 173.413 102.203 173.094 102.387C172.623 102.659 172.398 102.977 172.419 103.341C172.447 103.701 172.717 104.029 173.23 104.325C173.749 104.625 174.321 104.783 174.944 104.799C175.568 104.807 176.115 104.675 176.586 104.403ZM176.209 100.002L174.348 98.2557L175.543 97.5657L176.978 99.5576L176.209 100.002ZM185.535 100.341C184.883 100.717 184.187 100.935 183.446 100.995C182.704 101.055 182.039 100.951 181.45 100.683L182.562 100.041C182.853 100.145 183.189 100.187 183.57 100.167C183.945 100.143 184.301 100.033 184.641 99.8373C184.973 99.6453 185.147 99.4653 185.161 99.2973C185.174 99.1293 185.091 98.9933 184.911 98.8893C184.648 98.7373 184.364 98.6973 184.059 98.7693C183.754 98.8333 183.376 98.9513 182.926 99.1233C182.573 99.2553 182.199 99.3753 181.804 99.4833C181.416 99.5873 181.031 99.6413 180.65 99.6453C180.269 99.6413 179.916 99.5453 179.59 99.3573C179.14 99.0973 178.939 98.7813 178.987 98.4094C179.029 98.0334 179.361 97.6654 179.985 97.3054C180.56 96.9735 181.163 96.7855 181.793 96.7415C182.431 96.6935 183.034 96.7975 183.602 97.0534L182.542 97.6654C182.285 97.5574 182.008 97.5174 181.71 97.5454C181.419 97.5694 181.132 97.6634 180.848 97.8274C180.57 97.9874 180.415 98.1454 180.38 98.3014C180.338 98.4534 180.408 98.5813 180.588 98.6853C180.768 98.7893 181.014 98.8113 181.326 98.7513C181.644 98.6873 182.019 98.5793 182.448 98.4274C182.871 98.2714 183.279 98.1394 183.674 98.0314C184.069 97.9154 184.454 97.8614 184.828 97.8694C185.202 97.8774 185.576 97.9894 185.95 98.2054C186.428 98.4734 186.636 98.8053 186.574 99.2013C186.518 99.5933 186.172 99.9733 185.535 100.341Z" fill="black" fill-opacity="0.71" />
            <path d="M175.807 156.81C170.466 150.727 165.761 137.611 189.664 133.811C219.542 129.061 198.324 112.813 219.109 112.313C235.737 111.913 234.409 102.98 231.667 98.5635" stroke="#2FB8F1" stroke-width="4" stroke-linejoin="bevel" />
            <defs>
              <filter id="filter0_b_136_681" x="-19.8098" y="-25.0656" width="346.199" height="227.759" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.5" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_681" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_681" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg className='right__card' width="309" height="179" viewBox="0 0 309 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.710234" width="150.449" height="202.934" rx="6.39252" transform="matrix(0.866044 0.499967 -0.866044 0.499967 177.708 0.989601)" fill="white" fill-opacity="0.06" />
            <rect width="123.458" height="60.4112" rx="30.2056" transform="matrix(0.866044 0.499967 -0.866044 0.499967 164.79 21.9415)" fill="#4593FC" />
            <path d="M153.656 58.8437L154.34 59.2387L156.239 58.1422L155.811 57.8946C154.463 57.1164 154.534 56.4738 156.045 55.6012L158.568 54.145C160.049 53.2902 160.018 52.3056 158.547 51.2562L158.844 51.0853C160.661 51.9342 162.367 51.9519 163.837 51.103L166.35 49.6527C167.861 48.7801 168.974 48.7389 170.322 49.5171L170.751 49.7647L172.65 48.6681L171.966 48.2731C169.137 46.6401 166.789 46.6047 164.236 48.0786L162.163 49.2754C160.61 50.1715 159.426 50.1361 157.7 49.1515L155.188 50.6018C156.893 51.5982 156.965 52.2762 155.412 53.1723L153.349 54.3632C150.776 55.8488 150.858 57.2284 153.656 58.8437ZM160.632 58.7442L163.175 60.2122L177.911 51.705L175.368 50.237L160.632 58.7442ZM169.712 64.1983C171.141 65.0236 173.061 65.3066 174.818 65.0118L174.879 65.0472L173.215 66.0082L175.757 67.4762L183.202 63.1784C185.377 61.9226 185.061 60.0891 182.354 58.5268C179.607 56.9409 176.503 56.8112 174.43 57.8311L174.297 57.896L176.656 59.2578L176.768 59.2166C177.728 58.8511 179.025 58.9513 180.23 59.6469C181.517 60.3898 181.568 61.1857 180.475 61.8165L179.73 62.2469L176.728 60.714C173.94 59.2932 171.295 59.0987 169.375 60.207L169.354 60.2188C167.424 61.3331 167.547 62.9484 169.712 64.1983ZM171.989 61.6219L171.999 61.616C172.857 61.1208 174.083 61.2034 175.42 61.8813L178.045 63.2196L177.228 63.6913C175.941 64.4341 173.868 64.3574 172.408 63.5144C171.295 62.8718 171.101 62.1348 171.989 61.6219ZM185.001 73.0599C187.738 74.6399 191.618 74.4041 195.101 72.3937L195.111 72.3878C198.603 70.3716 198.991 68.1313 196.275 66.5631C194.743 65.6787 192.721 65.4193 190.811 65.8143L190.75 65.779L196.52 62.448L193.977 60.98L179.241 69.4872L181.784 70.9552L183.622 69.894L183.683 69.9294C183.019 71.0201 183.438 72.1579 185.001 73.0599ZM186.379 71.3797C184.807 70.4718 185.072 69.0569 187.196 67.8306L187.206 67.8247C189.32 66.6043 191.792 66.4511 193.354 67.3531C194.978 68.2905 194.672 69.6464 192.517 70.8904L192.507 70.8963C190.352 72.1402 188.013 72.323 186.379 71.3797ZM197.226 80.1175C200.055 81.7506 203.323 81.7034 205.324 80.937L205.467 80.8898L203.088 79.5162L202.996 79.5457C202.026 79.8228 200.524 79.7343 199.258 79.0033C197.604 78.0482 197.685 76.7984 199.544 75.6782L207.121 80.0527L207.938 79.581C211.206 77.6945 211.462 75.3304 208.367 73.5441C205.273 71.7577 201.035 71.9051 197.624 73.8742L197.614 73.8801C194.172 75.8669 193.978 78.2428 197.226 80.1175ZM206.407 74.7114C207.755 75.4896 207.877 76.5508 206.345 77.6473L201.27 74.7173C203.139 73.8742 205.059 73.9332 206.407 74.7114ZM205.407 84.5929L207.95 86.0609L222.686 77.5537L220.143 76.0857L205.407 84.5929ZM207.778 90.0882C210.586 91.7095 212.965 91.7508 215.539 90.2651L217.602 89.0742C219.154 88.1781 220.328 88.2194 222.054 89.2039L224.566 87.7536C222.871 86.7632 222.8 86.0734 224.352 85.1773L226.425 83.9805C228.978 82.5066 228.927 81.1566 226.088 79.5176L225.404 79.1226L223.504 80.2192L223.943 80.4727C225.291 81.2509 225.21 81.8876 223.698 82.7601L221.186 84.2104C219.716 85.0594 219.746 86.0439 221.227 87.0992L220.931 87.2702C219.103 86.4153 217.397 86.3976 215.917 87.2525L213.394 88.7087C211.883 89.5812 210.77 89.6225 209.432 88.8502L208.993 88.5967L207.093 89.6932L207.778 90.0882Z" fill="white" />
            <rect y="0.923304" width="121.611" height="58.5645" rx="29.2822" transform="matrix(0.866044 0.499967 -0.866044 0.499967 165.589 22.4032)" stroke="#E3E3E3" stroke-opacity="0.21" stroke-width="1.84673" />
            <rect width="123.458" height="60.4112" rx="30.2056" transform="matrix(0.866044 0.499967 -0.866044 0.499967 87.8657 66.3498)" fill="#F3F3F3" />
            <path d="M76.7317 103.252L77.4159 103.647L79.3154 102.55L78.8865 102.303C77.5385 101.525 77.6099 100.882 79.1213 100.01L81.6438 98.5533C83.1245 97.6985 83.0939 96.7139 81.6233 95.6645L81.9195 95.4936C83.7373 96.3425 85.4427 96.3602 86.9132 95.5113L89.4254 94.061C90.9368 93.1884 92.05 93.1472 93.398 93.9254L93.8269 94.173L95.7264 93.0764L95.0421 92.6814C92.2134 91.0484 89.8646 91.013 87.3115 92.4869L85.2384 93.6837C83.6862 94.5798 82.5016 94.5444 80.7757 93.5599L78.2635 95.0101C79.969 96.0065 80.0404 96.6845 78.4882 97.5806L76.4253 98.7715C73.8519 100.257 73.9335 101.637 76.7317 103.252ZM83.7078 103.153L86.2507 104.621L100.987 96.1133L98.444 94.6453L83.7078 103.153ZM92.7877 108.607C94.2174 109.432 96.1373 109.715 97.8938 109.42L97.9551 109.456L96.2905 110.416L98.8333 111.884L106.278 107.587C108.453 106.331 108.137 104.497 105.43 102.935C102.683 101.349 99.5788 101.22 97.5057 102.239L97.373 102.304L99.732 103.666L99.8443 103.625C100.804 103.259 102.101 103.36 103.306 104.055C104.593 104.798 104.644 105.594 103.551 106.225L102.806 106.655L99.8035 105.122C97.0155 103.702 94.3706 103.507 92.4507 104.615L92.4303 104.627C90.5002 105.741 90.6227 107.357 92.7877 108.607ZM95.065 106.03L95.0752 106.024C95.9331 105.529 97.1585 105.612 98.4963 106.29L101.121 107.628L100.304 108.1C99.0171 108.842 96.9441 108.766 95.4837 107.923C94.3706 107.28 94.1766 106.543 95.065 106.03ZM108.077 117.468C110.813 119.048 114.694 118.812 118.176 116.802L118.187 116.796C121.679 114.78 122.067 112.54 119.351 110.971C117.819 110.087 115.797 109.828 113.887 110.223L113.826 110.187L119.596 106.856L117.053 105.388L102.317 113.896L104.86 115.364L106.698 114.302L106.759 114.338C106.095 115.428 106.514 116.566 108.077 117.468ZM109.455 115.788C107.883 114.88 108.148 113.465 110.272 112.239L110.282 112.233C112.396 111.013 114.868 110.859 116.43 111.761C118.054 112.699 117.748 114.055 115.593 115.299L115.583 115.305C113.428 116.549 111.089 116.731 109.455 115.788ZM120.302 124.526C123.131 126.159 126.398 126.112 128.4 125.345L128.543 125.298L126.164 123.924L126.072 123.954C125.102 124.231 123.6 124.143 122.334 123.412C120.68 122.457 120.761 121.207 122.62 120.087L130.197 124.461L131.014 123.989C134.282 122.103 134.538 119.739 131.443 117.952C128.349 116.166 124.111 116.313 120.7 118.283L120.69 118.288C117.248 120.275 117.054 122.651 120.302 124.526ZM129.483 119.12C130.831 119.898 130.953 120.959 129.421 122.056L124.346 119.126C126.215 118.283 128.135 118.341 129.483 119.12ZM128.483 129.001L131.026 130.469L145.762 121.962L143.219 120.494L128.483 129.001ZM130.853 134.497C133.662 136.118 136.041 136.159 138.615 134.673L140.678 133.483C142.23 132.586 143.404 132.628 145.13 133.612L147.642 132.162C145.947 131.171 145.876 130.482 147.428 129.586L149.501 128.389C152.054 126.915 152.003 125.565 149.164 123.926L148.48 123.531L146.58 124.627L147.019 124.881C148.367 125.659 148.286 126.296 146.774 127.168L144.262 128.619C142.791 129.468 142.822 130.452 144.303 131.508L144.007 131.678C142.179 130.824 140.473 130.806 138.993 131.661L136.47 133.117C134.959 133.99 133.846 134.031 132.508 133.258L132.069 133.005L130.169 134.102L130.853 134.497Z" fill="#A5A5A5" />
            <rect y="0.923304" width="121.611" height="58.5645" rx="29.2822" transform="matrix(0.866044 0.499967 -0.866044 0.499967 88.6653 66.8115)" stroke="#E3E3E3" stroke-opacity="0.21" stroke-width="1.84673" />
            <rect y="0.710234" width="150.449" height="202.934" rx="6.39252" transform="matrix(0.866044 0.499967 -0.866044 0.499967 177.708 0.989601)" stroke="#9747FF" stroke-width="1.42056" stroke-dasharray="14.21 7.1" />
          </svg>
        </div>}

        <div style={{
          position: 'relative'
        }}>
          <div className='slider__container'
            style={{
              boxShadow:
                `${shadowOffsetWidth}px 10px 13px ${rgba(r, g, b, a)}`,
            }}>

            <Slider

              width={150}
              direction='column'
              contentCenter='center'
              max={100}
              min={-50}
              value={shadowOffsetWidth}
              onChange={(e) =>
                setShadowOffsetWidth(e.target.value)}
            />

            <div onClick={() => setIsComponentOpen(!isComponentOpen)}
              style={{
                width: 20,
                height: 20,
                borderRadius: '100%',
                background: rgba(r, g, b, a),
                border: `solid 2px #000`
              }}>
            </div>
          </div>
          <div ref={ref}>
            {isComponentOpen &&
              <RgbaColorPicker
                style={{
                  position: 'absolute',
                  top: 130,
                  right: -120,
                }}
                color={color}
                onChange={setColor} />
            }
          </div>
        </div>
        <a href='#editor'>
          <Button label="Shadow Generator" />
        </a>
      </div>
    </div>
  )
}
