"use client";

import { SearchUser } from "model/user";
import useSWR from "swr";
import { DotLoader } from "react-spinners";
import { useState } from "react";
import UserCard from "./UserCard";
import useDebounce from "hooks/useDebounce";

function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const debouncedSearch = useDebounce(keyword, 1000);
  const {
    data: users,
    isLoading: loading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedSearch}`);

  return (
    <section className="flex flex-col gap-7 items-center">
      <form onSubmit={(e) => e.preventDefault()} className="w-3/4">
        <input
          className="w-full p-4 border border-gray-500"
          type={"text"}
          placeholder="Serach for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>에러발생</p>}
      {loading && (
        <div className="flex justify-center mt-32">
          <DotLoader color="#36d7b7" />
        </div>
      )}
      {!loading && !error && users?.length == 0 && <p>사용자가 없습니다.</p>}
      {users && (
        <ul className="flex flex-col gap-3 px-5 w-3/4">
          {users.map((user) => (
            <UserCard key={user.email} user={user} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default SearchForm;
