import { IServiceRequest } from "@/app/core/application/dto";
import { ServicesService } from "@/app/infrastructure/services"
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const service = new ServicesService();
    try {
        const serviceData: IServiceRequest = await request.json();
        const res = await service.create(serviceData);
        return NextResponse.json({status: 201, data: res})
    } catch (error) {
        return NextResponse.json({ status: 500, error: error});
    }
}