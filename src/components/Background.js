import React from "react";
import { StyledBackground } from "../static/styledComponetns";

function Background(props) {
  return <StyledBackground onClick={props.trigger} />;
}

export default Background;
