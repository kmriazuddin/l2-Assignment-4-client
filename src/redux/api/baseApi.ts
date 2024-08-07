import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mks-server.vercel.app/api/v1",
  }),

  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => {
        const params = new URLSearchParams(filters).toString();
        return {
          url: `/product?${params}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    addProducts: builder.mutation({
      query: (product) => {
        console.log("Insert Data ==>", product);
        return {
          url: "/product/create-product",
          method: "POST",
          body: product,
        };
      },
      invalidatesTags: ["products"],
    }),
    updateSingleProducts: builder.mutation({
      query: (options) => {
        return {
          url: `/product/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    addOrders: builder.mutation({
      query: (order) => {
        return {
          url: "/order/create-order",
          method: "POST",
          body: order,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductsMutation,
  useUpdateSingleProductsMutation,
  useDeleteProductsMutation,
  useAddOrdersMutation,
} = baseApi;
