import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TokenContext } from "../contexts/TokenProvider";
import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter";

export default function Home() {
  const [classes, setClasses] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { token } = useContext(TokenContext);

  useEffect(function () {
    (async function () {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/classes"
        );
        console.log(response);
        if (response.status === 200) {
          setClasses(response.data);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log("klasser", classes);

  return (
    <>
      <h1 class="text-2xl">Home</h1>
      {token && <h4>Velkommen bruger</h4>}
      <section>
        {isLoading && <p>..loading</p>}

        {classes &&
          classes?.map((item, index) => (
            <article onClick={() => navigate(`/classdetails/${item.id}`)}>
              <h2>{item.className}</h2>
              <p>{item.classDescription}</p>
            </article>
          ))}
        {error && <p>{error.message}</p>}
      </section>
      <Filter />
    </>
  );
}
