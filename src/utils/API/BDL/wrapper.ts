export const make_bdl_api_request = async (endpoint: string, params?: Record<string, string>) => {
    try {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/bdl${endpoint}${queryString}`, );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}, Message: ${response.text}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error trying to make BDL Request: ', error);
        throw error; // Re-throw the error to be caught by the calling function
    }
}
