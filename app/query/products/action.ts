import { publishableApiKey, serverUrl } from "@/app/contants";
import { ProductInfoResponse } from "./products.types";

export async function getProductById(id: string): Promise<ProductInfoResponse> {

    const res = await fetch(`${serverUrl}/store/getproduct/${id}`, {
        headers: {
            "x-publishable-api-key": publishableApiKey!,
        }
    });
    // if(res.status !== ok) {
        const productInfoResponse = await res.json();
        console.log(productInfoResponse);
        return productInfoResponse;
    // }
}