import { InputWithLabel } from "@/components/ui/input"
import React from 'react';
import Link from 'next/link';
import { IoPersonAddSharp } from "react-icons/io5";
import { ImLibrary } from "react-icons/im";
// Asegúrate de importar correctamente tu componente InputWithLabel

export default function Registro({}) {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="max-w-3xl py-9 px-6 sm:px-9 mx-auto sm:mx-auto sm:max-w-2xl flex flex-col items-center space-y-2 bg-white rounded-xl shadow-sm">

                <div className="flex flex-col items-center mt-6">
                    <h1 className="text-3xl mb-8">
                        Crear <span className="text-green-600">Cuenta</span>
                    </h1>
                </div>

                <div className="flex items-center">
                    <div className="mr-2">
                        <IoPersonAddSharp />
                    </div>
                    <div className="mr-10">
                        <Link href="/registro" passHref={true} legacyBehavior={true}>
                            <a className=" text-blue-700">Persona Natural</a>
                        </Link>
                    </div>

                    <div className="mr-2">
                        <ImLibrary />
                    </div>
                    <div>
                        <Link href="/registroInstitucion" passHref={true} legacyBehavior={true}>
                            <a className=" text-blue-700">Institución privada/pública</a>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                    <div className="w-full sm:w-1/2">
                        <a>Nombres</a>
                        <InputWithLabel 
                            id="title" label="Nombre y Apellidos" type="text"  
                            placeholder="Erick" 
                        /> 
                    </div> 

                    <div className="w-full sm:w-1/2">
                        <a>Apellidos</a>
                        <InputWithLabel 
                            id="title" label="Apellido" type="text"  
                            placeholder="Vasquez Rengifo" 
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                    <div className="w-full sm:w-1/2">
                        <a>Correo Electronico</a>
                        <InputWithLabel 
                            id="title" label="Email" type="email"  
                            placeholder="davidcito@gmail.com" 
                        />
                    </div>

                    <div className="w-full sm:w-1/2">
                        <a>Telefono</a>
                        <InputWithLabel 
                            id="title" label="Telefóno" type="text"  
                            placeholder="" 
                        />
                    </div>
                </div>

                <div className="w-full sm:w-full ">
                    <a>Contraseña</a>
                    <InputWithLabel 
                        id="title" label="Contraseña" type="password"  
                        placeholder="*******" 
                    />
                </div>

                <div className="flex items-center ">
                    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline-green active:bg-green-900">
                        Registrar
                    </button>
                </div>

                <div className="flex items-center">
                    <h1 className="mb-0 mr-3 mt-4">Ya estás registrado?</h1>
                    <Link href="/login" passHref={true} legacyBehavior={true}>
                        <a className="underline text-green-900 mt-4">Acceder</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}