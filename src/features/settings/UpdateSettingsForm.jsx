/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSettings from "./useSetting";
import UseUpdateSetting from "./useUpdateSetting";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLentgh,
      maxBookingLentgh,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    error,
  } = useSettings();

  const { updateSetting, isUpdating } = UseUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    console.log(value);

    if (!value) return;

    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        Minimum nights/booking
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLentgh}
          disabledi={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLentgh")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        Maximum nights/booking
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLentgh}
          disabledi={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLentgh")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        Maximum guests/booking
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabledi={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        Breakfast price
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabledi={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
