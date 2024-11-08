import { ServicesService } from "@/app/infrastructure/services";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request,{ params }: { params: { id: string } }) => {
  try {
    console.log("params", params);
    const id:string = params?.id;

    if (!id) {
      return NextResponse.json({ status: 400, error: "ID no proporcionado" });
    }

    const idNumber = parseInt(id, 10);

    // Verifica que la conversión fue exitosa
    if (isNaN(idNumber)) {
      return NextResponse.json({ status: 400, error: "ID inválido" });
    }

    const service = new ServicesService();
    await service.destroy(idNumber);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error al eliminar servicio:", error);  // Imprimir más detalles en el servidor
    return NextResponse.json({ status: 500, error: "Error al eliminar el servicio" });
  }
};
