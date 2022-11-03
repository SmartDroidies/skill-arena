import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useHome = () => {
    const [home, setHome] = useState([]);


    const fetchApi = () => {
        courseClient
            .get("/home")
            .then((response) => {
                setHome(response.data);
            })
            .catch((error) => {
                console.log("Error :", error);
            });
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return [home];
};

export default useHome;
