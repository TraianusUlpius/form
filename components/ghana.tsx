import { useEffect, useContext } from "react";
import { Box } from "rebass";
import MaritalStatus from "../components/maritalStatus";
import NumberOfChildren from "../components/numberOfChildren";
import { Context } from "../pages";

const Ghana = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.onChangeConfig({
      allowance: { min: 0, max: undefined },
      maritalStatus: true,
      socialInsurance: false,
      children: true,
      workingHours: false
    });
  }, []);

  return (
    <Box
      mb={3}
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "1fr 1fr"
      }}
    >
      <div>
        <MaritalStatus />
      </div>
      <div>
        <NumberOfChildren />
      </div>
    </Box>
  );
};

export default Ghana;
