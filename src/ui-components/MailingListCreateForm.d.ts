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
export declare type MailingListCreateFormInputValues = {
    lastMessageSent?: string;
    email?: string;
};
export declare type MailingListCreateFormValidationValues = {
    lastMessageSent?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailingListCreateFormOverridesProps = {
    MailingListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    lastMessageSent?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailingListCreateFormProps = React.PropsWithChildren<{
    overrides?: MailingListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MailingListCreateFormInputValues) => MailingListCreateFormInputValues;
    onSuccess?: (fields: MailingListCreateFormInputValues) => void;
    onError?: (fields: MailingListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailingListCreateFormInputValues) => MailingListCreateFormInputValues;
    onValidate?: MailingListCreateFormValidationValues;
} & React.CSSProperties>;
export default function MailingListCreateForm(props: MailingListCreateFormProps): React.ReactElement;
