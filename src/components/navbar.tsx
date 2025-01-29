type link = {
    label: string;
    url: string
}

type navbarProps = {
    links: link[];
    image: string;
}

export function Navbar({links,image}:navbarProps) {
    return (
        <nav className="flex justify-between py-4 px-2 bg-blue-950">
            <img src={image} alt="Logo" />
            <ul className="flex gap-12">
                {links.map((link,index) => {
                    return (
                        <li className="bg-cyan-400 hover:bg-cyan-900 hover:text-blue-100 px-2 py-1 rounded text-lg text-blue-950" key={index}><a href={link.url} > {link.label} </a></li>
                    )
                })}
            </ul>
        </nav>
    )
}