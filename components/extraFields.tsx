import { Fragment, useEffect, useContext } from "react";
import Spain from "./spain";
import Brazil from "./brazil";
import Ghana from "./ghana";
import { Context } from "../pages";

const ExtraFields = () => {
  const { actions, state } = useContext(Context);
  const country = state.form.country.value;

  useEffect(() => {
    if (country !== "BR" && country !== "GH" && country !== "ES") {
      actions.onChangeConfig({
        allowance: { min: 0, max: undefined },
        maritalStatus: false,
        socialInsurance: false,
        children: false,
        workingHours: false
      });
    }
  }, [country]);

  return (
    <Fragment>
      {country === "ES" && <Spain />}
      {country === "BR" && <Brazil />}
      {country === "GH" && <Ghana />}
    </Fragment>
  );
};

export default ExtraFields;
