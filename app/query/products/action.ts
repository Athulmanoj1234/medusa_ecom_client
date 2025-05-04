import { publishableApiKey, serverUrl } from "@/app/contants";
import { ProductInfoResponse } from "./products.types";
import { ParamValue } from "next/dist/server/request/params";

export async function getProductById(id: ParamValue): Promise<ProductInfoResponse> {

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