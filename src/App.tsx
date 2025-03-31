import React, { useState } from "react";


type User = {
  id: number;
  name: string;
  email: string;
};


const users: User[] = [
  { id: 1, name: "somchai jaidee", email: "somchai_j@gamil.com" },
  { id: 2, name: "Kaprao MooKrob", email: "MooKrobSab@gamil.com" },
  { id: 3, name: "Kafe MaiKhom", email: "KafeMaiMai@gamil.com" },
];

export default function UserList(): JSX.Element {

  const [search, setSearch] = useState<string>("");


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="max-w-md w-full p-5 bg-white shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Search user "
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <div className="space-y-3">
        {filteredUsers.map((user) => (
          <div key={user.id} className="p-3 border border-gray-300 rounded-lg">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
}
