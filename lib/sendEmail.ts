import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'leads@partscentral.us',
    pass: 'cqggkvsrynkysxrr',
  },
  tls: {
    ciphers: "SSLv3",
  },
});

export async function sendEmail(data: {
  year: string;
  engine_size: string;
  make: string;
  model: string;
  transmission: string;
  part: string;
  name: string;
  email: string;
  phone: string;
  zip_code: string;
  Source?: string;
  SourceCampaign?: string;
  SourceMedium?: string;
  SearchBy?: string;
}) {
  const {
    year,
    engine_size,
    make,
    model,
    transmission,
    part,
    name,
    email,
    phone,
    zip_code,
    Source,
    SourceCampaign,
    SourceMedium,
    SearchBy,
  } = data;

  const html = `
    <table width="100%" cellpadding="6" cellspacing="0">
      <tr><td><b>Name</b></td><td>${name}</td></tr>
      <tr><td><b>Email</b></td><td>${email}</td></tr>
      <tr><td><b>Phone</b></td><td>${phone}</td></tr>
      <tr><td><b>Zip</b></td><td>${zip_code}</td></tr>
      <tr><td><b>Make</b></td><td>${make}</td></tr>
      <tr><td><b>Model</b></td><td>${model}</td></tr>
      <tr><td><b>Year</b></td><td>${year}</td></tr>
      <tr><td><b>Part</b></td><td>${part}</td></tr>
      <tr><td><b>Engine Size</b></td><td>${engine_size}</td></tr>
      <tr><td><b>Transmission</b></td><td>${transmission}</td></tr>
      <tr><td><b>Source</b></td><td>${Source || "Organic"}</td></tr>
      <tr><td><b>Campaign</b></td><td>${SourceCampaign || "-"}</td></tr>
      <tr><td><b>Medium</b></td><td>${SourceMedium || "-"}</td></tr>
      <tr><td><b>Search By</b></td><td>${SearchBy || "-"}</td></tr>
    </table>
  `;

  return transporter.sendMail({
    from: `UsedCarPartsCentral <leads@partscentral.us>`,
    to: 'a2zautoleads@gmail.com',
    replyTo: email,
    subject: `UCPC - ${year} - ${make} - ${part} - ${zip_code}`,
    html,
    headers: {
      Importance: "high",
    },
  });
}
