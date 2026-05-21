import { User } from "@/interface/user.type";
import { fetchUsers } from "@/lib/api/users";
import Styles from "@/styles/users.module.css";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 300;

export default async function UserPage() {
  const users = await fetchUsers();

  return (
    <div className={Styles.page}>
      <div className={Styles.container}>
        <h1 className={Styles.title}>User List</h1>

        <div className={Styles.userGrid}>
          {users.map((user: User) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className={Styles.cardLink}
            >
              <div className={Styles.card}>
                <Image
                  src={`https://i.pravatar.cc/150?img=${user.id}`}
                  alt={user.name}
                  width={90}
                  height={90}
                  sizes="90px"
                  className={Styles.photo}
                />
                <div className={Styles.userInfoWrapper}>
                  <h2 className={Styles.name}>{user.name}</h2>
                  <div className={Styles.userInfo}>
                    <p className={Styles.username}>@{user.username}</p>
                    <span>||</span>
                    <p className={Styles.email}>{user.email}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
