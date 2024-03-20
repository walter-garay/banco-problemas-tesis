'use client'

import { Input, LabelWithInput } from "@/components/ui/input"
import React, { useState } from 'react';
import Link from 'next/link';
import { IoPersonAddSharp } from "react-icons/io5";
import { ImLibrary } from "react-icons/im";
import { createItem } from "@/api/apiService";
import { Stepper, Step,StepLabel } from '@mui/material';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export default function Registro({}) {

    // REGISTRE USERS
    const [newUser, setNewUser] = useState({
        nombre: '',
        apellidos: '',
        password1: '',
        password2: '',
        phone: '',
        username:'',
        role: '',
        ruc: '',
        razon_social: '',
        email: '',
        
    });
    


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'password1') {
            // Asignar el valor de password1 a password2
            setNewUser((prevUser) => ({
                ...prevUser,
                password1: value,
                password2: value,
            }));
        }

        if (name === 'email') {
            // Asignar el valor de email a username
            setNewUser((prevUser) => ({
                ...prevUser,
                email: value,
                username: value,
            }));
        }
    
        setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
        setPhoneTouched(true);
        setRucTouched(true);
        setPasswordTouched(true);
        setEmailTouched(true);
    };

    //////////////////////////////EMAIL////////////////////////////////////
    const [emailTouched, setEmailTouched] = useState(false);
    const isValidEmail = (email: string) => {
        // Validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    ///////////////////////////////////////////////////////////////////////

    //////////////////////////////PASSWORD/////////////////////////////////

    const [passwordTouched, setPasswordTouched] = useState(false);

    const isValidPassword = (password: string) => {
        // Verificar si la contraseña tiene al menos 4 caracteres
        return password.length >= 4; 
    };

    ///////////////////////////////////////////////////////////////////////

    //////////////////////////////RUC//////////////////////////////////////

    const [rucTouched, setRucTouched] = useState(false);

    const isValidRuc = (ruc: string) => {
        const rucRegex = /^[0-9]{11}$/;
            return rucRegex.test(ruc);
    };

    //////////////////////////////////////////////////////////////////////

    //////////////////////////////PHONE////////////////////////////////////

    const [phoneTouched, setPhoneTouched] = useState(false);

    const isValidPhone = (phone: string) => {
        // Puedes utilizar una expresión regular para validar el formato del número de teléfono
        const phoneRegex = /^[0-9]{9}$/;
            return phoneRegex.test(phone);
    };

    //////////////////////////////////////////////////////////////////////

    ////////////////////////////POST///////////////////////////////////////////
    const handleSubmit = async () => {
        try {

            console.log('Usuario por crear:', newUser);
            
            const response = await createItem('api/auth/registration/', newUser, 
                {
                    'Content-Type': 'application/json',
                },
                false);
            
        
            console.log('Usuario creado correctamente');

            window.location.href = '/login';

        } catch (error) {
            console.error('Error creando el usuario:', error);
        }
    };
    
    //////////////////PARA LA CONTRASEÑA/////////////////////////////
    const [showPwd, setShowPwd] = React.useState(false);
    const switchShown = () => setShowPwd(!showPwd);
    ////////////////////////////////////////////////////////////////
    
    const [activeStep, setActiveStep] = useState(1);

    const handleFormSwitch = (activeForm: string) => {
        setNewUser({
            nombre: '',
            apellidos: '',
            password1: '',
            password2: '',
            phone: '',
            username: '',
            role: '',
            ruc: '',
            razon_social: '',
            email: '',
            
        });
        setActiveForm(activeForm);
        setActiveStep(1); // Reinicia el paso cuando cambias de formulario
       
    };

    const [activeForm, setActiveForm] = useState('personaNatural');

    const handleNext = () => {
        // Asegúrate de que el siguiente paso esté dentro del rango de pasos válidos
        const nextStep = Math.min(activeStep + 1, 3);
        setActiveStep(nextStep);
    };

    const handlePrev = () => {
        // Asegúrate de que el paso anterior esté dentro del rango de pasos válidos
        const prevStep = Math.max(activeStep - 1, 1);
        setActiveStep(prevStep);
    };

    function shoowStep(step: any) {
        switch(activeForm) {
            case 'personaNatural':
                switch(step) {
                    case 1:
                        return (
                            <div className="space-y-3 flex flex-col items-center">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="nombre" label="Nombres">
                                        <Input className="h-10 rounded-full border-2 border-cyan-600 p-2 text-center"
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
                                        <Input className="h-10 rounded-full border-2 border-cyan-600 p-2 text-center"
                                            id="apellido"
                                            type="text"
                                            placeholder="Vasquez"
                                            name="apellidos"
                                            value={newUser.apellidos}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                </div>
                
                                <div className="justiy-center">
                                    <button className="rounded-full px-4 py-2 hover:bg-cyan-500 bg-cyan-600 text-white"
                                    onClick={handleNext}
                                    >
                                        <GrLinkNext className="text-xl"/>
                                    </button>
                                </div>
                            </div>
                        )
                    
                    case 2:
                        return (
                            <div className="space-y-3 flex flex-col items-center">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="phone" label="Telefóno">
                                        <Input className={`h-10 rounded-full border-2 p-2 text-center ${phoneTouched && !isValidPhone(newUser.phone) ? 'border-red-500' : 'border-cyan-600'}`}
                                            id="phone"
                                            type="text"
                                            placeholder="987987654"
                                            name="phone"
                                            value={newUser.phone}
                                            onChange={handleInputChange}
                                        />
                                        
                                    </LabelWithInput> 
                                
                                </div>

                                <div className="flex-1">
                                    <LabelWithInput htmlFor="role" label="Rol">
                                        <Select onValueChange={(selectedRole) => handleInputChange({ target: { name: 'role', value: selectedRole } } as React.ChangeEvent<HTMLInputElement>)}>
                                            <SelectTrigger className="w-[200px] h-11 rounded-full border-2 border-cyan-600 p-2 flex-1 ">
                                                <SelectValue placeholder="Selecione un Rol" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Tipo de rol</SelectLabel>
                                                        <SelectItem value="p_natural">Persona Natural</SelectItem>
                                                        <SelectItem value="emprendedor">Emprendedor</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </LabelWithInput>
                                </div>

                                <div className="flex justify-center space-x-3">
                                    <div className="justiy-center">
                                        <button className=" px-4 py-2 "
                                        onClick={handlePrev}
                                        >
                                            <GrLinkPrevious className="text-xl hover:text-red-600 active:text-red-600"/>
                                        </button>
                                    </div>

                                    <div className="justiy-center">
                                        <button className="rounded-full px-4 py-2 hover:bg-cyan-500 bg-cyan-600 text-white"
                                        onClick={handleNext}
                                        >
                                            <GrLinkNext className="text-xl"/>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    
                    case 3: 
                        return (
                            <div className="space-y-3 flex flex-col items-center">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="email" label="Correo Electronico">
                                        <Input className={`h-10 rounded-full border-2 p-2 text-center ${emailTouched && !isValidEmail(newUser.email) ? 'border-red-500' : 'border-cyan-600'}`}
                                            id="email"
                                            type="text"
                                            placeholder="example@gmail.com"
                                            name="email"
                                            value={newUser.username}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput>
                                    
                                </div>

                                <div className="flex-1">
                                    <LabelWithInput htmlFor="password1" label="Contraseña">
                                        <Input className={`h-10 rounded-full border-2 p-2 text-center ${passwordTouched && !isValidPassword(newUser.password1) ? 'border-red-500' : 'border-cyan-600'}`}
                                            id="password1"
                                            type={showPwd ? 'text' : 'password'}
                                            placeholder="********"
                                            name="password1"
                                            value={newUser.password1}
                                            onChange={handleInputChange}
                                        />
                                            <div className="flex w-full h-0 justify-end -mt-16 mb-2 pr-4"  onClick={() => switchShown()}>
                                                {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.2rem"}>
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

                                <div className="justiy-center">
                                    <button className=" px-4 py-2 "
                                    onClick={handlePrev}
                                    >
                                        <GrLinkPrevious className="text-xl hover:text-red-600 active:text-red-600"/>
                                    </button>
                                </div>

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
                        )
                    
                }

                break;

            case 'institucion':
                switch(step) {
                    case 1:
                        return (
                            <div className="space-y-3 flex flex-col items-center">
                                <div className="flex-1">
                                    <LabelWithInput htmlFor="nombre" label="Nombres">
                                        <Input className="h-10 rounded-full border-2 border-cyan-600 p-2 text-center"
                                            id="nombre"
                                            type="text"
                                            placeholder="Cristian"
                                            name="nombre"
                                            value={newUser.nombre}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                    
                                </div>

                                <div className="flex-1">
                                    <LabelWithInput htmlFor="apellidos" label="Apellidos">
                                        <Input className="h-10 rounded-full border-2 border-cyan-600 p-2 text-center"
                                            id="apellidos"
                                            type="apellidos"
                                            placeholder=" Garay Ortiz"
                                            name="apellidos"
                                            value={newUser.apellidos}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                    
                                </div>

                                <div className="flex-1">
                                    <LabelWithInput htmlFor="phone" label="Telefóno">
                                        <Input className={`h-10 rounded-full border-2 p-2 text-center ${phoneTouched && !isValidPhone(newUser.phone) ? 'border-red-500' : 'border-cyan-600'}`}
                                            id="phone"
                                            type="text"
                                            placeholder="987987654"
                                            name="phone"
                                            value={newUser.phone}
                                            onChange={handleInputChange}
                                        />
                                    </LabelWithInput> 
                                    
                                </div>

                                <div className="justiy-center">
                                    <button className="rounded-full px-4 py-2 hover:bg-cyan-500 bg-cyan-600 text-white"
                                    onClick={handleNext}
                                    >
                                        <GrLinkNext className="text-xl"/>
                                    </button>
                                </div>
                            </div>
                        )
                    
                        case 2:
                            return (
                                <div className="space-y-3 flex flex-col items-center">
                                    <div className="flex-1">
                                        <LabelWithInput htmlFor="razon_social" label="Razón Social">
                                            <Input className="h-10 rounded-full border-2 border-cyan-600 p-2 text-center"
                                                id="razon_social"
                                                type="text"
                                                placeholder=""
                                                name="razon_social"
                                                value={newUser.razon_social}
                                                onChange={handleInputChange}
                                                />
                                        </LabelWithInput> 
                                    </div>
                                    <div className="flex-1">
                                        <LabelWithInput htmlFor="ruc" label="RUC">
                                            <Input className={`h-10 rounded-full border-2 p-2 text-center ${rucTouched && !isValidRuc(newUser.ruc) ? 'border-red-500' : 'border-cyan-600'}`}
                                                id="ruc"
                                                type="text"
                                                placeholder=""
                                                name="ruc"
                                                value={newUser.ruc}
                                                onChange={handleInputChange}
                                            />
                                        </LabelWithInput> 
                                    </div>

                                    <div className="flex-1">
                                        <LabelWithInput htmlFor="role" label="Rol">
                                            <Select onValueChange={(selectedRole) => handleInputChange({ target: { name: 'role', value: selectedRole } } as React.ChangeEvent<HTMLInputElement>)}>
                                                <SelectTrigger className="w-[200px] h-11 rounded-full border-2 border-cyan-600 p-2 text-center">
                                                    <SelectValue placeholder="Selecione un Rol" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Tipo de rol</SelectLabel>
                                                            <SelectItem value="empresa">Empresa Privada</SelectItem>
                                                            <SelectItem value="ong">ONG</SelectItem>
                                                            <SelectItem value="gobierno">Empresa Pública</SelectItem>
                                                            <SelectItem value="vri">VRI</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </LabelWithInput>
                                    </div>

                                    <div className="flex justify-center space-x-3">
                                        <div className="justiy-center">
                                            <button className=" px-4 py-2 "
                                            onClick={handlePrev}
                                            >
                                                <GrLinkPrevious className="text-xl hover:text-red-600 active:text-red-600"/>
                                            </button>
                                        </div>

                                        <div className="justiy-center">
                                            <button className="rounded-full px-4 py-2 hover:bg-cyan-500 bg-cyan-600 text-white"
                                            onClick={handleNext}
                                            >
                                                <GrLinkNext className="text-xl"/>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                        )

                        case 3: 
                            return (
                                <div className="space-y-3 flex flex-col items-center">
                                    <div className="flex-1">
                                        <LabelWithInput htmlFor="email" label="Correo Electronico">
                                            <Input className={`h-10 rounded-full border-2 p-2 text-center ${emailTouched && !isValidEmail(newUser.email) ? 'border-red-500' : 'border-cyan-600'}`}
                                                id="email"
                                                type="text"
                                                placeholder="example@gmail.com"
                                                name="email"
                                                value={newUser.username}
                                                onChange={handleInputChange}
                                            />
                                        </LabelWithInput>
                                        
                                    </div>

                                    <div className="flex-1">
                                        <LabelWithInput htmlFor="password1" label="Contraseña">
                                            <Input className={`h-10 rounded-full border-2 p-2 text-center ${passwordTouched && !isValidPassword(newUser.password1) ? 'border-red-500' : 'border-cyan-600'}`}
                                                id="password1"
                                                type={showPwd ? 'text' : 'password'}
                                                placeholder="********"
                                                name="password1"
                                                value={newUser.password1}
                                                onChange={handleInputChange}
                                            />
                                            
                                            <div className="flex w-full h-0 justify-end -mt-16 mb-2 pr-4"  onClick={() => switchShown()}>
                                                {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.2rem"}>
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

                                    <div className="justiy-center">
                                        <button className=" px-4 py-2 "
                                        onClick={handlePrev}
                                        >
                                            <GrLinkPrevious className="text-xl hover:text-red-600 active:text-red-600"/>
                                        </button>
                                    </div>

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
                            )
                }

                break;
            }
        }
        
    return (
        
            <section className="flex items-center justify-center h-screen bg-slate-100 w-scree ">
                <div className="max-w-xs py-8 sm:px-5  xl:max-w-2xl mx-auto sm:mx-auto sm:min-w-80 flex flex-col 
                    items-center space-y-2 bg-white shadow-lg rounded-xl border-2 border-cyan-600">
                        <header className="flex flex-col items-center">
                            <h1 className="text-2xl mb-4">
                                Crear <span className="text-cyan-600">Cuenta</span> 
                            </h1>
                        </header>

                        
                        <nav className="flex items-center">
                            <ul className="flex flex-col items-center justify-center">
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

                        <br/>
                        <Stepper activeStep={activeStep} orientation="horizontal">
                                <Step className="mb-4">
                                    <StepLabel></StepLabel>
                                </Step>
                                <Step className="mb-4">
                                    <StepLabel></StepLabel>
                                </Step>
                                <Step className="mb-4">
                                    <StepLabel></StepLabel>
                                </Step>
                        </Stepper>
                        

                        { shoowStep(activeStep) }
                </div>
            </section>
    );
}
