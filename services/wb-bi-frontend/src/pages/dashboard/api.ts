import { axiosInstance } from "../../app/apiClient";
import type { ProductResponse } from "../../components/product/types";

export const getAllProducts = async (): Promise<ProductResponse[] | unknown> => {
    try {

        const products = await axiosInstance.get('/products/all')
        console.log(products, 'PRODUCTS')
        return (await axiosInstance.get('/products/all'))?.data?.products
    } catch(err) {
        
    }
}