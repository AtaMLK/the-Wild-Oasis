/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";

import UseEditCabin from "./UseEditCabin";
import UseCreateCabin from "./useCreateCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValue } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });
  const { errors } = formState;
  const { createCabin, isCreating } = UseCreateCabin();
  const { editCabin, isEditinig } = UseEditCabin();

  const isWorking = isCreating || isEditinig;

  function OnSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        { onSuccess: (data) => reset() }
      );
    else
      createCabin({ ...data, image: image }, { onSuccess: (data) => reset() });

    console.log(data);
  }

  function onError(errors) {
    /*  console.log(errors); */
  }

  return (
    <Form onSubmit={handleSubmit(OnSubmit, onError)}>
      <FormRow lable="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow lable="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow lable="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "regularPrice should be at least 100",
            },
          })}
        />
      </FormRow>

      <FormRow lable="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: () =>
              Number(getValues().discount) <=
                Number(getValues().regularPrice) ||
              "The discount should be less than the price",
          })}
        />
      </FormRow>

      <FormRow
        lable="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow lable="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create New Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
