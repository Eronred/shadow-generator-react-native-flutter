export const rgbToHex = (r, g, b) => 
'#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

export const hexToRgbA=(hex)=>{
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}


export const createSvgElement = (shadowOffsetWidth, shadowOffsetHeight, shadowRadius, r, g, b, a,svgValue) => {
    const divContainer = document.getElementById('svg-container')
    divContainer.innerHTML = svgValue;
    // .replace(/(width=")[^"]+(")/, '$1auto$2').replace(/(height=")[^"]+(")/, '$1auto$2');
    const svgElement = divContainer.querySelector('svg')
    svgElement.style.width = 'auto';
    svgElement.style.height = 'auto';
    svgElement.style.boxShadow = `'${shadowOffsetWidth}px ${shadowOffsetHeight}px ${shadowRadius}px ${rgba(r, g, b, a)}'`
}