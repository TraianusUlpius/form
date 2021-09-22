import { Fragment, useContext } from "react";
import { Box } from "rebass";
import { Label, Input, Select } from "@rebass/forms";
import { Context } from "../pages";

const Common = () => {
  const { countries, actions, state } = useContext(Context);

  return (
    <Fragment>
      <Box mb={3}>
        <Label htmlFor="name">Country of origin</Label>
        <Select
          id="country"
          name="country"
          onChange={actions.onChangeValue("country")}
        >
          {countries.map(({ name, cca2 }) => (
            <option key={cca2} value={cca2}>
              {name.common}
            </option>
          ))}
        </Select>
      </Box>
      <Box
        mb={3}
        sx={{
          display: "grid",
          gridGap: 3,
          gridTemplateColumns: "1fr 1fr"
        }}
      >
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={state.form.firstName.value}
            onChange={actions.onChangeValue("firstName")}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={state.form.lastName.value}
            onChange={actions.onChangeValue("lastName")}
          />
        </div>
      </Box>
      <Box
        mb={3}
        sx={{
          display: "grid",
          gridGap: 3,
          gridTemplateColumns: "1fr 1fr"
        }}
      >
        <div>
          <Label htmlFor="dateOfBirth">Date of birth</Label>
          <Input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={state.form.dateBirth.value}
            onChange={actions.onChangeValue("dateOfBirth")}
          />
        </div>
        <div>
          <Label htmlFor="allowance">Holiday allowance</Label>
          <Input
            type="number"
            id="allowance"
            name="allowance"
            value={state.form.allowance.value}
            max={state.allowance.max}
            min={state.allowance.min}
            onChange={actions.onChangeValue("allowance")}
          />
        </div>
      </Box>
    </Fragment>
  );
};

export default Common;
