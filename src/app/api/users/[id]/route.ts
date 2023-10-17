import { deleteUser } from "@/lib/api/user/mutations";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!params.id) {
    return Response.json({
      message: "Can not find user id",
    });
  }

  try {
    const deletedUser = await deleteUser(params.id);
    return Response.json(deletedUser);
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
}
