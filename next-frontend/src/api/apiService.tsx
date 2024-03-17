const apiUrl: string = 'https://avicyt.onrender.com/';

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const executeRequest = async (method: string, endpoint: string, data: any = null, customHeaders: Record<string, string> = {}, includeToken: boolean = true) => {
  let headers: Record<string, string> = { ...customHeaders };

  if (includeToken) {
    const userToken: string = typeof localStorage !== 'undefined' ? localStorage.getItem('token') || '' : '';
    const token: string = 'Token ' + userToken;
    headers['Authorization'] = token;
  }

  const config: RequestInit = {
    method,
    headers,
  };

  if (data) {
    if (!(data instanceof FormData)) {
      config.body = JSON.stringify(data);
    } else {
      config.body = data;
    }
  }

  const response = await fetch(apiUrl + endpoint, config);
  await handleErrors(response);

  // Clona la respuesta para probar si hay contenido.
  const cloneResponse = response.clone();
  try {
    // Intenta leer el texto del cuerpo de la respuesta clonada.
    const text = await cloneResponse.text();
    // Si el texto no está vacío, intenta parsear el JSON.
    if (text) {
      return JSON.parse(text);
    }
    // Si el texto está vacío, retorna null o un objeto vacío.
    return null;
  } catch (error) {
    // Maneja errores en caso de que el texto no pueda ser parseado a JSON.
    console.error("Error parsing response JSON:", error);
    throw error;
  }
};


const getItems = async (endpoint: string, headers: Record<string, string> = {}) => {
  return executeRequest('GET', endpoint, null, headers);
};

const getItemById = async (endpoint: string, id: number, headers: Record<string, string> = {}) => {
  return executeRequest('GET', `${endpoint}/${id}`, null, headers);
};

const createItem = async (endpoint: string, data: any, headers: Record<string, string> = {}, includeToken?: boolean) => {
  return executeRequest('POST', endpoint, data, headers, includeToken);
};

const updateItem = async (endpoint: string, id: number, data: any, headers: Record<string, string> = {}) => {
  return executeRequest('PUT', `${endpoint}/${id}`, data, headers);
};

const deleteItem = async (endpoint: string, id: number, headers: Record<string, string> = {}) => {
  return executeRequest('DELETE', `${endpoint}/${id}`, null, headers);
};

export { getItems, getItemById, createItem, updateItem, deleteItem };
