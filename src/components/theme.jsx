import { useEffect, useState } from "react";

const themes = [
    {
        name: "wizard",
        className: "min-h-full",
        hover: {
            gradient: "black",
            background: "",
            text: ""
        }
    },
    {
        name: "unicorn",
        className: "min-h-full unicorn",
        hover: {
            gradient: "black",
            background: "",
            text: ""
        }
    },
    {
        name: "ninja",
        className: "min-h-full dark",
        hover: {
            gradient: "black",
            background: "",
            text: ""
        }
    },
];


export default function ThemeSelector() {

    const [ currentTheme, setCurrentTheme ] = useState('');

    
    useEffect(() => {
        const root = document.getElementsByTagName('html')[0];
        // const colorMode = localStorage.getItem('colorMode');
        // console.log('colorMode: ', )
        // colorMode !== undefined ? root.classList = colorMode :
        root.classList = currentTheme;
        localStorage.setItem('colorMode', currentTheme)
    }, [currentTheme])

    return (
        <div className="text-right font-semibold">
            theme• 
            {themes.map((theme) =>
                <button type="submit" className={`italic p-2 focus:ring-0 focus:outline-none hover:${theme.hover.gradient} hover:${theme.hover.background} hover:${theme.hover.text} ${currentTheme === theme.name ? `line-through` : `underline`}`}
                    onClick={
                        () => { setCurrentTheme(theme.className); }
                    }
                    key={theme.name}
                    id={theme.name}
                >
                    {theme.name}
                </button>
            )}
        </div>
    )
}