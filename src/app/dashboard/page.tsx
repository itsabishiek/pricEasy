import { getProducts } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import NoProducts from "./_components/no-products";

type DashboardPageProps = {};

const DashboardPage: React.FC<DashboardPageProps> = async () => {
  const { userId, redirectToSignIn } = await auth();
  if (userId === null) return redirectToSignIn();

  const products = await getProducts(userId, { limit: 10 });

  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {products.length === 0 ? <NoProducts /> : null}
    </div>
  );
};
export default DashboardPage;
