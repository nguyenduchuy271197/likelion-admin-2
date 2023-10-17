import { prisma } from "@/lib/prisma";
import { UserId } from "@/schema/user";

export async function deleteUser(id: UserId) {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id,
      },
    });

    return deletedUser;
  } catch (error) {
    console.log(error);
    const err = (error as Error).message || "Something went wrong";
    return {
      message: err,
    };
  }
}
