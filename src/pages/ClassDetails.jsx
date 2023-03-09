import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ClassDetails = () => {
  const { id } = useParams();
  const [locationDetail, setlocationDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3222/api/v1/locations/" + id)
      .then((response) => {
        if (!response.ok) {
          throw Error("Vi kunne desværre ikke indlæse");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setlocationDetail(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setlocationDetail, setIsLoading, setError, id]);

  console.log(locationDetail);

  return (
    <div>
      {isLoading && <p>...Indlæser</p>}
      {locationDetail && (
        <>
          <h1>{locationDetail.name}</h1>
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ClassDetails;
