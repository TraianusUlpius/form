import { createContext, useReducer, SyntheticEvent } from "react";
import { Box } from "rebass";
import { Button } from "theme-ui";
import {
  reducer,
  actions,
  initialState,
  StateType,
  ConfigPayloadType
} from "../store";
import Common from "../components/common";
import ExtraFields from "../components/extraFields";

type Context = {
  countries: { name: { common: string }; cca2: string }[];
  state: StateType;
  actions: {
    onChangeValue: (field: string) => (e: SyntheticEvent) => void;
    onChangeConfig: (payload: ConfigPayloadType) => void;
  };
};

export const Context = createContext<Context>(undefined);

const Index = ({ countries }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = () => {
    const result = Object.keys(state.form).reduce((a, c) => {
      return state.form[c].enabled
        ? {
            ...a,
            [c]: state.form[c].value
          }
        : a;
    }, {});

    console.log(result);
  };

  const onValidateForm = () => {
    const values = Object.keys(state.form).filter(
      (key) =>
        state.form[key].enabled &&
        (!state.form[key].value ||
          state.form[key].value === "" ||
          state.form.allowance.value < state.allowance.min ||
          state.form.allowance.value > state.allowance.max)
    );

    return values.length !== 0;
  };

  return (
    <Context.Provider value={{ countries, state, actions: actions(dispatch) }}>
      <Box
        mt={5}
        sx={{
          maxWidth: 960,
          mx: "auto",
          px: 3
        }}
      >
        <Common />
        <ExtraFields />
        <Button
          disabled={onValidateForm()}
          onClick={onSubmit}
          sx={{
            cursor: "pointer"
          }}
        >
          Submit
        </Button>
      </Box>
    </Context.Provider>
  );
};

export async function getStaticProps() {
  const request = await fetch("https://restcountries.com/v3/all");

  const countries = await request.json();

  return {
    props: { countries: countries ? countries : [] }
  };
}

export default Index;
