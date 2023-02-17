export default function BlogNav({title, pagenav}) {
    return (
        <>
        <p className="m-0 font-bold text-center cursor-pointer unicorn:text-cyan-300">{title}</p>
        {pagenav.map((item, i) => 
            <a key={i} href={`#${item.href}`} className="relative no-underline bg-gradient-to-t from-current to-current bg-x-100-y-60 bg-no-repeat bg-0%-20% inline transition-background-size duration-300 bg-blue-300 text-blueGray-700 px-2 hover:no-underline hover:bg-x-0-y-60 hover:bg-100%-20% unicorn:bg-cyan-300 unicorn:text-purple-700 dark:bg-lime-300 dark:text-blueGray-700">{item.name}</a>
        )}
        </>
    )
}