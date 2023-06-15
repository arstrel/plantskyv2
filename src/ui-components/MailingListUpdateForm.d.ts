/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MailingList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MailingListUpdateFormInputValues = {
    lastMessageSent?: string;
    email?: string;
};
export declare type MailingListUpdateFormValidationValues = {
    lastMessageSent?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailingListUpdateFormOverridesProps = {
    MailingListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    lastMessageSent?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailingListUpdateFormProps = React.PropsWithChildren<{
    overrides?: MailingListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mailingList?: MailingList;
    onSubmit?: (fields: MailingListUpdateFormInputValues) => MailingListUpdateFormInputValues;
    onSuccess?: (fields: MailingListUpdateFormInputValues) => void;
    onError?: (fields: MailingListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailingListUpdateFormInputValues) => MailingListUpdateFormInputValues;
    onValidate?: MailingListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MailingListUpdateForm(props: MailingListUpdateFormProps): React.ReactElement;
