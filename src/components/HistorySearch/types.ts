export interface IHistorySearchProps { 
    handleUserSearchCache: () => void;
    userSearchCache: IUserProps[];
    handleRenderUserSearch: (user: IUserProps) => void
}