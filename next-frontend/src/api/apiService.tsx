const apiUrl: string = 'http://127.0.0.1:8000/problems/';
const token: string = 'Token d854000a3ab4a1b1242e3c22573058ca7420eddf';

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const executeRequest = async (method: string, endpoint: string, data: any = null, customHeaders: Record<string, string> = {}) => {
  const headers: Record<string, string> = {
    'Authorization': token,
    ...customHeaders,
  };

  const config: RequestInit = {
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
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

const createItem = async (endpoint: string, data: any, headers: Record<string, string> = {}) => {
  return executeRequest('POST', endpoint, data, headers);
};

const updateItem = async (endpoint: string, id: number, data: any, headers: Record<string, string> = {}) => {
  return executeRequest('PUT', `${endpoint}/${id}`, data, headers);
};

const deleteItem = async (endpoint: string, id: number, headers: Record<string, string> = {}) => {
  return executeRequest('DELETE', `${endpoint}/${id}`, null, headers);
};

export { getItems, getItemById, createItem, updateItem, deleteItem };