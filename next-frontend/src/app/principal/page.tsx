import Image from 'next/image'
import principal from '../../../public/images/principal.svg'

export default function LandingPage({}) {
    return (
        <>  
            <header className="px-10 h-full flex flex-col pt-6">
                <nav className="flex justify-between h-8">
                    <h1 className='font-medium text-cyan-600'>
                        @MerakT.dev
                    </h1>
                    <ul className="flex gap-x-3">
                        <li>
                            <a href="#">
                                <i className="pi pi-github text-xl hover:text-2xl hover:text-orange-500" ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="pi pi-facebook text-xl hover:text-2xl hover:text-blue-500"></i>
                            </a>                        
                        </li>
                        <li>
                            <a href="#">
                                <i className="pi pi-instagram text-xl hover:text-2xl hover:text-purple-500"></i>
                            </a>                        
                        </li>
                        <li>
                            <a href="#">
                                <i className="pi pi-linkedin text-xl hover:text-2xl hover:text-cyan-500"></i>
                            </a>                        
                        </li>
                    </ul>
                    <ul className="flex gap-x-4">
                        <li>
                            <a href="/registro">Registrarse</a>
                        </li>
                        <li >
                            <a href="/login" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1 rounded-2xl">Ingresar</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center h-full gap-x-24 mx-12">
                    <div className='flex flex-col w-1/2 gap-y-4'>
                        <h1 className='text-6xl font-semibold'>
                            Banco de Necesidades <span className='text-cyan-600 text-6xl'>UDH</span>
                        </h1>
                        <p className='text-lg'>
                            Deja en evidencia un problema que te aqueje para que nosotros como universidad lo solucionemos.
                        </p>
                        <div>
                            <a href="#" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1 rounded-2xl">Más inforación</a>

                        </div>
                    </div>
                    <Image
                        src={principal}
                        width={300}
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