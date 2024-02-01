const baseUrl = 'https://localhost:44326';

interface APIResponse<T> {
    data: T | null;
    error: string | null;
}

const API = {
    get: async <T>(url: string): Promise<APIResponse<T>> => {
        try {
            const response = await fetch(baseUrl + url);
            const data = await response.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error: error.message };
        }
    },
    post: async <T>(url: string, body: any): Promise<APIResponse<T>> => {
        try {
            const response = await fetch(baseUrl + url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error: error.message };
        }
    },
    put: async <T>(url: string, body: any): Promise<APIResponse<T>> => {
        try {
            const response = await fetch(baseUrl + url, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error: error.message };
        }
    },
    delete: async (url: string): Promise<APIResponse<void>> => {
        try {
            await fetch(baseUrl + url, {
                method: 'DELETE',
            });
            return { data: null, error: null };
        } catch (error: any) {
            return { data: null, error: error.message };
        }
    },
};

export default API;
