import { Input } from "@/Input/Input";
import { useState } from "react";
import { Button } from "../Button/Button";
import { IFormProps } from "./types";
import styles from "./styles.module.css"

export const Form = ({
  handleSearchData
}: IFormProps) => {
  const [search, setSearch] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    handleSearchData(search);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Buscar usuário"
        value={search}
        onChange={setSearch}
      />
      <Button type="submit" disabled={search ? false : true} >
        Buscar 
      </Button>
    </form>
  );
};
