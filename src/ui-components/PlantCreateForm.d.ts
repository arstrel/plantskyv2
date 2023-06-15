/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlantCreateFormInputValues = {
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
export declare type PlantCreateFormValidationValues = {
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
export declare type PlantCreateFormOverridesProps = {
    PlantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type PlantCreateFormProps = React.PropsWithChildren<{
    overrides?: PlantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlantCreateFormInputValues) => PlantCreateFormInputValues;
    onSuccess?: (fields: PlantCreateFormInputValues) => void;
    onError?: (fields: PlantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlantCreateFormInputValues) => PlantCreateFormInputValues;
    onValidate?: PlantCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlantCreateForm(props: PlantCreateFormProps): React.ReactElement;
