import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, sprites, hp}) {

  const [frontBack, setfront] = useState(true)

  function handleClick(){
    setfront(preval => !preval)
  }


  return (
    <Card>
      <div>
        <div  className="image">
          <img onClick={handleClick} src={frontBack ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
