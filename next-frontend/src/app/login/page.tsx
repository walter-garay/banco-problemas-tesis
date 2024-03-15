'use client'

import { createItem } from "@/api/apiService";
import { Input, LabelWithInput } from "@/components/ui/input"
import React, { useState } from "react";
import Image from 'next/image'
import login from '../../../public/images/login.svg'


export default function Login({}) {
    const [user, setNewLogin] = useState({
        email:'',
        password:'',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
    };

    // crear funcion para mi boton Iniciar
    const handleSubmit = async () => {
        try {
            console.log('Login:', user);

            const response = await createItem('api/authlogin/', user, 
                {
                    'Content-Type': 'application/json',
                },
                false
            );
        
            console.log('Login creado:', response);

            console.log('Token:', response.key);
            localStorage.setItem('token', response.key);

            console.log('ID:', response.user.id);
            localStorage.setItem('id', response.user.id);

            console.log('Nombre:', response.user.first_name);
            localStorage.setItem('first_name', response.user.first_name);

            console.log('Email:', response.user.email);
            localStorage.setItem('email', response.user.email);

            console.log('Role:', response.user.role);
            localStorage.setItem('role', response.user.role);

            // EN CASO SEA EMPRESA
            console.log('Razon Social:', response.user.razon_social);
            localStorage.setItem('razon_social', response.user.razon_social);
            
            window.location.href = '/problemas';

        } catch (error) {
            console.error('Error creando el login:', error);
        }
    };

    const [showPwd, setShowPwd] = React.useState(false);
    const switchShown = () => setShowPwd(!showPwd);

    return (
        <> 
            <div className="flex items-center justify-center h-full bg-slate-100 w-full">
                <section className="sm:flex-row sm:px-9 sm:py-9 sm:max-w-4xl flex-1 flex flex-col items-center justify-center max-w-3xl py-6 px-8 bg-white shadow-lg h-3/4 sm:rounded-3xl rounded-2xl">
                    <aside className="w-full mb-4 sm:w-1/2 md:mr-4 flex items-center justify-center flex-row-reverse sm:flex-col">
                        <h2 className="flex justify-center text-7xl font-semibold text-black-600 mr-8 sm:mr-1 mt-2 sm:mt-0">U<span className="text-7xl font-semibold text-cyan-600">D</span> H</h2>
                        <Image
                            src={login}
                            width={100}
                            alt='login image'
                            className='w-3/6 sm:w-5/6 h-auto'
                        ></Image>
                    </aside>

                    <div className="sm:mx-auto sm:max-w-2xl sm:px-9 sm:py-6 max-w-2xl py-4 px-2 mx-auto flex flex-col items-center space-y-1 bg-white rounded-xl gap-y-4 border-2 border-cyan-700">
                        <header className="flex flex-col items-center">
                            <h1 className="text-2xl mb-4 ">
                                Inicio <span className="text-cyan-600">de Sesión</span> 
                            </h1>
                        </header>
                        <form>
                            <div>
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="email" label="Correo Electrónico">
                                        <Input className="h-10 rounded-full border-2 border-cyan-600 p-2 text-center"
                                            id="email"
                                            type="text"
                                            placeholder=""
                                            name="email"
                                            value={user.email}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                </div>

                                <br />

                                <div className="flex-1">  
                                    <LabelWithInput htmlFor="password" label="Contraseña" >
                                        <Input className="h-10 rounded-full border-2 border-cyan-600 p-2 text-center"
                                            id="password"
                                            type={showPwd ? 'text' : 'password'}
                                            placeholder="********"
                                            name="password"
                                            value={user.password}
                                            onChange={handleInputChange}
                                        />
                                        <div className="flex w-full h-0 justify-end -mt-16 mb-2 pr-4" onClick={() => switchShown()}>
                                            {showPwd ? 
                                            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.2rem"}>
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg> : 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.2rem"}>
                                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                            </svg>} 
                                        </div>
                                    </LabelWithInput>              
                                </div>
                            </div>  
                        </form>

                        <div className="flex items-center">
                            <button onClick={handleSubmit} className="sm:py-2 sm:px-4 sm:w-32 sm:rounded-full bg-cyan-600 hover:bg-cyan-900 w-30 font-bold py-1 px-2 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green active:bg-cyan-900">
                                <span className="text-white font-medium">Iniciar</span>
                            </button>
                        </div>
                        
                        <div className="flex flex-col items-center">
                            <a className="justify-center">¿No tienes una cuenta?</a>
                            <a href="/registro" className=" text-cyan-600"> Registrarse</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}