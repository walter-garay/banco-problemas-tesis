import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
import NImage from 'next/image';
import Innovacion from '../imgages/Innovacion.png';

export default function Login({}) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-3xl py-9 px-6 sm:px-9 fixed left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-xl shadow-sm
                border-4 border-solid ml-20">
                <div>
                    <h1 className="bold-heading" style={{ fontSize: '5.5em', marginBottom: '20px', fontFamily: 'sans-serif'}}>Banco<br />de Ideas</h1>
                    <p style={{ fontSize: '2.5em', marginBottom: '40px', fontFamily: 'unset'}}>Deja en evidencia un problema que te aqueje para que nosotros 
                        como universidad lo solucionemos.</p>
                    <p className="bold-heading " style={{ fontSize: '2em', marginBottom: '20px',fontFamily: 'sans-serif'}}>@MerakT _ devs</p>

                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '3em', marginLeft: '2px' }}>
                        <FaFacebook style={{ marginRight: '10px' }} />
                        <BsInstagram style={{ marginRight: '10px' }} />
                        <FaTwitterSquare style={{ marginRight: '10px' }} />
                        <FaLinkedin />
                    </div>
                </div>
            </div>

            <div>
                <NImage src={Innovacion} alt="Descripción de la imagen"/>
            </div>

            <div className="flex items-center h-screen ml-200">
                <Link href="/login" passHref={true} legacyBehavior={true}>
                    <button className="text-x1 mr-5 bg-green-700 hover:bg-green-900 text-white font-bold py-5 px-7 rounded shadow-md focus:outline-none focus:shadow-outline-green active:bg-green-900">
                        Iniciar Sesión
                    </button>
                </Link>

                <Link href="/registro" passHref={true} legacyBehavior={true}>
                    <button className="text-x1 bg-green-700 hover:bg-green-900 text-white font-bold py-5 px-7 rounded shadow-md focus:outline-none focus:shadow-outline-green active:bg-green-900">
                        Registrarse
                    </button>
                </Link>
            </div>
        </div>
    )
}