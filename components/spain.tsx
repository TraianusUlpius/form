import { useEffect, useContext } from "react";
import { Box } from "rebass";
import MaritalStatus from "../components/maritalStatus";
import SocialInsurance from "../components/socialInsurance";
import { Context } from "../pages";

const Spain = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.onChangeConfig({
      allowance: { min: 30, max: undefined },
      maritalStatus: true,
      socialInsurance: true,
      children: false,
      workingHours: false
    });
  }, []);

  return (
    <Box
      mb={3}
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "1fr 2fr"
      }}
    >
      <div>
        <MaritalStatus />
      </div>
      <div>
        <SocialInsurance />
      </div>
    </Box>
  );
};

export default Spain;
