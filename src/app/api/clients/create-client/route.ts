import { IClientRequest } from "@/app/core/application/dto/clients";
import { ClientService } from "@/app/infrastructure/services";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const client = new ClientService();
    try {
        const clientData: IClientRequest = await request.json();
        const res = await client.create(clientData);
        return NextResponse.json({status: 201, data: res})
    } catch (error) {
        return NextResponse.json({ status: 500, error: error});
    }
}