export const make_nba_api_request = async (endpoint: string, params?: Record<string, string>) => {
    try {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/nba${endpoint}${queryString}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error trying to make BDL Request: ', error);
        throw error; // Re-throw the error to be caught by the calling function
    }
}
