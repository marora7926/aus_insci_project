import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import Austin from "../../assets/images/logos/austin.png";
import CALHN from "../../assets/images/logos/calhn.png";
import icare from "../../assets/images/logos/icare.png";
import InSCI from "../../assets/images/logos/insci.png";
import Kolling from "../../assets/images/logos/kolling.png";
import LSA from "../../assets/images/logos/lsa.png";
import MSH from "../../assets/images/logos/msh.png";
import NSLHD from "../../assets/images/logos/nslhd.jpg";
import PQNSW from "../../assets/images/logos/pqnsw.png";
import PQSA from "../../assets/images/logos/pqsa.png";
import RR from "../../assets/images/logos/rr.png";
import SCIA from "../../assets/images/logos/scia.png";
import SESLHD from "../../assets/images/logos/seslhd.png";
import SydUni from "../../assets/images/logos/syduni.png";

const FullWidth = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const Photo = styled.img`
  width: ${(props) => props.scale * 200}px;
  height: ${(props) => props.scale * 80}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;
  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [
  Austin,
  CALHN,
  icare,
  InSCI,
  Kolling,
  LSA,
  MSH,
  NSLHD,
  PQNSW,
  PQSA,
  RR,
  SCIA,
  SESLHD,
  SydUni,
];

const Organisations = ({ size }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);
  let scale = 0.5;
  if (size && size.width > 800) {
    scale = 0.65;
  }
  if (size && size.width > 1100) {
    scale = 0.8;
  }
  if (size && size.width > 1400) {
    scale = 1;
  }
  return (
    <>
        <FullWidth>
        <h1>
          Partnering Organisations
        </h1>
        <hr></hr>    
        <div style={{ height: scale * 100 }}>
            <Marquee key={key} velocity={25}>
            {times(7, Number).map((id) => (
                <Photo src={photos[id]} alt="" key={`marquee-example-logo-${id}`} scale={scale} />
            ))}
            </Marquee>
        </div>

        <div style={{ height: scale * 40 }} />

        <div style={{ height: scale * 100 }}>
            <Marquee key={key} velocity={25}>
            {times(7, Number).map((id) => (
                <Photo
                src={photos[id + 7]}
                alt=""
                key={`marquee-example-logo-${id + 7}`}
                offset="true"
                scale={scale}
                />
            ))}
            </Marquee>
        </div>

        <div style={{ height: scale * 40 }} />

        <div style={{ height: scale * 100 }}>
            <Marquee key={key} velocity={25}>
            {times(7, Number).map((id) => (
                <Photo
                src={photos[id + 7]}
                alt=""
                key={`marquee-example-logo-${id + 7}`}
                offset="true"
                scale={scale}
                />
            ))}
            </Marquee>
        </div>

        </FullWidth>
    </>
  );
};

export default withSize()(Organisations);