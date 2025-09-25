import { userService } from "@/services/userService";
import { handleApiConfig } from "@/services/apiConfig";

jest.mock('@/services/apiConfig', () => ({
    handleApiConfig: jest.fn()
}))

describe('userService', () => {
    let mockGetUsers: jest.Mock;
    beforeEach(() => {
        mockGetUsers = jest.fn();

        (handleApiConfig as jest.Mock).mockReturnValue({get: mockGetUsers});
    })

    afterEach(( ) => {
        jest.clearAllMocks()
    })

    it('should fetch data when API call is successfully', async () => {
        mockGetUsers.mockResolvedValue({data: [{id: 1, name: 'John'}]});

        const data = await userService.getUsers('john');

        expect(handleApiConfig).toHaveBeenCalledTimes(1)
        expect(mockGetUsers).toHaveBeenCalledWith('/users/john')
        expect(data).toEqual([{id: 1, name: 'John'}])
    })


    it('should throw an error when API call fails', async () => {
        const username = 'johnDoe';
        const error = new Error('API error');
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        mockGetUsers.mockRejectedValue(error);

        await expect(userService.getUsers(username)).rejects.toThrow(error);
        expect(mockGetUsers).toHaveBeenCalledWith(`/users/${username}`);
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching users:', expect.any(Error));
    });
})