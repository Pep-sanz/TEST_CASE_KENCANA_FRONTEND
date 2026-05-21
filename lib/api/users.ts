import { User } from "@/interface/user.type";

export const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function fetchUserById(id: string): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed fetch user");
  }

  const users: User[] = await response.json();

  if (!users.length) {
    throw new Error(`User dengan id ${id} tidak ditemukan`);
  }

  return users[0];
}
