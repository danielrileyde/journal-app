import styles from "./AuthButton.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  console.log("SESSION: ", session);

  if (session) {
    return (
      <>
        <button
          className={`${styles.btn} ${styles.logout}`}
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className={`${styles.btn} ${styles.login}`}
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
