"use client";
import { ErrorResponse, FieldError, IServiceRequest } from "@/app/core/application/dto";
import { EndpointService } from "@/app/core/application/model/services.enum";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormContainer } from "./FormStyles";
import Title from "@/ui/atoms/Text/Title/Title";
import { FormField } from "@/ui/molecules";
import { IContent } from "@/app/core/application/dto";
import { useEffect } from "react";
import Button from "@/ui/atoms/Buttton/Button";
import { useTheme } from 'styled-components';
import { useRouter } from "next/navigation";
interface IServicesFormProps {
    initialData?: IContent | null;
    onClose: () => void;
}

const initialServiceData = {
    name: "",
    description: "",
    price: 0,
};

const serviceShema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    description: yup.string().required("La descripción es obligatoria"),
    price: yup
        .number()
        .required("El precio es obligatorio")
        .min(0, "El precio no puede ser negativo"),
});

export const ServiceForm = ({ initialData, onClose }: IServicesFormProps) => {
    const {
        control,
        handleSubmit,
        setError,
        setValue,
        formState: { errors },
    } = useForm<IServiceRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(serviceShema),
        defaultValues: initialServiceData,
    });
    
    const theme = useTheme();
    const router = useRouter();
    // Rellenar el formulario con los valores iniciales (si existen)
    useEffect(() => {
        if (initialData) {
            setValue("name", initialData.name);
            setValue("description", initialData.description);
            setValue("price", initialData.price);
        }
    }, [initialData, setValue]);

    // Función para crear un servicio
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
            onClose();
            console.log("Servicio creado", createdService);
        } catch (error) {
            console.error("Error creando servicio", error);
            handleError(error);
        }
    };

    // Función para actualizar un servicio
    const handleUpdateService = async (data: IServiceRequest) => {
        const id = (initialData?.id)?.toString();  
         if (!id) {
             throw new Error("Servicio no encontrado o sin ID");
         }

        try {
            const res = await fetch(EndpointService.UPDATE_SERVICE.replace(":id", id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                throw new Error("Error actualizando servicio");
            }
            const updatedService = await res.json();
            router.refresh();
            onClose();
            console.log("Servicio actualizado", updatedService);
        } catch (error) {
            console.error("Error actualizando servicio", error);
            handleError(error);
        }
    };

    // Función para manejar errores de validación y mostrarlos
    const handleError = (error: unknown) => {
        const errorData = error as ErrorResponse;
        if (errorData && errorData.errors) {
            if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
                errorData.errors.forEach((fieldError) => {
                    const { field, error } = fieldError as FieldError;
                    setError(field as keyof IServiceRequest, {
                        message: error,
                    });
                });
            } else {
                if ("message" in errorData.errors[0]) {
                    setError("name", {
                        message: errorData.errors[0].message,
                    });
                }
            }
        }
    };

    // Función para manejar el submit del formulario, decide si crear o actualizar
    const onSubmit = async (data: IServiceRequest) => {
        if (initialData) {
            handleUpdateService(data);
        } else {
            handleCreateService(data);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Title size="large">{initialData ? "Editar Servicio" : "Agregar Servicio"}</Title>

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

            <Button
                type="submit"
                bgColor={theme.colors.buttonPink}
                textColor={theme.colors.textWhite}
            >
                {initialData ? "Actualizar" : "Agregar"}
            </Button>
        </FormContainer>
    );
};



