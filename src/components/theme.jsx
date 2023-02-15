import { useEffect, useState } from "react";

const themes = [
    {
        name: "wizard",
        hover: {
            gradient: "black",
            background: "",
            text: ""
        }
    },
    {
        name: "unicorn",
        hover: {
            gradient: "black",
            background: "",
            text: ""
        }
    },
    {
        name: "ninja",
        hover: {
            gradient: "black",
            background: "",
            text: ""
        }
    },
];

const themeClasses = {
    wizard: "min-h-full",
    unicorn: "min-h-full unicorn",
    ninja: "min-h-full dark"
}


export default function ThemeSelector() {

    const [ currentTheme, setCurrentTheme ] = useState('wizard');

    
    useEffect(() => {
        const root = document.getElementsByTagName('html')[0];
        root.classList = '';
        root.classList = themeClasses[currentTheme];
    }, [currentTheme])

    return (
        <div className="text-right font-semibold">
            theme• 
            {themes.map((theme) =>
                <button type="submit" className={`italic p-2 focus:ring-0 focus:outline-none hover:${theme.hover.gradient} hover:${theme.hover.background} hover:${theme.hover.text} ${currentTheme === theme.name ? `line-through` : `underline`}`}
                    onClick={
                        () => { setCurrentTheme(theme.name); }
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