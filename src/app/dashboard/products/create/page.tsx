import React from "react";
import ProductDetailsForm from "../../_components/forms/product-details-form";

type CreatePageProps = {};

const CreatePage: React.FC<CreatePageProps> = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Create Product</h1>

      <div className="mt-6">
        <ProductDetailsForm />
      </div>
    </div>
  );
};
export default CreatePage;
