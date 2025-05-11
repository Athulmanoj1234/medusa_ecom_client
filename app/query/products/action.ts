import { publishableApiKey, serverUrl } from "@/app/contants";
import { ProductInfoResponse } from "./products.types";
import { ParamValue } from "next/dist/server/request/params";
import qs from "qs";

export async function getProductById(id: ParamValue): Promise<ProductInfoResponse> {

        const res = await fetch(`${serverUrl}/store/getproduct/${id}`, {
            headers: {
            "x-publishable-api-key": publishableApiKey!,
            },
            cache: "no-cache",
        });
    
        // if(res.status !== ok) {
        const productInfoResponse = await res.json();
        console.log("proudct-response", productInfoResponse);
        return productInfoResponse;
         
    // }
}

export async function getRelatedProducts(productId: string): Promise<ProductInfoResponse[]> {
    

    console.log("productId", productId);
    const res = await fetch(`${serverUrl}/store/getrelatedproducts/${productId}`, {
        cache: "no-cache",
        headers: {
            "x-publishable-api-key": publishableApiKey!,
        }, 
    });
    
    const relatedProducts = await res.json();
    return relatedProducts;
}