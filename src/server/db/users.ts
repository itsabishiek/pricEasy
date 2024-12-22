import { db } from "@/drizzle/db";
import { ProductTable, UserSubscriptionTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function deleteUser(userId: string) {
  return db.batch([
    db
      .delete(UserSubscriptionTable)
      .where(eq(UserSubscriptionTable.clerkUserId, userId)),
    db.delete(ProductTable).where(eq(ProductTable.clerkUserId, userId)),
  ]);
}
