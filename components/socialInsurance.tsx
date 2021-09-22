import { Fragment, useContext } from "react";
import { Label, Input } from "@rebass/forms";
import { Context } from "../pages";

const SocialInsuranceNumber = () => {
  const { state, actions } = useContext(Context);

  return (
    <Fragment>
      <Label htmlFor="socialInsurance">Social Insurance Number</Label>
      <Input
        id="socialInsurance"
        name="socialInsurance"
        value={state.form.socialInsurance.value}
        onChange={actions.onChangeValue("socialInsurance")}
      />
    </Fragment>
  );
};

export default SocialInsuranceNumber;
