import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TokenContext } from "../contexts/TokenProvider";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [allLocations, setAllLocations] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { token } = useContext(TokenContext);

  useEffect(function () {
    (async function () {
      try {
        const response = await axios.get(
          "https://gereo-api-v.onrender.com/api/v1/locations"
        );
        console.log("resp", response);

        setAllLocations(response.data.results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log("allLocations", allLocations);

  return (
    <>
      <h1 className="text-2xl p-12">Besøg disse steder i dag</h1>
      <p className="pl-12 pt-2">
        Vi vil frygteligt gerne gette fra apiet, hvis vi må
      </p>
      {token && <h4>Velkommen bruger</h4>}
      <section className="p-10">
        {isLoading && <p>..loading</p>}

        {allLocations &&
          allLocations.map((item) => (
            <article
              onClick={() => navigate(`/classdetails/${item._id}`)}
              className="p-6"
            >
              <h1 className="text-[22px]">{item.name}</h1>
              <p>{item.address}</p>
              <p>{item.city}</p>
            </article>
          ))}
        {error && <p>{error.message}</p>}
      </section>
    </>
  );
}
