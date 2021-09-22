import { useEffect, useContext } from "react";
import { Box } from "rebass";
import WorkingHours from "../components/workingHours";
import { Context } from "../pages";

const Brazil = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.onChangeConfig({
      allowance: { min: 0, max: 40 },
      maritalStatus: false,
      socialInsurance: false,
      children: false,
      workingHours: true
    });
  }, []);

  return (
    <Box mb={3}>
      <WorkingHours />
    </Box>
  );
};

export default Brazil;
