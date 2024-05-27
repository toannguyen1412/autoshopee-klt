function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

window.convert = function (text) {
  document.querySelector("textarea#result").value = "";
  document.querySelector("input#spc_f").value = "";
  const domain = document.querySelector("input#domain").value || "";

  try {
    let cookies = [];
    const raw = document.querySelector("textarea#input").value;
    if (!isJson(raw)) {
      const lines = raw.split(";");

      cookies = lines
        .map(function (line, index) {
          const [name, value] = line.split("=");
          if (name && value) {
            return {
              name: name.trim(),
              key: name.trim(),
              value: value.trim(),
              domain: domain,
              url: domain
            };
          } else {
            return null;
          }
        })
        .filter((item) => item);
    } else {
      cookies = JSON.parse(raw);
    }

    const SPC_F = cookies.find(
      ({ name, key }) => name === "SPC_F" || key === "SPC_F"
    );

    if (SPC_F && SPC_F.value) {
      document.querySelector("input#spc_f").value = SPC_F.value.trim();
    }

    document.querySelector("textarea#result").value = JSON.stringify(cookies);
  } catch (error) {
    document.querySelector("textarea#result").value = "ERROR";
  }
};
