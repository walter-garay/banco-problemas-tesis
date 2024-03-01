'use client'

import { Input, LabelWithInput } from "@/components/ui/input"
import React, { useState } from 'react';
import Link from 'next/link';
import { IoPersonAddSharp } from "react-icons/io5";
import { ImLibrary } from "react-icons/im";
import { createItem } from "@/api/apiService";
import validator from 'validator';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Registro({}) {

    // REGISTRE USERS
    const [newUser, setNewUser] = useState({
        nombre: '',
        apellidos: '',
        password1: '',
        password2: '',
        phone: '',
        email:'',
        role: '',
        ruc: '',
        razon_social: '',

        //Otros campos
        emailError: '',
        phoneError:'',
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        //////////////////////////EMAIL INFO////////////////////////////////

        if (name === 'email' && value.length >= 3) {
            if (!validator.isEmail(value)) {
              setNewUser((prevUser) => ({
                ...prevUser,
                [name]: value,
                emailError: 'Correo electrónico no válido',
              }));
              return;
            }
          }
          // Limpiar el error si el usuario modifica el campo
            if (name === 'email') {
                setNewUser((prevUser) => ({
                ...prevUser,
                emailError: '',
                }));
            }
        //////////////////////////////////////////////////////////////////////

        //////////////////////VALIDATOR PHONE/////////////////////////////////
        if (name === 'phone') {
            if (!isValidPhone(value)) {
              setNewUser((prevUser) => ({
                ...prevUser,
                [name]: value,
                phoneError: 'Número de teléfono no válido',
              }));
            } else {
              // Limpiar el error si el usuario modifica el campo
              setNewUser((prevUser) => ({
                ...prevUser,
                phoneError: '',
              }));
            }
          }
        //////////////////////////////////////////////////////////////////////
        setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
    };
   
    //////////////////PHONE///////////////////////////////
    const isValidPhone = (phone: string) => {
        // Puedes utilizar una expresión regular para validar el formato del número de teléfono
        const phoneRegex = /^[0-9]{9}$/;
        return phoneRegex.test(phone);
    };

    ////////////////////////////POST///////////////////////////////////////////
    const handleSubmit = async () => {
        try {
            console.log('Usuario por crear:', newUser);

            const response = await createItem('api/auth/registration/', newUser, 
                {
                    'Content-Type': 'application/json',
                });
        
            console.log('Usuario creado:', response);

            setSuccessMessage('Usuario creado correctamente');
        } catch (error) {
            console.error('Error creando el usuario:', error);
        }
    };
    
    //////////////////PARA LA CONTRASEÑA/////////////////////////////
    const [showPwd, setShowPwd] = React.useState(false);
    const switchShown = () => setShowPwd(!showPwd);
    ////////////////////////////////////////////////////////////////

    /////////////////////PARA LOS FORMULARIOS///////////////////////////
    const [activeForm, setActiveForm] = useState('personaNatural');
    const handleFormSwitch = (formType: 'personaNatural' | 'institucion') => {
        setActiveForm(formType);
      };
    ////////////////////////////////////////////////////////////////////
    
    //////////////////PARA EL MENSAJE DEL USUARIO//////////////////
    const [successMessage, setSuccessMessage] = useState('');
    ///////////////////////////////////////////////////////////////
    return (
        
            <section className="flex items-center justify-center h-screen ">
                <div className="max-w-xs py-6 px-6 sm:px-5 mx-auto sm:mx-auto sm:max-w-md flex flex-col 
                items-center space-y-2 bg-white rounded-xl border-2 border-cyan-700">
                        <header className="flex flex-col items-center">
                            <h1 className="text-2xl mb-4">
                                Crear <span className="text-cyan-600">Cuenta</span> 
                            </h1>
                        </header>
                        
                        <nav className="flex items-center">
                            <ul className="flex flex-wrap justify-center">
                                <li className={`flex items-center mr-6 ${activeForm === 'personaNatural' ? 'text-blue-800 ' : 'text-gray-500'}`}>
                                    <IoPersonAddSharp className="mr-2"/>
                                    <Link href="" passHref={true} legacyBehavior={true}>
                                        <a className="text-blue-700 text-sm hover:text-red-600 active:text-red-600"
                                        onClick={() => handleFormSwitch('personaNatural')}>Persona Natural</a>
                                    </Link>
                                </li>

                                <li className={`flex items-center ${activeForm === 'institucion' ? 'text-blue-800 ' : 'text-gray-500'}`}>
                                    <ImLibrary className="mr-2"/>
                                    <Link href="" passHref={true} legacyBehavior={true}>
                                        <a className="text-blue-600 text-sm hover:text-red-600 active:text-red-600"
                                        onClick={() => handleFormSwitch('institucion')}>Institución privada/pública</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {activeForm === 'personaNatural' && (
                        <form className="space-y-4">    
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="nombre" label="Nombres">
                                        <Input className="h-10"
                                            id="nombre"
                                            type="text"
                                            placeholder="Erickson"
                                            name="nombre"
                                            value={newUser.nombre}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                </div>
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="apellido" label="Apellidos">
                                        <Input className="h-10"
                                            id="apellido"
                                            type="text"
                                            placeholder="Vasquez"
                                            name="apellidos"
                                            value={newUser.apellidos}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="email" label="Correo Electronico">
                                        <Input className="h-10"
                                            id="email"
                                            type="text"
                                            placeholder="example@gmail.com"
                                            name="email"
                                            value={newUser.email}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput>
                                    {newUser.emailError && <p className="text-red-500 text-sm">{newUser.emailError}</p>}
                                </div>

                                <div className="flex-1">
                                    <LabelWithInput htmlFor="phone" label="Telefóno">
                                        <Input className="h-10"
                                            id="phone"
                                            type="text"
                                            placeholder=""
                                            name="phone"
                                            value={newUser.phone}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                    {newUser.phoneError && <p className="text-red-500 text-sm">{newUser.phoneError}</p>}
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="password1" label="Contraseña">
                                        <Input className="h-10"
                                            id="paswword1"
                                            type="text"
                                            placeholder="********"
                                            name="password1"
                                            value={newUser.password1}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput>
                                </div>

                                <div className="flex-1">
                                    <LabelWithInput htmlFor="password2" label="Confirmar contraseña">
                                        <Input className="h-10"
                                            id="paswword2"
                                            type={showPwd ? 'text' : 'password'}
                                            placeholder="********"
                                            name="password2"
                                            value={newUser.password2}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput>

                                    <div className="flex justify-end mr-4 -mt-7" onClick={() => switchShown()}>
                                        {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.2rem"}>
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.2rem"}>
                                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                        </svg>} 
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                                <div className="flex-1 ">
                                    <LabelWithInput htmlFor="role" label="Rol">
                                        <Select onValueChange={(selectedRole) => handleInputChange({ target: { name: 'role', value: selectedRole } } as React.ChangeEvent<HTMLInputElement>)}>
                                        <SelectTrigger className="w-[180px] h-10">
                                            <SelectValue placeholder="Selecione un Rol" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectLabel>Tipo de rol</SelectLabel>
                                            <SelectItem value="p_natural">Persona Natural</SelectItem>
                                            <SelectItem value="admin">Admin</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                        </Select>
                                    </LabelWithInput>
                                </div>
                            </div>
                        </form>
                        )}


                        {activeForm === 'institucion' && (
                        <form className="space-y-3">    
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="nombre" label="Razón Social">
                                        <Input className="h-10"
                                            id="nombre"
                                            type="text"
                                            placeholder="Empresa de Erick"
                                            name="nombre"
                                            value={newUser.nombre}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                </div>
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="apellido" label="RUC">
                                        <Input className="h-10"
                                            id="apellido"
                                            type="text"
                                            placeholder="Vasquez"
                                            name="apellidos"
                                            value={newUser.apellidos}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                </div>
                            </div>

                            <div className="flex-1">
                                <LabelWithInput htmlFor="password1" label="Representante">
                                    <Input className="h-10"
                                        id="paswword1"
                                        type="text"
                                        placeholder="********"
                                        name="password1"
                                        value={newUser.password1}
                                        onChange={handleInputChange}
                                    />
                                </LabelWithInput>
                            </div>

                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="email" label="Correo Electronico">
                                        <Input className="h-10"
                                            id="email"
                                            type="text"
                                            placeholder="example@gmail.com"
                                            name="email"
                                            value={newUser.email}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput>
                                    {newUser.emailError && <p className="text-red-500 text-sm">{newUser.emailError}</p>}
                                </div>

                                <div className="flex-1">
                                    <LabelWithInput htmlFor="phone" label="Telefóno">
                                        <Input className="h-10"
                                            id="phone"
                                            type="text"
                                            placeholder=""
                                            name="phone"
                                            value={newUser.phone}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                    {newUser.phoneError && <p className="text-red-500 text-sm">{newUser.phoneError}</p>}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="email" label="Contraseña">
                                        <Input className="h-10"
                                            id="email"
                                            type="text"
                                            placeholder="example@gmail.com"
                                            name="email"
                                            value={newUser.email}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput>
                                    {newUser.emailError && <p className="text-red-500 text-sm">{newUser.emailError}</p>}
                                </div>

                                <div className="flex-1">
                                    <LabelWithInput htmlFor="password2" label="Confirmar contraseña">
                                        <Input className="h-10"
                                            id="paswword2"
                                            type={showPwd ? 'text' : 'password'}
                                            placeholder="********"
                                            name="password2"
                                            value={newUser.password2}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput>

                                    <div className="flex justify-end mr-4 -mt-7" onClick={() => switchShown()}>
                                        {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.2rem"}>
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.2rem"}>
                                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                        </svg>} 
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                                <div className="flex-1">
                                <LabelWithInput htmlFor="role" label="Rol">
                                    <Select onValueChange={(selectedRole) => handleInputChange({ target: { name: 'role', value: selectedRole } } as React.ChangeEvent<HTMLInputElement>)}>
                                    <SelectTrigger className="w-[180px] h-10">
                                        <SelectValue placeholder="Selecione un Rol" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>Tipo de rol</SelectLabel>
                                            <SelectItem value="gobierno">Entidad Pública</SelectItem>
                                            <SelectItem value="privado">Entidad Privada</SelectItem>
                                            <SelectItem value="emprendedor">Emprendedor</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </LabelWithInput>
                                </div>
                            </div>
                        </form>
                        )}

                        {successMessage && (
                            <div className="bg-black-300 p-3 rounded-md mt-4">
                                <p className="text-cyan-800 text-medium">{successMessage}</p>
                            </div>
                        )}

                        <div className="flex flex-col items-center space-y-2">
                            <button onClick={handleSubmit} className="bg-cyan-600 hover:bg-cyan-900 w-32
                             font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline-green active:bg-cyan-900">
                                <span className="text-white font-medium">Registrarse</span>
                            </button>

                            <div className="flex flex-col items-center justify-center">
                                <h1>¿Ya se encuentra registrado?</h1>
                                <a href="/login" className=" text-cyan-600 text-lg hover:text-red-800 active:text-red-800"> Iniciar Sesión</a>
                            </div>
                        </div>
                </div>
            </section>
    );
}

function setSuccessMessage(arg0: string) {
    throw new Error("Function not implemented.");
}

