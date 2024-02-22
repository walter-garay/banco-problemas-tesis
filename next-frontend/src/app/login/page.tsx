'use client'

import { createItem } from "@/api/apiService";
import { Input, InputWithLabel, LabelWithInput } from "@/components/ui/input"
import Link from 'next/link';
import { useState } from "react";

export default function Login({}) {
    const [user, setNewLogin] = useState({
        email:'',
        password:'',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
    };

    // crear funcion para mi boton registrar
    const handleSubmit = async () => {
        try {
            console.log('Login:', user);

            const response = await createItem('api/authlogin/', user, 
                {
                    'Content-Type': 'application/json',
                });
        
            console.log('Login creado:', response);

            const token = await response.json();
            localStorage.setItem('token', token);

        } catch (error) {
            console.error('Error creando el login:', error);
        }


    };



    return (
        
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-3xl py-9 px-6 sm:px-9 mx-auto sm:mx-auto sm:max-w-2xl 
                flex flex-col items-center space-y-1 bg-white rounded-xl shadow-sm gap-y-4">
                <div className="flex flex-col items-center ">
                    <h1 className="text-3xl mb-8">
                        Iniciar <span className="text-green-600">Sesión</span>
                    </h1>
                </div>
                <div className="w-full sm:w-full ">
                        <LabelWithInput htmlFor="email" label="Correo Electronio">
                            <Input
                                id="email"
                                type="text"
                                placeholder=""
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        </LabelWithInput> 
                </div>

                <div className="w-full sm:w-full ">
                        <LabelWithInput htmlFor="password" label="Contraseña">
                            <Input
                                id="paswword"
                                type="password"
                                placeholder="********"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                            />
                        </LabelWithInput> 
                </div>

                <div className="flex items-center">
                    <button onClick={handleSubmit} className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline-green active:bg-green-900">
                        Iniciar
                    </button>
                </div>

                <div className="flex items-center">
                    <h1 className="mb-0 mr-3 mt-4">Olvidaste tu Contraseña?</h1>
                    <Link href="/recuperar" passHref={true} legacyBehavior={true}>
                        <a className="underline text-green-900 mt-4">Ingrese Aquí</a>
                    </Link>
                </div>

            </div>
        </div>
    );
}