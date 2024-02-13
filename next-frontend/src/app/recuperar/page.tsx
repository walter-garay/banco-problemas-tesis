import { InputWithLabel } from "@/components/ui/input"
import Link from 'next/link';

export default function Login({}) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-3xl py-9 px-6 sm:px-9 mx-auto sm:mx-auto sm:max-w-2xl flex flex-col items-center space-y-1 bg-white rounded-xl shadow-sm">
                <div className="flex flex-col items-center mt-6">
                    <h1 className="text-3xl mb-8">
                        Recuperar <span className="text-green-600">Contraseña</span>
                    </h1>
                </div>

                <div className="w-full sm:w-full">
                <a>Correo Electronico</a>
                    <InputWithLabel 
                        id="title" label="Email" type="email"  
                        placeholder="davidcito@gmail.com" 
                    />
                </div>

                <div className="flex items-center">
                    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline-green active:bg-green-900">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}