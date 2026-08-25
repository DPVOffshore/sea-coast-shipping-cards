import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeContent: "center",
        textAlign: "center",
        padding: 24,
        fontFamily: "var(--font-body)",
      }}
    >
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--navy)", fontSize: 28 }}>
        Card not found
      </h1>
      <p style={{ color: "var(--muted)", marginTop: 8 }}>
        This contact card doesn&apos;t exist.
      </p>
      <Link href="/" style={{ color: "var(--teal)", marginTop: 16, fontWeight: 600 }}>
        Back to directory
      </Link>
    </main>
  );
}
