import { useEffect, useState } from "react";

const navigationList = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "Resources",
        href: "/resources/"
    },
    {
        text: "Frontend Masters Workshop Notes",
        href: "/frontend-masters/"
    },
    // # - text: Sitecore Workshop Notes
    // #   href: /sitecore/jss
    {
        text: "What?",
        href: "/about/"
    }
]


export default function Navigation() {
    
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, [""])


    return (
        <nav className="text-center">
            <ul>
                {navigationList.map((navItem, i) => 
                    <li key={i}>
                        <a className={`text-blueGray-700 hover:text-blueGray-900 dark:text-blueGray-50 unicorn:text-purple-700 unicorn:hover:text-pink-300 dark:hover:text-blueGray-300 ${currentPath === navItem.href ? "font-semibold" : ""}`} href={navItem.href} title={navItem.text} alt={navItem.text}>
                            <span>{navItem.text}</span>
                        </a>
                    </li>
                    )
                }
            </ul>
        </nav>
    )
}