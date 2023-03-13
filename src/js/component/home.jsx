import React from "react";

// include images into your bundle
import { Jumbotron }  from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import  { Navbar } from "./navbar.jsx";

function Home () {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Jumbotron />
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-xl-3 col-md-4 col-lg-3">
            <Card
              imageUrl="https://i.pinimg.com/736x/08/a9/b8/08a9b8cc805a1b6a7037819719ab2427.jpg"
              cardTitle="Bob Dylan"
              cardDescription="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter. Dylan has been a major figure in popular culture during a career spanning nearly 60 years."
              buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
              buttonLabel="Go to Wikipedia"
            />
          </div>
          <div className="col-xl-3 col-md-4 col-lg-3">
            <Card
              imageUrl="https://los40es00.epimg.net/los40/imagenes/2020/06/15/los40classic/1592224638_964781_1592235274_noticia_normal.jpg"
              cardTitle="Bob Marley"
              cardDescription="Robert Nesta Marley OM (6 February 1945 – 11 May 1981) was a Jamaican singer, songwriter, and musician. He is also considered a global symbol of Jamaican music and culture."
              buttonUrl="https://en.wikipedia.org/wiki/Bob_Marley"
              buttonLabel="Go to Wikipedia"
            />
          </div>
          <div className="col-xl-3 col-md-4 col-lg-3">
            <Card
              imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/201651/rs_1300x1654-160601141850-Marilyn-Monroe-pics6.jpg?fit=around%7C1300:1654&output-quality=90&crop=1300:1654;center,top"
              cardTitle="Marilyn Monroe"
              cardDescription="Norma Jeane Mortenson; June 1, 1926 – August 4, 1962 was an American actress, model, and singer. She was a top-billed actress for only a decade, her films grossed $200 million by the time of her death in 1962."
              buttonUrl="https://en.wikipedia.org/wiki/Marilyn_Monroe"
              buttonLabel="Go to Wikipedia"
            />
          </div>
          <div className="col-xl-3 col-md-4 col-lg-3">
            <Card
              imageUrl="https://www.biografiasyvidas.com/biografia/j/fotos/jackson_michael_1.jpg"
              cardTitle="Michael Jackson"
              cardDescription="Michael Joseph Jackson was an American singer, songwriter, and dancer. Dubbed the 'King of Pop'. He is regarded as one of the most significant cultural figures of the 20th century."
              buttonUrl="https://en.wikipedia.org/wiki/Michael_Jackson"
              buttonLabel="Go to Wikipedia"
            />
          </div>
        </div>
      </div>
    </div>
);
};

export default Home;
