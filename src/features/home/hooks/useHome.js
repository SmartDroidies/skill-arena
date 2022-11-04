import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useHome = () => {
    const [home_section, setHome] = useState([]);

    const sortSection = (sections) => {
        return sections.sort((a, b) => {
            return a.order < b.order;
        });
    };
    const fetchApi = () => {
        courseClient
            .get("/home_section")
            .then((response) => {
                setHome(sortSection(response.data));
            })
            .catch((error) => {
                console.log("Error :", error);
            });
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return [home_section];
};

export default useHome;
