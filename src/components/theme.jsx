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
    const [ themeCookie, setThemeCookie ] = useState(null);

    
    useEffect(() => {
        const root = document.getElementsByTagName('html')[0];
        if (themeCookie !== undefined) {
            root.classList = themeCookie
        }
        root.classList = currentTheme;
        localStorage.setItem('colorMode', currentTheme)
    }, [currentTheme, themeCookie])

    return (
        <div className="text-right font-semibold">
            theme• 
            {themes.map((theme) =>
                <button type="submit" className={`italic p-2 focus:ring-0 focus:outline-none hover:${theme.hover.gradient} hover:${theme.hover.background} hover:${theme.hover.text} ${currentTheme === theme.name ? `line-through` : `underline`}`}
                    onClick={
                        () => { 
                            setThemeCookie(localStorage.getItem('colorMode'));
                            setCurrentTheme(theme.className);
                        }
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