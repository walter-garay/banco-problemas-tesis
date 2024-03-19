import React from "react";
import { TbLogout } from "react-icons/tb";
export default function Logout() {

  const handleLogout = () => {
    // Limpiar los datos de autenticación almacenados en localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("first_name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("razon_social");

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "/principal";
  };

  return (
    
    <button onClick={handleLogout} className="flex text-black items-center justify-center mt-2 text-sm hover:text-red-600 active:text-red-600 ">
      <TbLogout className="text-2xl"/>
      Cerrar Sesión
    </button>
  );
}