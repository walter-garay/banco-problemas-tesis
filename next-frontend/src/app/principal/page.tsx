import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import NImage from 'next/image';
import Innovacion from '../imgages/Innovacion.png';
import Button from "../ui/Button";
import image from "@/images/Innovacion.png"

export default function Login({}) {
    return (
        <div className="flex items-center h-full mx-12 pt-4">
            <div className="bg-white rounded-3xl shadow-md p-10">
                <div>
                    <h1 className="bold-heading" style={{ fontSize: '5.5em', marginBottom: '20px', fontFamily: 'sans-serif'}}>Banco<br />de Ideas</h1>
                    <p style={{ fontSize: '2.5em', marginBottom: '40px', fontFamily: 'unset'}}>
                        Deja en evidencia un problema que te aqueje para que nosotros 
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

            <div className="flex flex-col gap-y-2 items-center justify-center h-full w-full ">
                <Image
                    src={image}
                    alt="Innovacion"
                    width={400}
                    height={300}
                ></Image>

                <Link href="/login" passHref={true} legacyBehavior={true}>
                    <Button 
                        className="text-x1 bg-green-600 hover:bg-green-700 w-64 text-white font-bold py-5 px-7 rounded-3xl shadow-full">
                        Iniciar Sesión
                    </Button>
                </Link>

                <Link href="/registro" passHref={true} legacyBehavior={true}>
                    <Button 
                        className="text-x1 bg-green-600 hover:bg-green-700 w-64 text-white font-bold py-5 px-7 rounded-3xl shadow-full">
                        Crear cuenta
                    </Button>
                </Link>
            </div>
        </div>
    )
}