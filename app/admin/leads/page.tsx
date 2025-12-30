import { prisma } from "@/lib/prisma";

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Chat Leads</h1>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Part</th>
              <th className="px-4 py-2 text-left font-semibold">Vehicle</th>
              <th className="px-4 py-2 text-left font-semibold">Email</th>
              <th className="px-4 py-2 text-left font-semibold">Phone</th>
              <th className="px-4 py-2 text-left font-semibold">Status</th>
              <th className="px-4 py-2 text-left font-semibold">Created</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{lead.part || "-"}</td>
                <td className="px-4 py-2">
                  {[lead.year, lead.make, lead.model].filter(Boolean).join(" ") || "-"}
                </td>
                <td className="px-4 py-2">{lead.email || "-"}</td>
                <td className="px-4 py-2">{lead.phone || "-"}</td>
                <td className="px-4 py-2">{lead.status}</td>
                <td className="px-4 py-2">
                  {lead.createdAt.toISOString().slice(0, 19).replace("T", " ")}
                </td>
              </tr>
            ))}

            {leads.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan={6}>
                  No leads captured yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
