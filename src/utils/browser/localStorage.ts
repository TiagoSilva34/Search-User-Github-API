class LocalStorageHandler {
    saveData(key: string, value: string | string[]) {
        const informations = {
            info: value,
            timeStamp: new Date(),
        };

        try {
            const serializedValue = JSON.stringify(informations);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error("Error saving data to localStorage", error);
        }
    }
    retrieveData(key: string) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error("Error retrieving data from localStorage", error);
            return null;
        }
    }
}

export const localStorageHandler = new LocalStorageHandler();