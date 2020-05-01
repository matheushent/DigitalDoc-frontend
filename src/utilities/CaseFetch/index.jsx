import axios from "axios";

const classifyImages = async (setLoading, files, setResults) => {
  const fetchArray = [];
  setLoading(true);

  for (let index = 0; index < files.length; index++) {
    const form = new FormData();

    form.append("name", files[index]["name"]);
    form.append("image", files[index]);

    fetchArray.push(
      axios({
        method: "POST",
        url: "https://covid19-server.raulguedert.dev:5000/predict",
        data: form
      })
    );
  }

  let results = await Promise.all(fetchArray).catch(err => {
    alert("Something did wrong!!! \b" + err);
    setLoading(false);
  });

  const successfulResults = [];
  if (results) {
    for (let index = 0; index < results.length; index++) {
      if (results[index].data.success) {
        successfulResults.push(results[index].data);
      }
    }

    setResults(successfulResults);
  }
};

export default classifyImages;
