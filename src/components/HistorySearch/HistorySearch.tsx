import { IHistorySearchProps } from "./types";
import styles from "./styles.module.css";
import { useState } from "react";

export const HistorySearch = ({
  handleUserSearchCache,
  userSearchCache,
  handleRenderUserSearch,
  showModal,
  setShowModal
}: IHistorySearchProps) => {
  return (
    <div>
      <span className={styles.btn_history} onClick={handleUserSearchCache}>
        Histórico de buscas+
      </span>

      {showModal && (
        <ul className={styles.list}>
          <span onClick={() => setShowModal(false)} className={styles.close}>X</span>
          {userSearchCache.map((user: IUserProps) => (
            <div key={user.id} className={styles.list_item}>
              <li>
                <span onClick={() => handleRenderUserSearch(user)}>
                  {user.name} - @{user.login}
                </span>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
