import React from "react"
import { fireEvent, queryByTestId, queryByText, render, waitFor } from "@testing-library/react"
import { useUserSearch } from "@/hooks/useUserSearch"
import { StorageParams } from "@/utils/storageParams/StorageParams"
import { localStorageHandler } from "@/utils/browser/localStorage"
import { userService } from "@/services/userService"

jest.mock('@/utils/browser/localStorage', () => ({
    localStorageHandler: {
        retrieveData: jest.fn(),
        saveData: jest.fn().mockImplementation(() => {})
    },
}))

jest.mock('@/services/userService', () => ({
    userService: {
        getUsers: jest.fn()
    },
}))

const TestComponent = () => {
    const { handleSearchUser, loading, user} = useUserSearch()

    return (
        <div>
            <button type="submit" onClick={() => handleSearchUser('Bruno')}>
                Buscar
            </button>
            {loading && <p>Loading...</p>}
            {user && <p data-testid="data">{JSON.stringify(user)}</p>}
        </div>
    )
}

describe('useUserSearch', () => {
    const userMock: IUserProps = {
        name: 'Bruno',
        login: '@brunomonteiro',
        bio: 'Desenvolvedor',
        avatar_url: 'avatar.png',
        followers: 10,
        following: 5,
        public_repos: 3,
        location: 'Brasil',
        created_at: '2020-01-01',
        id: 1
    }
    beforeEach(() => {
        (localStorageHandler.retrieveData as jest.Mock).mockReturnValue(null)
        jest.clearAllMocks();
    })

    it('should fetch user and save in localStorage', async () => {

        (userService.getUsers as jest.Mock).mockResolvedValue(userMock)

        const { getByText, queryByText } = render(<TestComponent />)

        const button = getByText(/buscar/i)
        expect(button).toBeInTheDocument()

        fireEvent.click(button)

        await waitFor(() => {
            expect(queryByText(/loading.../i)).not.toBeInTheDocument()
        })
        expect(localStorageHandler.saveData).toHaveBeenCalledWith(StorageParams.GET_USER_SEARCH_CACHE, [userMock])
    })

    it('should not save user in localStorage if already exists ', async () => {
        (localStorageHandler.retrieveData as jest.Mock).mockReturnValue({
            info: [userMock],
        });

        (userService.getUsers as jest.Mock).mockResolvedValue(userMock)

        const { getByText, queryByText, getByTestId } = render(<TestComponent />)

        const button = getByText(/buscar/i)
        expect(button).toBeInTheDocument()

        fireEvent.click(button)

        await waitFor(() => {
            expect(queryByText('Loading...')).toBeNull()
        })
        expect(getByTestId('data')).toHaveTextContent(JSON.stringify(userMock))

        expect(localStorageHandler.saveData).not.toHaveBeenCalled()
    })

    it('should call error when fetch user to fail', async () => {
        (userService.getUsers as jest.Mock).mockRejectedValue(new Error('Failed to fetching data'));
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const { getByText, queryByText, queryByTestId } = render(<TestComponent />)

        const button = getByText(/buscar/i)
        expect(button).toBeInTheDocument()

        fireEvent.click(button)

        await waitFor(() => {
            expect(queryByText('Loading...')).toBeNull()
        })
        expect(queryByTestId('data')).toBeNull();

        expect(error).toHaveBeenCalledWith('Error fetching user data:', expect.any(Error))
    })
})