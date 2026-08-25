"use client";

import Image from "next/image";
import styles from "./EmployeeCard.module.css";
import { downloadVCard } from "@/lib/vcard";
import { withBasePath } from "@/lib/basePath";
import {
  telHref,
  waHref,
  emailHref,
  webHref,
  webLabel,
  mapHref,
  addressLine,
} from "@/lib/links";

export default function EmployeeCard({ emp, company }) {
  const address = emp.address || company.address;
  const website = emp.website || company.website;

  const waText = `Hi ${emp.firstName}, I got your contact from your ${company.shortName} card.`;

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        {/* Hero */}
        <div className={styles.hero}>
          <Image
            className={styles.logo}
            src={withBasePath(company.logoLockupWhite)}
            alt={company.name}
            width={823}
            height={200}
            priority
          />
          <div className={styles.avatarRing}>
            <Image
              className={styles.avatar}
              src={withBasePath(emp.photo)}
              alt={`${emp.firstName} ${emp.lastName}`}
              width={116}
              height={116}
              priority
            />
          </div>
        </div>

        {/* Identity */}
        <div className={styles.identity}>
          <h1 className={styles.name}>
            <span>{emp.firstName}</span> {emp.lastName}
          </h1>
          <div className={styles.role}>{emp.title}</div>
          {emp.credentials && <div className={styles.creds}>{emp.credentials}</div>}
          <div className={styles.org}>{company.tagline}</div>
        </div>

        {/* Contact rows */}
        <div className={styles.contacts}>
          {/* Mobile -> dialer */}
          {emp.phone && (
            <a className={styles.row} href={telHref(emp.phone)}>
              <span className={styles.ic}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <span className={styles.txt}>
                <small>Mobile</small>
                <span>{emp.phone}</span>
              </span>
            </a>
          )}

          {/* Office phone (optional second number) */}
          {emp.officePhone && (
            <a className={styles.row} href={telHref(emp.officePhone)}>
              <span className={styles.ic}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1Z" />
                </svg>
              </span>
              <span className={styles.txt}>
                <small>Office</small>
                <span>{emp.officePhone}</span>
              </span>
            </a>
          )}

          {/* WhatsApp */}
          {emp.whatsapp && (
            <a
              className={styles.row}
              href={waHref(emp.whatsapp, waText)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.ic} ${styles.icWa}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.7 7.3L3 20l1.3-5.1A8.5 8.5 0 1 1 21 11.5Z" />
                  <path
                    d="M8.5 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3-.1.5.3.6 1.3 1.6 2.1 2 .2.1.4.1.5 0l.5-.5c.2-.2.3-.2.6-.1l1.5.8c.2.1.3.2.3.4 0 .4-.2 1-.5 1.2-.3.2-1 .5-1.5.4-1.4-.2-3-1-4.2-2.4-1-1.1-1.6-2.4-1.6-3.3 0-.4.2-.9.4-1.1Z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>
              <span className={styles.txt}>
                <small>WhatsApp</small>
                <span>Send a message</span>
              </span>
            </a>
          )}

          {/* Email — hidden until an address is added in employees.js */}
          {emp.email && (
            <a className={styles.row} href={emailHref(emp.email, { mode: company.emailMode })}>
              <span className={styles.ic}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span className={styles.txt}>
                <small>Email</small>
                <span>{emp.email}</span>
              </span>
            </a>
          )}

          {/* Website — hidden until one is added in company.js */}
          {website && (
            <a
              className={styles.row}
              href={webHref(website)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.ic}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                </svg>
              </span>
              <span className={styles.txt}>
                <small>Website</small>
                <span>{webLabel(website)}</span>
              </span>
            </a>
          )}

          {/* Address -> opens maps */}
          {address && (
            <a
              className={`${styles.row} ${styles.rowTop}`}
              href={mapHref(address)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.ic}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span className={styles.txt}>
                <small>{address.label || "Address"}</small>
                <span>{addressLine(address)}</span>
                <span className={styles.mapLink}>
                  Show on map
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
              </span>
            </a>
          )}
        </div>

        {/* Save Contact */}
        <div className={styles.saveWrap}>
          <button className={styles.save} onClick={() => downloadVCard(emp, company)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
              <path d="M17 21v-8H7v8M7 3v5h8" />
            </svg>
            SAVE CONTACT
          </button>
        </div>

        {/* Footer: what Sea Coast does */}
        <div className={styles.footer}>
          {company.services?.length > 0 && (
            <>
              <div className={styles.footHead}>Core Services</div>
              <div className={styles.chips}>
                {company.services.map((s) => (
                  <span key={s} className={styles.chip}>
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}

          {company.countries?.length > 0 && (
            <div className={styles.where}>
              <div className={styles.footHead}>Where we operate</div>
              <div className={styles.chips}>
                {company.countries.map((c) => (
                  <span key={c} className={`${styles.chip} ${styles.chipAlt}`}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
