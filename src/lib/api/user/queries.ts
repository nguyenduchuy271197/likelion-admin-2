import { prisma } from "@/lib/prisma";

export async function getUsers() {
  const users = await prisma.user.findMany({
    orderBy: {
      registration_date: "desc",
    },
  });
  return users;
}
