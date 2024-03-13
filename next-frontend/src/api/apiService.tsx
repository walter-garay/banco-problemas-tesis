const apiUrl: string = 'https://avicyt.onrender.com/';
const userToken: string = typeof localStorage !== 'undefined' ? localStorage.getItem('token') || '' : '';
const token: string = 'Token ' + userToken;

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const executeRequest = async (method: string, endpoint: string, data: any = null, customHeaders: Record<string, string> = {}, includeToken: boolean = true) => {
  let headers: Record<string, string> = { ...customHeaders };
  
  if (includeToken) {
      headers['Authorization'] = token;
  }

  const config: RequestInit = {
      method,
      headers,
  };

  if (data) {
      if (!(data instanceof FormData)) {
          // Solo convierte a JSON si la data no es FormData
          config.body = JSON.stringify(data);
      } else {
          config.body = data;
      }
  }

  const response = await fetch(apiUrl + endpoint, config);
  const responseData = await handleErrors(response).json();
  
  return responseData;
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
