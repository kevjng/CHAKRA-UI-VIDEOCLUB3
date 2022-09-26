export const validarCampos = (campos) => {
  // let invalid = false;
  // campos.map((campo) => campo === "" ? invalid = true : invalid = false)
  // return invalid
  return campos.some((campo) => campo === "");
};

