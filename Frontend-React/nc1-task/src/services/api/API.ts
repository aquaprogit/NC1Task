
interface ApiResponse<T> {
    data: T;
    status: number;
}

const API = {
    get: async <T>(url: string): Promise<ApiResponse<T>> => {
        const response = await fetch(url);
        return response.json();
    },
    post: async <T>(url: string, body: any): Promise<ApiResponse<T>> => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return response.json();
    },
    put: async <T>(url: string, body: any): Promise<ApiResponse<T>> => {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
        return response.json();
    },
    delete: async <T>(url: string): Promise<ApiResponse<T>> => {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        return response.json();
    },
};

export default API;
