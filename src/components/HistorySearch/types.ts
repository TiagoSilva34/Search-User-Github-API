export interface IHistorySearchProps { 
    handleUserSearchCache: () => void;
    userSearchCache: IUserProps[];
    handleRenderUserSearch: (user: IUserProps) => void
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}