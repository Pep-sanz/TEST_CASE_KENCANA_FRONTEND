import Image from "next/image";
import Styles from "@/styles/detailUser.module.css";
import { fetchUserById } from "@/lib/api/users";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DetailUserPage({ params }: Props) {
  const { id } = await params;
  const user = await fetchUserById(id);

  return (
    <div className={Styles.page}>
      <div className={Styles.card}>
        <div className={Styles.header}>
          <Image
            src={`https://i.pravatar.cc/150?img=${user.id}`}
            alt={user.name}
            width={120}
            height={120}
            sizes="120px"
            priority
            className={Styles.photo}
          />

          <div>
            <h1 className={Styles.name}>{user.name}</h1>

            <p className={Styles.username}>@{user.username}</p>

            <p className={Styles.email}>{user.email}</p>
          </div>
        </div>

        <div className={Styles.section}>
          <h2>Contact</h2>

          <p>
            <span>Phone:</span> {user.phone}
          </p>

          <p>
            <span>Website:</span> {user.website}
          </p>
        </div>

        <div className={Styles.section}>
          <h2>Address</h2>

          <p>
            {user.address.street}, {user.address.suite}
          </p>

          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

        <div className={Styles.section}>
          <h2>Company</h2>

          <p>
            <span>Name:</span> {user.company.name}
          </p>

          <p>
            <span>Catch Phrase:</span> {user.company.catchPhrase}
          </p>

          <p>
            <span>Business:</span> {user.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
}
