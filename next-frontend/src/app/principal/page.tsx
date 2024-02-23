export default function LandingPage({}) {
    return (
        <>  
            <header className="pt-3 px-4">
                <nav className="flex justify-between">
                    <h1>
                        @MerakT.dev
                    </h1>
                    <ul className="flex gap-x-3">
                        <li>
                            <a href="#">
                                <span className="pi pi-github"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="pi pi-facebook"></span>
                            </a>                        </li>
                        <li>
                            <a href="#">
                                <span className="pi pi-instagram"></span>
                            </a>                        
                        </li>
                        <li>
                            <a href="#">
                                <span className="pi pi-linkedin"></span>
                            </a>                        
                        </li>
                    </ul>
                    <ul className="flex gap-x-3">
                        <li>
                            <a href="#">Registrarse</a>
                        </li>
                        <li >
                            <a href="#" className="bg-gray-900 text-white px-4 py-1 rounded-2xl">Ingresar</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div>
                    <h1>
                        Bienvenido a MerakT.dev
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                
                </div>
                
            </main>
        </>
        
    )
}