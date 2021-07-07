export const validationService = {
  validateRegisterUserDetails,
  updateValObjWithError,
  updateValObjWithVal,
};

const mandatoryText = "field cannot be empty";
const valObj = { value: "", error: false, errorText: "" };
function updateValObjWithVal(data) {
  if (data && data.value) {
    return {
      ...valObj,
      value: data.value,
    };
  } else {
    return {
      ...valObj,
      value: "",
    };
  }
}

function updateValObjWithError(errorText) {
  return {
    ...valObj,
    value: "",
    error: true,
    errorText: errorText,
  };
}

function validateRegisterUserDetails(registerVals) {
  // console.log("(registerVals)========================== ", registerVals );
  let isValid = true;
  let registerErrorVals = { ...registerVals };

  if (!(registerVals.email && registerVals.email.value)) {
    registerErrorVals = {
      ...registerErrorVals,
      email: updateValObjWithError(`Email ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (!(registerVals.phone && registerVals.phone.value)) {
    registerErrorVals = {
      ...registerErrorVals,
      phone: updateValObjWithError(`Phone ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (!(registerVals.password && registerVals.password.value)) {
    registerErrorVals = {
      ...registerErrorVals,
      password: updateValObjWithError(`Password ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (!(registerVals.first_name && registerVals.first_name.value)) {
    registerErrorVals = {
      ...registerErrorVals,
      first_name: updateValObjWithError(`First Name ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(registerVals.last_name && registerVals.last_name.value)) {
    registerErrorVals = {
      ...registerErrorVals,
      last_name: updateValObjWithError(`Last Name ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (!(registerVals.login_id && registerVals.login_id.value)) {
    registerErrorVals = {
      ...registerErrorVals,
      login_id: updateValObjWithError(`Login Id ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (isValid) {
    return { isValid };
  } else {
    return { isValid, registerErrorVals };
  }
}
