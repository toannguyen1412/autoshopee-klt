document.querySelector("#btn").addEventListener("click", () => {
  const input = document.querySelector("#input").value.split("\n");
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;
  const convert = document.querySelector("#convert").value;

  document.querySelector("#output").value = input
    .filter((item) => item)
    .map((item) => {
      const rows = item.split(from || "\t");
      return rows.join(to || "\t");
    })
    .join("\n");

  if (convert) {
    document.querySelector("#extract").value = input
      .filter((item) => item)
      .map((item) => {
        const rows = item.split(from || "\t");
        let resultConvert = convert.toString();

        if (rows && rows.length) {
          rows.forEach((item, index) => {
            const replace = "\\$" + (index + 1);
            const regex = new RegExp(replace, "g");
            resultConvert = resultConvert.replace(regex, item);
          });
        }

        return resultConvert;
      })
      .join("\n");
  }
});
