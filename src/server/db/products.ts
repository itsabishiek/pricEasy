import { db } from "@/drizzle/db";
import { ProductCustomizationTable, ProductTable } from "@/drizzle/schema";
import {
  CACHE_TAGS,
  dbCache,
  getIdTag,
  getUserTag,
  revalidateDbCache,
} from "@/lib/cache";
import { and, eq } from "drizzle-orm";

export function getProducts(userId: string, { limit }: { limit?: number }) {
  const cacheFn = dbCache(getProductsInternal, {
    tags: [getUserTag(userId, CACHE_TAGS.products)],
  });

  return cacheFn(userId, { limit });
}

export function getProductsInternal(
  userId: string,
  { limit }: { limit?: number }
) {
  return db.query.ProductTable.findMany({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
    orderBy: ({ createdAt }, { desc }) => desc(createdAt),
    limit,
  });
}

export function getProduct(userId: string, productId: string) {
  const cacheFn = dbCache(getProductInternal, {
    tags: [getIdTag(productId, CACHE_TAGS.products)],
  });

  return cacheFn(userId, productId);
}

export function getProductInternal(userId: string, productId: string) {
  return db.query.ProductTable.findFirst({
    where: ({ clerkUserId, id }, { eq, and }) =>
      and(eq(clerkUserId, userId), eq(id, productId)),
  });
}

export async function createProduct(data: typeof ProductTable.$inferInsert) {
  const [newProduct] = await db
    .insert(ProductTable)
    .values(data)
    .returning({ id: ProductTable.id, userId: ProductTable.clerkUserId });

  try {
    await db
      .insert(ProductCustomizationTable)
      .values({
        productId: newProduct.id,
      })
      .onConflictDoNothing({
        target: ProductCustomizationTable.productId,
      });
  } catch (error) {
    await db.delete(ProductTable).where(eq(ProductTable.id, newProduct.id));
  }

  revalidateDbCache({
    tag: CACHE_TAGS.products,
    userId: newProduct.userId,
    id: newProduct.id,
  });

  return newProduct;
}

export async function updateProduct(
  data: Partial<typeof ProductTable.$inferInsert>,
  { userId, productId }: { userId: string; productId: string }
) {
  const { rowCount } = await db
    .update(ProductTable)
    .set(data)
    .where(
      and(eq(ProductTable.clerkUserId, userId), eq(ProductTable.id, productId))
    );

  if (rowCount > 0) {
    revalidateDbCache({
      tag: CACHE_TAGS.products,
      userId,
      id: productId,
    });
  }

  return rowCount > 0;
}

export async function deleteProduct(productId: string, userId: string) {
  const { rowCount } = await db
    .delete(ProductTable)
    .where(
      and(eq(ProductTable.clerkUserId, userId), eq(ProductTable.id, productId))
    );

  if (rowCount > 0) {
    revalidateDbCache({
      tag: CACHE_TAGS.products,
      userId,
      id: productId,
    });
  }

  return rowCount > 0;
}
