import { useState } from 'react';


async function copyTextToClipboard() {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(shadowCode);
    } else {
        return document.execCommand('copy', true, shadowCode);
    }
}

const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard()
        .then(() => {
            // If successful, update the isCopied state value
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        })
        .catch((err) => {
            console.log(err);
        });
}


export const useCopy = (text) => {
    const [copiedText,setCopiedText]=useState('');
    


}