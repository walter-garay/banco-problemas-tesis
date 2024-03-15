import React from "react";

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
    <button onClick={handleLogout} className="text-red-600 items-end justify-end">
      Cerrar Sesión
    </button>
  );
}