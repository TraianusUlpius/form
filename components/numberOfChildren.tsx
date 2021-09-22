import { Fragment, useContext } from "react";
import { Label, Input } from "@rebass/forms";
import { Context } from "../pages";

const NumberOfChildren = () => {
  const { state, actions } = useContext(Context);

  return (
    <Fragment>
      <Label htmlFor="numberofchildren">Number of children</Label>
      <Input
        id="numberOfChildren"
        name="numberOfChildren"
        value={state.form.children.value || ""}
        onChange={actions.onChangeValue("numberOfChildren")}
      />
    </Fragment>
  );
};

export default NumberOfChildren;
