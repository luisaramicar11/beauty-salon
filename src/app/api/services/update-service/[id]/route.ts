import { IServiceRequest } from "@/app/core/application/dto";
import { ServicesService } from "@/app/infrastructure/services";
import { NextResponse } from "next/server";

export const UPDATE = async (request: Request, {params}: {params:{id:string}}) => {
const {id} = params;

const service = new ServicesService();
try {
    const serviceData: IServiceRequest = await request.json();
    const res = await service.update(id, serviceData); 
    return NextResponse.json({status: 200, data: res})
} catch (error) {
    return NextResponse.json({ status: 500, error: error});
}
}