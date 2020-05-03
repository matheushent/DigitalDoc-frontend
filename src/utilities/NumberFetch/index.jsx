import axios from "axios";

const setNumber = (number) => {
    const data = new FormData();

    data.append("number", number);

    axios({
        method: "PUT",
        url: "http://localhost:5000/number",
        data: data
    })
};

export default setNumber;