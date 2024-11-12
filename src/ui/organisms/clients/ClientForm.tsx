"use client";
import { ErrorResponse, FieldError } from "@/app/core/application/dto";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormContainer } from "./FormStyles";
import Title from "@/ui/atoms/Text/Title/Title";
import { FormField } from "@/ui/molecules";
import { useEffect } from "react";
import Button from "@/ui/atoms/Buttton/Button";
import { useTheme } from 'styled-components';
import { useRouter } from "next/navigation";
import { IClientRequest, IContent } from "@/app/core/application/dto/clients";
import { EndpointClients } from "@/app/core/application/model/clients.enum";

interface IClientsFormProps {
    initialData?: IContent | null;
    onClose: () => void;
}

const initialClientsData = {
    firstName: "",
    lastName:  "",
    email:     "",
    phone:     ""
};

const clientsSchema = yup.object().shape({
    firstName: yup.string().required("El nombre es obligatorio"),
    lastName: yup.string().required("El apellido es obligatorio"),
    email: yup.string().email("El correo es inválido").required("El correo es obligatorio"),
    phone: yup
        .string()
        .required("El teléfono es obligatorio")
        .min(10, "El teléfono debe tener como mínimo 10 caracteres"),
});

export const ClientForm = ({ initialData, onClose }: IClientsFormProps) => {
    const {
        control,
        handleSubmit,
        setError,
        setValue,
        formState: { errors },
    } = useForm<IClientRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(clientsSchema),
        defaultValues: initialClientsData,
    });
    
    const theme = useTheme();
    const router = useRouter();
    // Rellenar el formulario con los valores iniciales (si existen)
    useEffect(() => {
        if (initialData) {
            setValue("firstName", initialData.firstName);
            setValue("lastName", initialData.lastName);
            setValue("email", initialData.email);
            setValue("phone", initialData.phone);
        }
    }, [initialData, setValue]);

    // Función para crear un servicio
    const handleCreateClient = async (data: IClientRequest) => {
        try {
            const res = await fetch(EndpointClients.CREATE_CLIENT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                throw new Error("Error creando cliente");
            }
            const createdClient= await res.json();
            onClose();
            console.log("Cliente creado", createdClient);
        } catch (error) {
            console.error("Error creando cliente", error);
            handleError(error);
        }
    };

    // Función para actualizar un servicio
    const handleUpdateClient = async (data: IClientRequest) => {
        const id = (initialData?.id)?.toString();  
         if (!id) {
             throw new Error("Cliente no encontrado o sin ID");
         }

        try {
            const res = await fetch(EndpointClients.UPDATE_CLIENT.replace(":id", id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                throw new Error("Error actualizando cliente");
            }
            const updatedClient = await res.json();
            router.refresh();
            onClose();
            console.log("Cliente actualizado", updatedClient);
        } catch (error) {
            console.error("Error actualizando cliente", error);
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
                    setError(field as keyof IClientRequest, {
                        message: error,
                    });
                });
            } else {
                if ("message" in errorData.errors[0]) {
                    setError("firstName", {
                        message: errorData.errors[0].message,
                    });
                }
            }
        }
    };

    // Función para manejar el submit del formulario, decide si crear o actualizar
    const onSubmit = async (data: IClientRequest) => {
        if (initialData) {
            handleUpdateClient(data);
        } else {
            handleCreateClient(data);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Title size="large">{initialData ? "Editar Cliente" : "Agregar Cliente"}</Title>

            <FormField<IClientRequest>
                control={control}
                type="text"
                label="FirstName"
                name="firstName"
                error={errors.firstName}
            />

            <FormField<IClientRequest>
                control={control}
                type="text"
                label="LastName"
                name="lastName"
                error={errors.lastName}
            />

            <FormField<IClientRequest>
                control={control}
                type="email"
                label="Email"
                name="email"
                error={errors.email}
            />

            <FormField<IClientRequest>
                control={control}
                type="text"
                label="Phone"
                name="phone"
                error={errors.phone}
            />

            <Button
                type="submit"
                bgColor={theme.colors.buttonPink}
                textColor={theme.colors.textWhite}
                width={500}
            >
                {initialData ? "Actualizar" : "Agregar"}
            </Button>
        </FormContainer>
    );
};