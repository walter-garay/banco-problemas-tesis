import { getItemById, createItem } from "@/api/apiService";
import { User, LoginBody } from "@/models/user";

async function fetchData(url: string, options: RequestInit): Promise<Response> {
    return fetch(url, options);
}

export class AuthAPI {
    static async getLoggedInUser(): Promise<User | null> {
        const token = localStorage.getItem('token');
        if (!token) {
            // Manejar la ausencia de token, por ejemplo, redirigir a la página de inicio de sesión
            return null;
        }

        const response = await fetchData('/api/authuser/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            }
        });

        if (!response.ok) {
            // Manejar errores de autenticación u otros errores de solicitud
            return null;
        }

        const user = await response.json();
        return user;
    }

    static async login(body: LoginBody): Promise<User | null> {
        const response = await fetchData('/api/authlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            // Manejar errores de autenticación u otros errores de solicitud
            return null;
        }

        const token = await response.json();

        // Guardar el token en el almacenamiento local
        localStorage.setItem('token', token);

        // Obtener los datos del usuario
        const user = await this.getLoggedInUser(); 
        return user;
    }

    static async logout(): Promise<void> {
        const token = localStorage.getItem('token');
        if (!token) {
            // Manejar la ausencia de token, por ejemplo, redirigir a la página de inicio de sesión
            return;
        }

        await fetchData('/api/authlogout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            }
        });

        // Eliminar el token del almacenamiento local
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }
}
