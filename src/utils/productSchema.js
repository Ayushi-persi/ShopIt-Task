import * as Yup from "yup";

export const productSchema = Yup.object({
  title: Yup.string().required("Name is required"),
  quantity: Yup.string().required("Quantity is required"),
  category: Yup.string().required("Category is required"),
  //   image: Yup.string().required("Image URL is required"),
  price: Yup.number().required("Price is required"),
  offerPrice: Yup.number().required("Offer Price is required"),
  //   color: Yup.string().required("Color is required"),
});
