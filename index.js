export const myName = "Nyein";
export const showMyName = () => {
  return myName;
};

export const showMyNameUI = () => {
    const h1 = document.createElement("h1");
    h1.innerText = myName;
    document.body.append(h1);
};
showMyNameUI();