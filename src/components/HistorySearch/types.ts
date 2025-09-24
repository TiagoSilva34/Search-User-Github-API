export interface IHistorySearchProps { 
    handleUserSearchCache: () => void;
    userSearchCache: IUserProps[];
    handleSearchData: (data: string) => void;
}