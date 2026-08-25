// Builds the clickable href values used on the card.

// Phone: opens the dialer on mobile.
export function telHref(phone) {
  return `tel:${(phone || "").replace(/\s+/g, "")}`;
}

// WhatsApp: opens a chat (app on mobile, web on desktop).
export function waHref(number, text = "") {
  const n = (number || "").replace(/[^\d]/g, "");
  return `https://wa.me/${n}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

// Email: "mailto" opens the default mail app (Outlook if it's the default);
// "outlook" always opens Outlook-on-the-web compose.
export function emailHref(email, { mode = "mailto", subject = "", body = "" } = {}) {
  if (mode === "outlook") {
    const p = new URLSearchParams({ to: email });
    if (subject) p.set("subject", subject);
    if (body) p.set("body", body);
    return `https://outlook.office.com/mail/deeplink/compose?${p.toString()}`;
  }
  const q = [];
  if (subject) q.push(`subject=${encodeURIComponent(subject)}`);
  if (body) q.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}${q.length ? "?" + q.join("&") : ""}`;
}

// Full website URL, guaranteeing an https:// prefix.
export function webHref(url) {
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

// Strips protocol for a cleaner on-screen label (seacoastshipping.com).
export function webLabel(url) {
  return (url || "").replace(/^https?:\/\//i, "").replace(/\/$/, "");
}

// Maps link for an address block.
export function mapHref(address) {
  if (address?.mapUrl) return address.mapUrl;
  const q = [address?.street, address?.city, address?.country].filter(Boolean).join(", ");
  return `https://maps.google.com/?q=${encodeURIComponent(q)}`;
}

// One-line, human-readable address.
export function addressLine(address) {
  return [address?.street, address?.city, address?.region, address?.postal, address?.country]
    .filter(Boolean)
    .join(", ");
}
