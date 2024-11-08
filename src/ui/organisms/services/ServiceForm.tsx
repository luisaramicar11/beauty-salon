"use client";
import { ErrorResponse, FieldError, IServiceRequest } from "@/app/core/application/dto";
import { EndpointService } from "@/app/core/application/model/services.enum";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormContainer } from "./FormStyles";
import Title from "@/ui/atoms/Text/Title/Title";
import { FormField } from "@/ui/molecules";

const serviceShema = yup.object().shape({
    name: yup
       .string()
       .required("El nombre es obligatorio"),
    description: yup
       .string()
       .required("La descripción es obligatoria"),
    price: yup
       .number()
       .required("El precio es obligatorio")
       .min(0, "El precio no puede ser negativo"),
});

export const ServiceForm = () => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<IServiceRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(serviceShema),
    })

    const handleCreateService = async (data: IServiceRequest) => {
        try {
            const res = await fetch(EndpointService.CREATE_SERVICE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                throw new Error("Error creando servicio");
            } 
            const createdService = await res.json();
            console.log("servicio creado", createdService)
        } catch (error) {
            console.error("error creando servicio", error);
            handleError(error);
        }
    }

    const handleError = (error: unknown) => {
        const errorData = error as ErrorResponse;
        if (errorData && errorData.errors){
            if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
                errorData.errors.forEach((fieldError) => {
                    const { field, error } = fieldError as FieldError;
                    setError(field as keyof IServiceRequest, {
                        message: error,
                    });
                });
            }else {
                if ("message" in errorData.errors[0]) {
                    setError("name", {
                        message: errorData.errors[0].message
                    });
                }
            }
        }
    
        return (
            <FormContainer onSubmit={handleSubmit(handleCreateService)}>
                <Title size="large">Agregar Servicio</Title>
                <FormField<IServiceRequest>
                control={control}
                type="text"
                label="Nombre"
                name="name"
                error={errors.name}
                />
                <FormField<IServiceRequest>
                control={control}
                type="text"
                label="Descripción"
                name="description"
                error={errors.description}
                />
                <FormField<IServiceRequest>
                control={control}
                type="number"
                label="Precio"
                name="price"
                error={errors.price}
                />
            </FormContainer>
        );
    }
}


