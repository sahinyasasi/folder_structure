export const validationService = {
  validateRegisterUserDetails,
  updateValObjWithError,
  updateValObjWithVal,
  validatePostAd,
  validateLoginUserDetails
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
function validateLoginUserDetails(loginVals) {
  let isValid = true;
  let loginErrorVals = { ...loginVals };

  if (!(loginVals.email && loginVals.email.value)) {
    loginErrorVals = {
      ...loginErrorVals,
      email: updateValObjWithError(`Email ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (!(loginVals.password && loginVals.password.value)) {
    loginErrorVals = {
      ...loginErrorVals,
      password: updateValObjWithError(`Password ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (isValid) {
    return { isValid };
  } else {
    return { isValid, loginErrorVals };
  }


}

function validatePostAd(postAd) {
  let isValid = true;
  const regex = /^([0-9]){4,6}$/;

  let postAdErrorVals = { ...postAd };
  console.log(postAd);
  console.log("(fileName)========================== 0", postAdErrorVals);
  // let postAdSellerDetailsErrorVals = { ...postAd.seller_details };
  // let errorVals;

  if (!(postAd.asking_price && postAd.asking_price.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      asking_price: updateValObjWithError(`Asking Price ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (!(postAd.location && postAd.location.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      location: updateValObjWithError(`Location ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (!postAd.features) {
    postAdErrorVals = {
      ...postAdErrorVals,
      features: updateValObjWithError(
        `Make sure some of the vehicle features are selected!`
      ),
    };
    isValid = false;
  }
  /*
  if (postAd.images.length === 0 && !postAd.images.value) {
    postAdErrorVals = {
      ...postAdErrorVals,
      images: updateValObjWithError(
        `Make sure the vehicle images are uploaded!`
      ),
    };
    isValid = false;
  }*/

  if (!(postAd.brand && postAd.brand.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      brand: updateValObjWithError(`Brand ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.model && postAd.model.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      model: updateValObjWithError(`Model ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.variant && postAd.variant.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      variant: updateValObjWithError(`Variant ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.year && postAd.year.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      year: updateValObjWithError(`Year ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.condition && postAd.condition.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      condition: updateValObjWithError(`Condition ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.fuel_type && postAd.fuel_type.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      fuel_type: updateValObjWithError(`FuelType ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.no_of_owners && postAd.no_of_owners.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      no_of_owners: updateValObjWithError(`NoOfOwners ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.seller_name && postAd.seller_name.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      seller_name: updateValObjWithError(`Seller's Name ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.seller_phone && postAd.seller_phone.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      seller_phone: updateValObjWithError(`Seller's Phone ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.seller_email && postAd.seller_email.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      seller_email: updateValObjWithError(`Seller's Email ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.body_type && postAd.body_type.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      body_type: updateValObjWithError(`BodyType ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.transmission && postAd.transmission.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      transmission: updateValObjWithError(`Transmission ${mandatoryText}!`),
    };
    isValid = false;
  }
  if (!(postAd.km_driven && postAd.km_driven.value)) {
    postAdErrorVals = {
      ...postAdErrorVals,
      km_driven: updateValObjWithError(`KmDriven ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (isValid) {
    return { isValid };
  } else {
    return { isValid, postAdErrorVals };
  }
}
