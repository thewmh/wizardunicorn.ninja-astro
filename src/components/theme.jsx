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
        if (themeCookie || localStorage.getItem('colorMode') !== null) {
            const themeVal = themeCookie !== null ? themeCookie : localStorage.getItem('colorMode');
            root.classList = themeVal;
            localStorage.setItem('colorMode', themeVal);
            setCurrentTheme(themeVal)
        }
    }, [themeCookie, ''])

    return (
        <div className="text-right font-semibold">
            theme• 
            {themes.map((theme) =>
                <button type="submit" className={`italic p-2 focus:ring-0 focus:outline-none hover:${theme.hover.gradient} hover:${theme.hover.background} hover:${theme.hover.text} ${currentTheme === theme.className ? `line-through` : `underline`}`}
                    onClick={
                        () => {
                            setThemeCookie(theme.className);
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