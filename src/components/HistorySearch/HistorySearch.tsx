import { Button } from "../Button/Button";
import { IHistorySearchProps } from "./types";

export const HistorySearch = ({
  handleUserSearchCache,
  userSearchCache,
  handleSearchData,
}: IHistorySearchProps) => {
  return (
    <div>
      <Button type="button" onClick={handleUserSearchCache}>
        Histórico de buscas
      </Button>

      <ul>
        {userSearchCache.map((user: IUserProps) => (
          <li key={user.id}>
            <Button type="submit" onClick={() => handleSearchData(user.login)}>
              {user.name} - @{user.login}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
