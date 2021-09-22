type Allowance = {
  max: number;
  min: number;
};

type Field = {
  value: number | string;
  enabled: boolean;
};

type Form = {
  country: Field;
  firstName: Field;
  lastName: Field;
  dateBirth: Field;
  allowance: Field;
  maritalStatus: Field;
  children: Field;
  socialInsurance: Field;
  workingHours: Field;
};

export type ConfigPayloadType = {
  allowance: Allowance;
  maritalStatus: boolean;
  children: boolean;
  socialInsurance: boolean;
  workingHours: boolean;
};

export type Action =
  | {
      type: "form/workingHours" | "form/socialInsurance" | "form/maritalStatus";
      payload: number | string;
    }
  | {
      type:
        | "form/country"
        | "form/allowance"
        | "form/numberOfChildren"
        | "form/firstName"
        | "form/lastName"
        | "form/dateOfBirth";
      payload: string;
    }
  | {
      type: "config/set";
      payload: ConfigPayloadType;
    };

export type StateType = {
  allowance: Allowance;
  form: Form;
};

export const initialState: StateType = {
  allowance: {
    max: undefined,
    min: 0
  },
  form: {
    country: { value: "", enabled: true },
    firstName: { value: "", enabled: true },
    lastName: { value: "", enabled: true },
    dateBirth: { value: "", enabled: true },
    allowance: { value: "", enabled: true },
    maritalStatus: { value: "", enabled: false },
    children: { value: "", enabled: false },
    socialInsurance: { value: "", enabled: false },
    workingHours: { value: "", enabled: false }
  }
};

export const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case "form/country":
      return {
        ...state,
        form: {
          ...state.form,
          country: { ...state.form.country, value: action.payload }
        }
      };
    case "form/allowance":
      return {
        ...state,
        form: {
          ...state.form,
          allowance: { ...state.form.allowance, value: action.payload }
        }
      };
    case "form/numberOfChildren":
      return {
        ...state,
        form: {
          ...state.form,
          children: { ...state.form.children, value: action.payload }
        }
      };
    case "form/firstName":
      return {
        ...state,
        form: {
          ...state.form,
          firstName: { ...state.form.firstName, value: action.payload }
        }
      };
    case "form/lastName":
      return {
        ...state,
        form: {
          ...state.form,
          lastName: { ...state.form.lastName, value: action.payload }
        }
      };
    case "form/dateOfBirth":
      return {
        ...state,
        form: {
          ...state.form,
          dateBirth: { ...state.form.dateBirth, value: action.payload }
        }
      };
    case "form/workingHours":
      return {
        ...state,
        form: {
          ...state.form,
          workingHours: {
            enabled: true,
            value: action.payload
          }
        }
      };
    case "form/socialInsurance":
      return {
        ...state,
        form: {
          ...state.form,
          socialInsurance: {
            enabled: true,
            value: action.payload
          }
        }
      };
    case "form/maritalStatus":
      return {
        ...state,
        form: {
          ...state.form,
          maritalStatus: {
            enabled: true,
            value: action.payload
          }
        }
      };
    case "config/set":
      return {
        ...state,
        allowance: {
          min: action.payload.allowance.min,
          max: action.payload.allowance.max
        },
        form: {
          ...state.form,
          maritalStatus: { value: "", enabled: action.payload.maritalStatus },
          children: { value: "", enabled: action.payload.children },
          socialInsurance: {
            value: "",
            enabled: action.payload.socialInsurance
          },
          workingHours: { value: "", enabled: action.payload.workingHours }
        }
      };
    default:
      throw new Error();
  }
};

export const actions = (dispatch) => ({
  onChangeValue: (field) => (e) => {
    dispatch({ type: `form/${field}`, payload: e.target.value });
  },
  onChangeConfig: (payload) => dispatch({ type: `config/set`, payload })
});
