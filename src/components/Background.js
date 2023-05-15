import {useRef} from "react";

export const Background = (props) =>{
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const aspect = windowSize.current[0] / windowSize.current[1];
    const adjustedHeight = Math.ceil(windowSize.current[0]  / aspect) / 1.2;
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fillRule="evenodd"
            clipRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox={`0 0 ${windowSize.current[0] > 600 ? windowSize.current[0] * 0.65:0} ${adjustedHeight}`}
            {...props}
        >
            <path
                d="M80.13 0h645.26c43.94 0 93.02 37.96 79.89 79.89l-100.61 321.3c-13.13 41.92-36.78 71.39-79.89 79.88l-514.48 40.9c-43.1 8.5-76.25-36.1-79.89-79.88L.24 79.89C-3.4 36.11 36.19 0 80.13 0z"
            />
        </svg>
    )
}