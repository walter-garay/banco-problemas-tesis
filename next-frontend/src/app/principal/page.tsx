import Image from 'next/image'
import principal from '../../../public/images/principal.svg'
import { FaUsers } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";

export default function LandingPage({}) {
    return (
        <>  
            <div className="bg-slate-100">
                <header className="px-5 sm:px-10 h-full flex flex-col pt-7">
                    <nav className="flex justify-between items-center px-2 sm:px-6">
                        <h1 className='text-lg sm:text-xl font-semibold text-cyan-600'>
                            @MerakT.dev
                        </h1>
                        
                        <ul className="hidden sm:flex gap-x-2 sm:gap-x-5 items-center">
                            <li>
                                <a href="#">
                                    <i className="pi pi-github text-xl transition-transform transform hover:scale-110 text-gray-700 hover:text-orange-600"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="pi pi-facebook text-xl transition-transform transform hover:scale-110 text-gray-700 hover:text-blue-600"></i>
                                </a>                        
                            </li>
                            <li>
                                <a href="#">
                                    <i className="pi pi-instagram text-xl transition-transform transform hover:scale-110 text-gray-700 hover:text-pink-600"></i>
                                </a>                        
                            </li>
                            <li>
                                <a href="#">
                                    <i className="pi pi-linkedin text-xl transition-transform transform hover:scale-110 text-gray-700 hover:text-cyan-600"></i>
                                </a>                        
                            </li>
                        </ul>
                        
                        <ul className="flex gap-x-2 sm:gap-x-2 ">
                            <li>
                                <a href="/registro" className='hover:bg-white px-4 py-2 rounded-2xl transition-all' >Registrarse</a>
                            </li>
<<<<<<< HEAD
                            <li>
                                <a href="/login" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1 rounded-2xl transition-all">Ingresar</a>
=======
                            <li >
                                <a href="/login" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-2xl transition-all">Ingresar</a>
>>>>>>> d3a39f8e20f23c00b4456655f8f41bb142f08291
                            </li>
                        </ul>
                    </nav>

                    <div className="flex flex-col sm:flex-row items-center h-full gap-y-6 sm:gap-x-32 sm:mx-12 mt-6">
                        <div className='flex flex-col sm:w-full lg:w-1/2 gap-y-6'>
                            <h1 className='text-4xl sm:text-6xl font-semibold text-gray-700'>
                                Banco de Necesidades <span className='text-cyan-600 text-4xl sm:text-6xl'>UDH</span>
                            </h1>
                            <p className='text-base sm:text-lg'>
                                Deja en evidencia un problema que te aqueje para que nosotros como universidad lo solucionemos.
                            </p>
<<<<<<< HEAD
                            <a href="#main-section" className="bg-cyan-600 hover:bg-cyan-700 font-semibold text-white rounded-2xl text-center sm:w-44 py-2">Más información...</a>
=======
                            <a href="#main-section" className="bg-cyan-600 hover:bg-cyan-700 font-semibold text-white rounded-2xl text-center sm:w-44 py-2">Más información</a>
>>>>>>> d3a39f8e20f23c00b4456655f8f41bb142f08291
                        </div>
                        <Image
                            src={principal}
                            alt='principal image'
                            className='w-full sm:w-1/2'
                        />
                    </div>
                </header>
<<<<<<< HEAD

                <main id="main-section" className='pt-10 sm:pt-20 pb-14 px-6 sm:px-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                        <div className='py-8 px-6 sm:px-8 bg-white shadow-lg md:h-80 lg:h-96 xl:h-80 rounded-3xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform border-2 border-cyan-600'>
                            <div className='flex flex-col items-center justify-center'>
                                <FaUsers className='text-5xl mb-4'/>
                                <section>
                                    <h2 className='text-center text-base mb-6 font-bold'>PASO 1: Regístrate</h2>
                                    <p className='text-sm md:text-base break-words overflow-auto text-center'>
                                        Regístrate en nuestra plataforma proporcionando la información necesaria.
                                        ¡Solo toma unos minutos!
                                    </p>
                                </section>
                            </div>
                        </div>

                        <div className='py-8 px-6 sm:px-8 bg-white shadow-lg md:h-80 lg:h-96 xl:h-80 rounded-3xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform border-2 border-cyan-600'>
                            <div className='flex flex-col items-center justify-center'>
                                <RiLoginCircleFill className='text-5xl mb-4'/>
                                <section>
                                    <h2 className='text-center text-base mb-6 font-bold'>PASO 2: Inicia Sesión</h2>
                                    <p className='text-sm md:text-base break-words overflow-auto text-center'>
                                        Inicia sesión con tu nueva cuenta. Accede fácilmente a todas las funciones y características.
                                    </p>
                                </section>
                            </div>
                        </div>

                        <div className='py-8 px-6 sm:px-8 bg-white shadow-lg md:h-80 lg:h-96 xl:h-80 rounded-3xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform border-2 border-cyan-600'>
                            <div className='flex flex-col items-center justify-center'>
                                <MdReportProblem className='text-5xl mb-4'/>
                                <section>
                                    <h2 className='text-center text-base mb-6 font-bold'>PASO 3: Comparte tu Problema</h2>
                                    <p className='text-sm md:text-base break-words overflow-auto text-center'>
                                        Comparte los problemas que enfrentas en tu entorno. 
                                        ¡La Universidad está aquí para ayudar a encontrar soluciones!
                                    </p>
                                </section>
                            </div>
=======
    
                <main id="main-section" className='pt-10 sm:pt-20 pb-14 h-screen flex items-center justify-center'>
                    <div className='flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-14 space-y-6 sm:space-y-0 max-w-full'>

                        <div className='flex-1 max-w-sm py-20 px-6 sm:px-9 bg-white shadow-lg h-3/4 md:flex-row rounded-3xl
                            hover:shadow-2xl transform hover:-translate-y-2 transition-transform border-2 border-cyan-600'>
                                <div className='flex flex-col items-center justify-center'>
                                    <FaUsers className='text-5xl mb-4'/>
                                    <section>
                                        <h2 className='text-center text-base mb-10 font-bold'>PASO 1: Regístrate</h2>
                                        <p className='break-words overflow-auto text-center '>
                                            Regístrate en nuestra plataforma proporcionando la información necesaria.
                                            ¡Solo toma unos minutos!
                                        </p>
                                    </section>
                                </div>
                        </div>

                        <div className='flex-1 max-w-sm py-20 px-6 sm:px-9 bg-white shadow-lg h-3/4 md:flex-row rounded-3xl 
                            hover:shadow-2xl transform hover:-translate-y-2 transition-transform border-2 border-cyan-600'>
                                <div className='flex flex-col items-center justify-center'>
                                    <RiLoginCircleFill className='text-5xl mb-4'/>
                                    <section>
                                        <h2 className='text-center text-base mb-10 font-bold'>PASO 2: Inicia Sesión</h2>
                                        <p className='break-words overflow-auto text-center'>
                                            Inicia sesión con tu nueva cuenta. Accede fácilmente a todas las funciones y características.
                                        </p>
                                    </section>
                                </div>
                        </div>

                        <div className='flex-1 max-w-sm py-20 px-6 sm:px-9 bg-white shadow-lg h-3/4 md:flex-row rounded-3xl
                            hover:shadow-2xl transform hover:-translate-y-2 transition-transform border-2 border-cyan-600'>
                                <div className='flex flex-col items-center justify-center'>
                                    <MdReportProblem className='text-5xl mb-4'/>
                                    <section>
                                        <h2 className='text-center text-base mb-10 font-bold'>PASO 3: Comparte tu Problema</h2>
                                        <p className='break-words overflow-auto text-center'>
                                            Comparte los problemas que enfrentas en tu entorno o negocio y 
                                            la universidad te ayudará a encontrar soluciones.
                                        </p>
                                    </section>
                                </div>
>>>>>>> d3a39f8e20f23c00b4456655f8f41bb142f08291
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}