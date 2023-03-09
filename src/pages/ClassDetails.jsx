import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ClassDetails = () => {
  const { id } = useParams();
  const [classDetail, setClassDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/classes/" + id)
      .then((response) => {
        if (!response.ok) {
          throw Error("Vi kunne desværre ikke indlæse kursusinformationerne");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setClassDetail(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setClassDetail, setIsLoading, setError, id]);

  console.log(classDetail);

  return (
    <div>
      {classDetail && (
        <>
          <h1>{classDetail.className}</h1>
          <p>{classDetail.classDescription}</p>
        </>
      )}
    </div>
  );
};

export default ClassDetails;
