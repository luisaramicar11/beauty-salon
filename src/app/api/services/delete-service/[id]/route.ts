import { ServicesService } from "@/app/infrastructure/services";
import { NextResponse } from "next/server";

export const DELETE = async ({params}: {params:{id:string}}) => {
const {id} = params;

const service = new ServicesService();
try {
    const res = await service.destroy(id); 
    return NextResponse.json({status: 200, data: res})
} catch (error) {
    return NextResponse.json({ status: 500, error: error});
}
}