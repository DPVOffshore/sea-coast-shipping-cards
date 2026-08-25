// ============================================================
//  PEOPLE  —  THIS IS THE ONLY FILE YOU EDIT TO ADD SOMEONE.
// ------------------------------------------------------------
//  To add a person:
//    1. Copy the commented { ... } block at the bottom.
//    2. Change the details.
//    3. Put their photo in  /public/employees/<slug>.jpg
//       (same name as "slug", e.g. slug "nimal" -> nimal.jpg)
//       Square images look best — around 512x512.
//    4. Save. Their card is live at  /<slug>
//
//  Field notes:
//    - phone:        include the country code   ->  "+971 50 764 3088"
//    - officePhone:  OPTIONAL second number (landline). Remove if unused.
//    - whatsapp:     digits only, NO plus, NO spaces  ->  "971507643088"
//    - prefix:       OPTIONAL honorific ("Mr." / "Ms.") saved into the contact.
//    - credentials:  OPTIONAL qualifications line under the job title.
//    - email:        OPTIONAL. Leave "" and the email row is hidden.
//    - website:      OPTIONAL. Leave it out to use the company website;
//                    if that is "" too, the website row is hidden.
//    - address:      OPTIONAL override. Leave it out to use the company
//                    address from company.js.
// ============================================================

export const employees = [
  {
    slug: "bhabani",
    prefix: "Mr.",
    firstName: "Bhabani",
    lastName: "Nayak",
    title: "Managing Director & Founder",
    credentials: "Chief Engineer, MBA",
    photo: "/employees/bhabani.jpg",
    phone: "+971 50 764 3088", // mobile — spaces are fine, the dialer strips them
    officePhone: "", // add a landline here if there is one
    whatsapp: "971507643088", // no plus, no spaces
    email: "", // add his address here and the Email row appears
    // website: "",           // optional override of the company website
    // address: {             // optional override of the company address
    //   label: "Dubai Office",
    //   street: "...",
    //   city: "Dubai",
    //   region: "",
    //   postal: "",
    //   country: "United Arab Emirates",
    //   mapUrl: "",
    // },
  },

  // ---- copy from here to add a new person ----
  // {
  //   slug: "nimal",
  //   prefix: "Mr.",
  //   firstName: "Nimal",
  //   lastName: "Silva",
  //   title: "Operations Manager",
  //   credentials: "",
  //   photo: "/employees/nimal.jpg",
  //   phone: "+971 50 000 0000",
  //   officePhone: "",
  //   whatsapp: "971500000000",
  //   email: "nimal@seacoastshipping.com",
  // },
];

// Helper used by the pages (no need to touch this).
export function getEmployee(slug) {
  return employees.find((e) => e.slug === slug);
}
