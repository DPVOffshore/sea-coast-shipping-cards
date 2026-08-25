import { notFound } from "next/navigation";
import { employees, getEmployee } from "@/data/employees";
import { company } from "@/data/company";
import EmployeeCard from "@/components/EmployeeCard";

// Pre-build a page for every person at build time.
export function generateStaticParams() {
  return employees.map((e) => ({ slug: e.slug }));
}

// Per-card page title + description (nice link previews when shared).
export function generateMetadata({ params }) {
  const emp = getEmployee(params.slug);
  if (!emp) return {};
  return {
    title: `${emp.firstName} ${emp.lastName} — ${company.shortName}`,
    description: `${emp.title}, ${company.name}`,
  };
}

export default function CardPage({ params }) {
  const emp = getEmployee(params.slug);
  if (!emp) notFound();
  return <EmployeeCard emp={emp} company={company} />;
}
