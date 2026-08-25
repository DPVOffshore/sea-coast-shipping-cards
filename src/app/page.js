import Link from "next/link";
import Image from "next/image";
import { employees } from "@/data/employees";
import { company } from "@/data/company";
import { withBasePath } from "@/lib/basePath";
import styles from "./page.module.css";

// A small directory index at "/". Useful for testing and for when
// more people are added; each name links to their own card.
export default function Home() {
  return (
    <main className={styles.wrap}>
      <Image
        src={withBasePath(company.logoLockup)}
        alt={company.name}
        width={824}
        height={200}
        className={styles.logo}
        priority
      />

      <h1 className={styles.title}>Digital Business Cards</h1>
      <p className={styles.sub}>Tap a name to open their card.</p>

      <div className={styles.list}>
        {employees.map((e) => (
          <Link key={e.slug} href={`/${e.slug}`} className={styles.item}>
            <Image
              src={withBasePath(e.photo)}
              alt=""
              width={48}
              height={48}
              className={styles.avatar}
            />
            <span className={styles.meta}>
              <strong>
                {e.firstName} {e.lastName}
              </strong>
              <small>{e.title}</small>
            </span>
            <svg className={styles.chev} viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </Link>
        ))}
      </div>
    </main>
  );
}
