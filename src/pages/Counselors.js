import { Fragment, useState, useEffect, useCallback } from "react";
import CustomCard from "../components/Card/CustomCard";
// import MOCK_DATA from "../util/data/MOCK_DATA.json";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Counselors.css";
import { useAppContext } from "../context/appContext";
import { getAllCounsellors } from "../api";

const Counselors = () => {
  const { error, handleError } = useAppContext();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [fetchedCounselors, setFetchedCounselors] = useState([]);

  // get all Counselors from Backend
  const getAllCounselors = useCallback(async () => {
    try {
      const { data } = await getAllCounsellors();
      setFetchedCounselors(data);
      handleError("");
    } catch (error) {
      // console.log(error.response.data);
      handleError(error.response.data);
    }
  }, [handleError]);
  useEffect(() => {
    getAllCounselors();
  }, [getAllCounselors]);

  // FilteredData
  useEffect(() => {
    const newFilteredData = fetchedCounselors.filter((list) => {
      if (list.counsellorsDomain === null) return list;
      // console.log(list?.counsellorsDomain);
      return list?.counsellorsDomain
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setFilteredData(newFilteredData);
  }, [search, fetchedCounselors]);

  return (
    <Fragment>
      {/* //////////////////// */}
      {/* Counselors Top */}
      <section className="page-title bg-4">
        <div className="overlay"></div>
        <div className="container content">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center ">
                <span className="text-white">Counselors</span>
                <h1 className="text-capitalize mb-5 text-lg text-white">
                  Counselors
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InputGroup className="mb-3 search-bar  mt-5">
        <Form.Control
          placeholder="Counselor Type"
          aria-label="Counselor Type"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </InputGroup.Text>
      </InputGroup>

      <div className="container counselor-card-container">
        <div className="row mx-auto counselor-container">
          {fetchedCounselors.length === 0 && (
            <div>
              <p>No Counselors Found</p>
            </div>
          )}
          {filteredData.length === 0 &&
            !search &&
            fetchedCounselors.map((counselor) => {
              return (
                <CustomCard key={counselor.counsellorsId} {...counselor} />
              );
            })}
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          {filteredData &&
            filteredData.map((counselor) => (
              <CustomCard key={counselor.counsellorsId} {...counselor} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Counselors;
