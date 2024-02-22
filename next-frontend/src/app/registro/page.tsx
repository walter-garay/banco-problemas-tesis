'use client'

import { Input, InputWithLabel, LabelWithInput } from "@/components/ui/input"
import React, { useState } from 'react';
import Link from 'next/link';
import { IoPersonAddSharp } from "react-icons/io5";
import { ImLibrary } from "react-icons/im";
import { createItem } from "@/api/apiService";
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
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    // crear funcion para mi boton registrar
    const handleSubmit = async () => {
        try {
            console.log('Usuario por crear:', newUser);

            const response = await createItem('api/auth/registration/', newUser, 
                {
                    'Content-Type': 'application/json',
                });
        
            console.log('Usuario creado:', response);
        } catch (error) {
            console.error('Error creando el usuario:', error);
        }
    };
    
    return (

        <div className="flex items-center justify-center h-screen">
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

                <div className="py-4 gap-y-6 flex flex-col">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                        <div className="w-full sm:w-1/2">
                            <LabelWithInput htmlFor="nombre" label="Nombres">
                                <Input
                                    id="nombre"
                                    type="text"
                                    placeholder="Erickson"
                                    name="nombre"
                                    value={newUser.nombre}
                                    onChange={handleInputChange}
                                />
                            </LabelWithInput> 
                        </div>
                        <div className="w-full sm:w-1/2">
                            <LabelWithInput htmlFor="apellido" label="Apellidos">
                                <Input
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
                        <div className="w-full sm:w-1/2">
                            <LabelWithInput htmlFor="email" label="Correo Electronico">
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="example@gmail.com"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleInputChange}
                                />
                            </LabelWithInput>
                        </div>

                        <div className="w-full sm:w-1/2">
                            <LabelWithInput htmlFor="phone" label="Telefóno">
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder=""
                                    name="phone"
                                    value={newUser.phone}
                                    onChange={handleInputChange}
                                />
                            </LabelWithInput> 
                        </div>
                    </div>

                    <div className="w-full sm:w-full ">
                        <LabelWithInput htmlFor="password1" label="Contraseña">
                            <Input
                                id="paswword1"
                                type="text"
                                placeholder="********"
                                name="password1"
                                value={newUser.password1}
                                onChange={handleInputChange}
                            />
                        </LabelWithInput>
                        
                    </div>
                    <div className="w-full sm:w-full ">

                         <LabelWithInput htmlFor="password2" label="Confirmar contraseña">
                            <Input
                                id="paswword2"
                                type="text"
                                placeholder="********"
                                name="password2"
                                value={newUser.password2}
                                onChange={handleInputChange}
                            />
                        </LabelWithInput>
                    </div>

                    <LabelWithInput htmlFor="role" label="Rol">
                        <Select onValueChange={(selectedRole) => handleInputChange({ target: { name: 'role', value: selectedRole } } as React.ChangeEvent<HTMLInputElement>)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Roles</SelectLabel>
                            <SelectItem value="p_natural">Natural</SelectItem>
                            <SelectItem value="emprendedor">Emprendedor</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </LabelWithInput>
                </div>

                <div className="flex items-center">
                    <button onClick={handleSubmit} className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline-green active:bg-green-900">
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