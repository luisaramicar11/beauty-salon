import { ClientService } from "@/app/infrastructure/services";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request,{ params }: { params: { id: string } }) => {
    try {
      console.log("params", params);
      const id:string = params?.id;
  
      if (!id) {
        return NextResponse.json({ status: 400, error: "ID no proporcionado" });
      }
  
      const idNumber = parseInt(id, 10);
  
      if (isNaN(idNumber)) {
        return NextResponse.json({ status: 400, error: "ID inválido" });
      }
  
      const client = new ClientService();
      await client.destroy(idNumber)
  
      return NextResponse.json({ status: 200 });
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);  
      return NextResponse.json({ status: 500, error: "Error al eliminar el cliente" });
    }
  };