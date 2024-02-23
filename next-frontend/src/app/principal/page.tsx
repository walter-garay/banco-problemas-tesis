import Image from 'next/image'
import principal from '../../../public/principal.svg'

export default function LandingPage({}) {
    return (
        <>  
            <header className="px-10 h-full flex flex-col pt-6">
                <nav className="flex justify-between">
                    <h1 className='font-semibold text-cyan-600'>
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
                            <a href="/registro">Registrarse</a>
                        </li>
                        <li >
                            <a href="/login" className="bg-cyan-600 text-white px-4 py-1 rounded-2xl">Ingresar</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center h-full gap-x-24 mx-12">
                    <div className='max-w-[1080]'>
                        <h1 className='text-6xl font-semibold'>
                            Banco de Necesidades <span className='text-cyan-700 text-8xl'>UDH</span>
                        </h1>
                        <p className='text-2xl'>
                            Deja en evidencia un problema que te aqueje para que nosotros como universidad lo solucionemos.
                        </p>
                    </div>
                        <Image
                            src={principal}
                            width={500}
                            height={500}
                            alt='principal image'
                            >
                        </Image>
                    
                </div>
            </header>
            <main>
                
                
            </main>
        </>
        
    )
}