/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Plant } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlantUpdateFormInputValues = {
    name?: string;
    location?: string;
    detailsURL?: string;
    description?: string;
    lastWatered?: string;
    nextWater?: string;
    belongsTo?: string;
    firstNotificationSentAt?: string;
    waterIntervalDays?: number;
};
export declare type PlantUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    detailsURL?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    lastWatered?: ValidationFunction<string>;
    nextWater?: ValidationFunction<string>;
    belongsTo?: ValidationFunction<string>;
    firstNotificationSentAt?: ValidationFunction<string>;
    waterIntervalDays?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlantUpdateFormOverridesProps = {
    PlantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    detailsURL?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    lastWatered?: PrimitiveOverrideProps<TextFieldProps>;
    nextWater?: PrimitiveOverrideProps<TextFieldProps>;
    belongsTo?: PrimitiveOverrideProps<TextFieldProps>;
    firstNotificationSentAt?: PrimitiveOverrideProps<TextFieldProps>;
    waterIntervalDays?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlantUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    plant?: Plant;
    onSubmit?: (fields: PlantUpdateFormInputValues) => PlantUpdateFormInputValues;
    onSuccess?: (fields: PlantUpdateFormInputValues) => void;
    onError?: (fields: PlantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlantUpdateFormInputValues) => PlantUpdateFormInputValues;
    onValidate?: PlantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlantUpdateForm(props: PlantUpdateFormProps): React.ReactElement;
