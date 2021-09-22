import { Fragment, useContext } from "react";
import { Label, Input } from "@rebass/forms";
import { Context } from "../pages";

const MaritalStatus = () => {
  const { state, actions } = useContext(Context);

  return (
    <Fragment>
      <Label htmlFor="maritalStatus">Marital Status</Label>
      <Input
        id="maritalStatus"
        name="maritalStatus"
        value={state.form.maritalStatus.value}
        onChange={actions.onChangeValue("maritalStatus")}
      />
    </Fragment>
  );
};

export default MaritalStatus;
