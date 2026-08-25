import { webHref, addressLine } from "./links";

// vCard 3.0 escaping: backslash, comma, semicolon and newlines.
const esc = (v = "") =>
  String(v)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");

const tel = (n) => (n || "").replace(/\s+/g, "");

// Builds a vCard 3.0 string. When downloaded as a .vcf file,
// the phone offers "Add to contacts" with all fields filled in.
export function buildVCard(emp, company) {
  const website = webHref(emp.website || company.website);
  const address = emp.address || company.address;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(emp.lastName)};${esc(emp.firstName)};;${esc(emp.prefix || "")};`,
    `FN:${esc([emp.prefix, emp.firstName, emp.lastName].filter(Boolean).join(" "))}`,
    `ORG:${esc(company.name)}`,
    `TITLE:${esc(emp.title)}`,
  ];

  if (emp.phone) lines.push(`TEL;TYPE=CELL,VOICE:${tel(emp.phone)}`);
  if (emp.officePhone) lines.push(`TEL;TYPE=WORK,VOICE:${tel(emp.officePhone)}`);
  if (emp.email) lines.push(`EMAIL;TYPE=INTERNET,WORK:${esc(emp.email)}`);
  if (website) lines.push(`URL:${website}`);

  if (address) {
    // ADR fields: ;;street;city;region;postal;country
    lines.push(
      `ADR;TYPE=WORK:;;${esc(address.street)};${esc(address.city)};${esc(
        address.region
      )};${esc(address.postal)};${esc(address.country)}`
    );
    lines.push(`LABEL;TYPE=WORK:${esc(addressLine(address))}`);
  }

  // Qualifications + what the company does, so the saved contact
  // still carries the useful context from the card.
  const note = [
    emp.credentials,
    company.services?.length ? `Services: ${company.services.join(", ")}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  if (note) lines.push(`NOTE:${esc(note)}`);

  lines.push("END:VCARD");
  return lines.join("\r\n");
}

// Triggers a download of the vCard in the browser.
export function downloadVCard(emp, company) {
  const text = buildVCard(emp, company);
  const blob = new Blob([text], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${emp.firstName}_${emp.lastName}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
