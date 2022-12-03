import React from 'react';
import './Components.css'

const CopyButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="button-copy">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2083 3.6665H16.5C16.9862 3.6665 17.4525 3.85966 17.7964 4.20347C18.1402 4.54729 18.3333 5.01361 18.3333 5.49984V17.4165C18.3333 17.9027 18.1402 18.369 17.7964 18.7129C17.4525 19.0567 16.9862 19.2498 16.5 19.2498H5.49999C5.01376 19.2498 4.54744 19.0567 4.20363 18.7129C3.85981 18.369 3.66666 17.9027 3.66666 17.4165V5.49984C3.66666 5.01361 3.85981 4.54729 4.20363 4.20347C4.54744 3.85966 5.01376 3.6665 5.49999 3.6665H7.79166" stroke="white" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.90256 3.222C8.0017 2.82538 8.23057 2.47327 8.55278 2.22165C8.875 1.97002 9.27207 1.83331 9.6809 1.83325H12.3181C12.727 1.83331 13.124 1.97002 13.4463 2.22165C13.7685 2.47327 13.9973 2.82538 14.0965 3.222L14.6666 5.49992H7.33331L7.90256 3.222Z" stroke="white" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.25 11H13.75M8.25 14.6667H13.75" stroke="white" stroke-width="1.83333" stroke-linecap="round" />
            </svg>
            {label}
        </button>
    );
}

export default CopyButton;
