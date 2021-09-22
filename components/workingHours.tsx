import { Fragment, useContext } from "react";
import { Label, Input } from "@rebass/forms";
import { Context } from "../pages";

const WorkingHours = () => {
  const { state, actions } = useContext(Context);

  return (
    <Fragment>
      <Label htmlFor="workingHours">Working Hours</Label>
      <Input
        id="workingHours"
        name="workingHours"
        type="number"
        value={state.form.workingHours.value}
        onChange={actions.onChangeValue("workingHours")}
      />
    </Fragment>
  );
};

export default WorkingHours;
