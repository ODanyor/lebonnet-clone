import React from "react";
import "../../static/styles/Authenticated.css";

function Authenticated() {
  return (
    <div className="MainContainer">
      <div className="SubContainer">
        <div className="LeftContainer">
          <div>Welcome</div>
        </div>
        <div className="RightContainer">
          <div>
            Dit is uw account waarmee u uw recente aankoop activiteiten kunt
            controleren en uw persoonlijke gegevens kunt bijwerken. Selecteer
            dit tabblad hieronder om informatie te bekijken of te bewerken.
          </div>
        </div>
      </div>
      {/* Cart */}
    </div>
  );
}

export default Authenticated;
