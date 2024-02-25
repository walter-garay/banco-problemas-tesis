import Image from 'next/image'
import principal from '../../../public/images/principal.svg'

export default function LandingPage({}) {
    return (
        <>  
            <header className="px-10 h-full flex flex-col pt-7">
                <nav className="flex justify-between items-center px-6">
                    <h1 className='text-lg font-semibold text-cyan-600'>
                        @MerakT.dev
                    </h1>
                    <ul className="flex gap-x-5 items-center">
                        <li>
                            <a href="#">
                                <i className="pi pi-github text-xl transition-transform transform 
                                    hover:scale-110 text-gray-700 hover:text-orange-600">
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="pi pi-facebook text-xl transition-transform transform 
                                    hover:scale-110 text-gray-700 hover:text-blue-600">
                                </i>
                            </a>                        
                        </li>
                        <li>
                            <a href="#">
                                <i className="pi pi-instagram text-xl transition-transform transform 
                                    hover:scale-110 text-gray-700 hover:text-pink-600">
                                </i>
                            </a>                        
                        </li>
                        <li>
                            <a href="#">
                                <i className="pi pi-linkedin text-xl transition-transform transform 
                                    hover:scale-110 text-gray-700 hover:text-cyan-600">                                        
                                </i>
                            </a>                        
                        </li>
                    </ul>
                    <ul className="flex gap-x-4 items-center">
                        <li>
                            <a href="/registro">Registrarse</a>
                        </li>
                        <li >
                            <a href="/login" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1 rounded-2xl transition-all">Ingresar</a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center h-full gap-x-32 mx-12">
                    <div className='flex flex-col w-1/2 gap-y-6'>
                        <h1 className='text-6xl font-semibold text-gray-700'>
                            Banco de Necesidades <span className='text-cyan-600 text-6xl'>UDH</span>
                        </h1>
                        <p className='text-lg'>
                            Deja en evidencia un problema que te aqueje para que nosotros como universidad lo solucionemos.
                        </p>
                        <a href="#" className="bg-cyan-600 hover:bg-cyan-700 font-semibold text-white rounded-2xl text-center w-44 py-2">Más inforación</a>
                    </div>
                    <Image
                        src={principal}
                        alt='principal image'
                        className='w-1/2'
                        >
                    </Image>
                </div>
            </header>
            <main>
                
                
            </main>
        </>
        
    )
}