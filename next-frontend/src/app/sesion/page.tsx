"use client"
import { useState } from 'react';
import Button from '../ui/Button';

const DialogComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
    setIsOpen(true);
    };

    const closeDialog = () => {
    setIsOpen(false);
    };

    return (
    <div>
        <Button onClick={openDialog} className='bg-red-200 w-24'>Abrir Diálogo</Button>
        {isOpen && (
        <div className="bg-white shadow-sm rounded-md 
            flex items-center justify-center" >
            <div id='content' className='w-full text-center my-6 mx-6'>
                <h1 className='font-bold text-2xl'>Información del solicitante</h1>
                <p>Contenido del diálogo...</p>
    
                <div>
                    <Button onClick={closeDialog} className='bg-blue-600 
                        w-32 h-10 text-white rounded-md'>Cerrar
                    </Button>
                </div>
                    
            </div>
        </div>
        )}
    </div>
    );
};

export default DialogComponent;
