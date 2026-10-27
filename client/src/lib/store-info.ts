// One place for the store's public details, so the home page, footer and other pages stay in sync.
const address = "390 Sidney Street, Trenton, ON K8V 2V2";

export const STORE = {
  street: "390 Sidney Street",
  cityLine: "Trenton, Ontario K8V 2V2",
  phone: "(613) 847-5539",
  phoneHref: "tel:+16138475539",
  email: "info@secondspin.ca",
  jobsEmail: "jobs@secondspin.ca",
  hoursShort: "Open daily 10 AM – 7 PM",
  hoursLong: "Every day, 10 AM – 7 PM",
  facebook: "https://www.facebook.com/profile.php?id=61578210846883",
  instagram: "https://www.instagram.com/secondspinthrift.ca/",
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`Second Spin Thrift, ${address}`)}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,
};
