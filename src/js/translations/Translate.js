import React, { useEffect, useState } from "react";
import English from "./en-translation";
import French from "./fr-translation";
import Spanish from "./es-translation";

const Translate = () => {
  const lang = "es";

  const [translation, setTranslation] = useState();

  let translate = () => {
    import(`./${lang}-translation`)
      .catch(() => import(`./en-translation`))
      .then(({ default: translation }) => setTranslation(translation.Hi));
  };

  useEffect(() => {
    translate();
  });

  return <div>{translation}</div>;
};

export default Translate;
