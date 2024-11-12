import { IClientRequest } from "@/app/core/application/dto/clients";
import { ClientService } from "@/app/infrastructure/services";
import { NextResponse } from "next/server";

export const PUT = async (request: Request, {params}: {params:{id:string}}) => {
    console.log(params)
    const {id} = params;
    const idNumber = parseInt(id, 10);

const client = new ClientService();
try {
    const clientData: IClientRequest = await request.json();
    const res = await client.update(idNumber, clientData)
    return NextResponse.json({status: 200, data: res})
} catch (error) {
    return NextResponse.json({ status: 500, error: error});
}
}