import React from "react";
import hamster from '../images/hamster.png'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="NotFound">
      <div className="NotFoundLeft">
        <img src={hamster} alt="" />
      </div>
      <div className="NotFoundRight">
        <h1>Shhh...</h1>
        <p>Hold up a sec! Our hamster friend is catching Z's. Tip - toe back to the zoo for more wild fun.</p>
        <button>
          <Link to="/"><i class="fa fa-arrow-left" aria-hidden="true"></i>This way</Link>
        </button>
      </div>
    </section>
  )
}

export default NotFound;