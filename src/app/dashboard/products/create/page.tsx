import React from "react";
import ProductDetailsForm from "../../_components/forms/product-details-form";

type CreatePageProps = {};

const CreatePage: React.FC<CreatePageProps> = () => {
  return (
    <div className="max-w-screen-md w-full mx-auto">
      <h1 className="text-2xl font-semibold">Create Product</h1>

      <div className="mt-8">
        <ProductDetailsForm />
      </div>
    </div>
  );
};
export default CreatePage;
