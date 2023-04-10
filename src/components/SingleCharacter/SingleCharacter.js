import { useEffect } from "react";
import { useParams } from "react-router";

export const SingleCharacter = () => {

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=28f6359f5b4f28caadd97f5b833f6fe6&`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data.results[0]);
      });
  }, [id]);

  return (
    <div>
    </div>
  );
};
