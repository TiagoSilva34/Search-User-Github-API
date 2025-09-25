import { localStorageHandler } from "@/utils/browser/localStorage";

describe('LocalStorageHandler', () => {
    let setItemSpy: jest.SpyInstance;
    let getItemSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.clearAllMocks();

        setItemSpy = jest
            .spyOn(Storage.prototype, 'setItem')
            .mockImplementation(() => {});
        getItemSpy = jest
            .spyOn(Storage.prototype, 'getItem')
            .mockImplementation(() => null);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('saveData', () => {
        it('should save data in localStorage', () => {
            const error = jest.spyOn(console, 'error').mockImplementation(() => {})

            localStorageHandler.saveData('key', 'value');

            expect(setItemSpy).toHaveBeenCalledTimes(1);
            expect(setItemSpy).toHaveBeenCalledWith(
                'key',
                expect.stringContaining('"info":"value"'),
            );
            expect(setItemSpy).toHaveBeenCalledWith(
                'key',
                expect.stringContaining('"timeStamp"'),
            );
            expect(error).not.toHaveBeenCalled();
        });

        it('should call ErrorLogger when localStorage throws an error', () => {
            const error = jest.spyOn(console, 'error').mockImplementation(() => {})
            jest.spyOn(localStorage, 'setItem').mockImplementation(() => {
                throw new Error('Erro ao salvar')
            })

            localStorageHandler.saveData('key', 'value');

            expect(error).toHaveBeenCalledWith(
               'Error saving data to localStorage', expect.any(Error)
            );
        });
    });

    describe('retrieveData', () => {
        it('should retrieve and parse data from localStorage', () => {
            const error = jest.spyOn(console, 'error').mockImplementation(() => {})
            const mockData = JSON.stringify({
                info: 'value',
                timeStamp: new Date().toISOString(),
            });
            getItemSpy.mockReturnValueOnce(mockData);

            const result = localStorageHandler.retrieveData('key');

            expect(getItemSpy).toHaveBeenCalledWith('key');
            expect(result).toEqual(
                expect.objectContaining({
                    info: 'value',
                    timeStamp: expect.any(String),
                }),
            );
            expect(error).not.toHaveBeenCalled();
        });

        it('should return null if localStorage has no data', () => {
            const error = jest.spyOn(console, 'error').mockImplementation(() => {})

            getItemSpy.mockReturnValueOnce(null);

            const result = localStorageHandler.retrieveData('key');

            expect(result).toBeNull();
            expect(getItemSpy).toHaveBeenCalledWith('key');
            expect(error).not.toHaveBeenCalled();
        });

        it('should call error when localStorage throws an error', () => {
            const error = jest.spyOn(console, 'error').mockImplementation(() => {})
            
            jest.spyOn(localStorage, 'getItem').mockImplementation(() => {
                throw new Error('Erro ao recuperar')
            })

            const result = localStorageHandler.retrieveData('key');

            expect(result).toBeNull();
            expect(error).toHaveBeenCalledWith(
                'Error retrieving data from localStorage',
                expect.any(Error)
            );
        });
    });

    describe('retrieveData', () => {
        it('should fetch and parse data from localStorage', () => {
            const error = jest.spyOn(console, 'error').mockImplementation(() => {})

            const mockData = JSON.stringify({
                info: 'value',
                timeStamp: new Date().toISOString(),
            });
            getItemSpy.mockReturnValueOnce(mockData);

            const result = localStorageHandler.retrieveData('key');

            expect(getItemSpy).toHaveBeenCalledWith('key');
            expect(result).toEqual(
                expect.objectContaining({
                    info: 'value',
                    timeStamp: expect.any(String),
                }),
            );
            expect(error).not.toHaveBeenCalled();
        });

        it('should return null if the key does not exist', () => {
            getItemSpy.mockReturnValueOnce(null);

            const result = localStorageHandler.retrieveData('key');

            expect(result).toBeNull();
            expect(getItemSpy).toHaveBeenCalledWith('key');
        });

        it('should call error when localStorage throws an error', () => {
            const error = jest.spyOn(console, 'error').mockImplementation(() => {})
            
            jest.spyOn(localStorage, 'getItem').mockImplementation(() => {
                throw new Error('Erro ao recuperar')
            })

            const result = localStorageHandler.retrieveData('key');

            expect(result).toBeNull();
            expect(error).toHaveBeenCalledWith(
                'Error retrieving data from localStorage',
                expect.any(Error)
            )
        });
    });
});
