/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Plant } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PlantCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    location: "",
    detailsURL: "",
    description: "",
    lastWatered: "",
    nextWater: "",
    belongsTo: "",
    firstNotificationSentAt: "",
    waterIntervalDays: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [location, setLocation] = React.useState(initialValues.location);
  const [detailsURL, setDetailsURL] = React.useState(initialValues.detailsURL);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [lastWatered, setLastWatered] = React.useState(
    initialValues.lastWatered
  );
  const [nextWater, setNextWater] = React.useState(initialValues.nextWater);
  const [belongsTo, setBelongsTo] = React.useState(initialValues.belongsTo);
  const [firstNotificationSentAt, setFirstNotificationSentAt] = React.useState(
    initialValues.firstNotificationSentAt
  );
  const [waterIntervalDays, setWaterIntervalDays] = React.useState(
    initialValues.waterIntervalDays
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setLocation(initialValues.location);
    setDetailsURL(initialValues.detailsURL);
    setDescription(initialValues.description);
    setLastWatered(initialValues.lastWatered);
    setNextWater(initialValues.nextWater);
    setBelongsTo(initialValues.belongsTo);
    setFirstNotificationSentAt(initialValues.firstNotificationSentAt);
    setWaterIntervalDays(initialValues.waterIntervalDays);
    setErrors({});
  };
  const validations = {
    name: [],
    location: [],
    detailsURL: [],
    description: [],
    lastWatered: [],
    nextWater: [],
    belongsTo: [{ type: "Email" }],
    firstNotificationSentAt: [],
    waterIntervalDays: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          location,
          detailsURL,
          description,
          lastWatered,
          nextWater,
          belongsTo,
          firstNotificationSentAt,
          waterIntervalDays,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Plant(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlantCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              location,
              detailsURL,
              description,
              lastWatered,
              nextWater,
              belongsTo,
              firstNotificationSentAt,
              waterIntervalDays,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              location: value,
              detailsURL,
              description,
              lastWatered,
              nextWater,
              belongsTo,
              firstNotificationSentAt,
              waterIntervalDays,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Details url"
        isRequired={false}
        isReadOnly={false}
        value={detailsURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              location,
              detailsURL: value,
              description,
              lastWatered,
              nextWater,
              belongsTo,
              firstNotificationSentAt,
              waterIntervalDays,
            };
            const result = onChange(modelFields);
            value = result?.detailsURL ?? value;
          }
          if (errors.detailsURL?.hasError) {
            runValidationTasks("detailsURL", value);
          }
          setDetailsURL(value);
        }}
        onBlur={() => runValidationTasks("detailsURL", detailsURL)}
        errorMessage={errors.detailsURL?.errorMessage}
        hasError={errors.detailsURL?.hasError}
        {...getOverrideProps(overrides, "detailsURL")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              location,
              detailsURL,
              description: value,
              lastWatered,
              nextWater,
              belongsTo,
              firstNotificationSentAt,
              waterIntervalDays,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Last watered"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={lastWatered && convertToLocal(new Date(lastWatered))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              location,
              detailsURL,
              description,
              lastWatered: value,
              nextWater,
              belongsTo,
              firstNotificationSentAt,
              waterIntervalDays,
            };
            const result = onChange(modelFields);
            value = result?.lastWatered ?? value;
          }
          if (errors.lastWatered?.hasError) {
            runValidationTasks("lastWatered", value);
          }
          setLastWatered(value);
        }}
        onBlur={() => runValidationTasks("lastWatered", lastWatered)}
        errorMessage={errors.lastWatered?.errorMessage}
        hasError={errors.lastWatered?.hasError}
        {...getOverrideProps(overrides, "lastWatered")}
      ></TextField>
      <TextField
        label="Next water"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={nextWater && convertToLocal(new Date(nextWater))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              location,
              detailsURL,
              description,
              lastWatered,
              nextWater: value,
              belongsTo,
              firstNotificationSentAt,
              waterIntervalDays,
            };
            const result = onChange(modelFields);
            value = result?.nextWater ?? value;
          }
          if (errors.nextWater?.hasError) {
            runValidationTasks("nextWater", value);
          }
          setNextWater(value);
        }}
        onBlur={() => runValidationTasks("nextWater", nextWater)}
        errorMessage={errors.nextWater?.errorMessage}
        hasError={errors.nextWater?.hasError}
        {...getOverrideProps(overrides, "nextWater")}
      ></TextField>
      <TextField
        label="Belongs to"
        isRequired={false}
        isReadOnly={false}
        value={belongsTo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              location,
              detailsURL,
              description,
              lastWatered,
              nextWater,
              belongsTo: value,
              firstNotificationSentAt,
              waterIntervalDays,
            };
            const result = onChange(modelFields);
            value = result?.belongsTo ?? value;
          }
          if (errors.belongsTo?.hasError) {
            runValidationTasks("belongsTo", value);
          }
          setBelongsTo(value);
        }}
        onBlur={() => runValidationTasks("belongsTo", belongsTo)}
        errorMessage={errors.belongsTo?.errorMessage}
        hasError={errors.belongsTo?.hasError}
        {...getOverrideProps(overrides, "belongsTo")}
      ></TextField>
      <TextField
        label="First notification sent at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          firstNotificationSentAt &&
          convertToLocal(new Date(firstNotificationSentAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              location,
              detailsURL,
              description,
              lastWatered,
              nextWater,
              belongsTo,
              firstNotificationSentAt: value,
              waterIntervalDays,
            };
            const result = onChange(modelFields);
            value = result?.firstNotificationSentAt ?? value;
          }
          if (errors.firstNotificationSentAt?.hasError) {
            runValidationTasks("firstNotificationSentAt", value);
          }
          setFirstNotificationSentAt(value);
        }}
        onBlur={() =>
          runValidationTasks("firstNotificationSentAt", firstNotificationSentAt)
        }
        errorMessage={errors.firstNotificationSentAt?.errorMessage}
        hasError={errors.firstNotificationSentAt?.hasError}
        {...getOverrideProps(overrides, "firstNotificationSentAt")}
      ></TextField>
      <TextField
        label="Water interval days"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={waterIntervalDays}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              location,
              detailsURL,
              description,
              lastWatered,
              nextWater,
              belongsTo,
              firstNotificationSentAt,
              waterIntervalDays: value,
            };
            const result = onChange(modelFields);
            value = result?.waterIntervalDays ?? value;
          }
          if (errors.waterIntervalDays?.hasError) {
            runValidationTasks("waterIntervalDays", value);
          }
          setWaterIntervalDays(value);
        }}
        onBlur={() =>
          runValidationTasks("waterIntervalDays", waterIntervalDays)
        }
        errorMessage={errors.waterIntervalDays?.errorMessage}
        hasError={errors.waterIntervalDays?.hasError}
        {...getOverrideProps(overrides, "waterIntervalDays")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
