import { getUsers } from "@/lib/api/user/queries";
import { DataTable } from "./components/user-table";
import { columns } from "./components/user-columns";

export default async function DemoPage() {
  const data = await getUsers();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
