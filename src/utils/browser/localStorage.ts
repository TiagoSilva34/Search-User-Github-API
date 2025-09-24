export const localStorageHandler = {
    saveDataInStorage: (key: string, data: string | string[]) => {
        try {
            const value = JSON.stringify(data);
            localStorage.setItem(key, value)
        } catch (error) {
            console.error("Error saving data to localStorage", error);   
        }
    },
    retrieveDataFromStorage: (key: string) => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error("Error getting data from localStorage", error);
            return null;
        }
    },
}