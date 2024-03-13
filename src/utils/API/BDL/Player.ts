export const getPlayerByFullName = async (firstName: string, lastName: string) => {
    try{
        const response = await fetch(process.env.NEXT_PUBLIC_BASEURL + `/api/bdl/players/search?first_name=${firstName}&last_name=${lastName}`)
        if (!response.ok) throw new Error(`Error retrieving player: ${response.status}` )
        return await response.json() 
    }   catch (error) {
        throw new Error(`Error fetching player by full name: ${(error as Error).message}`)
    }
}