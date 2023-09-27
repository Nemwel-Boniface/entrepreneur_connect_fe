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
        <h1>Shhh...Error 404!</h1>
        <p>Oops, it seems our entrepreneurial hamster took a coffee break ☕️ and wandered off to brainstorm its next big idea! 🐹💡</p>
        <p>While our little genius is away, why not explore our other wild pages? Who knows, you might stumble upon your next Eureka moment! 🚀✨</p>
        <p>While our entrepreneurial hamster naps, here's some wisdom: 'Happiness is the key to success. Love what you do, and you'll find it.' 🌟</p>
        <p>Feel free to use the map or search bar above to navigate back to the action, and if you find our entrepreneurial hamster, be sure to let us know! 🐹🕵️‍♂️ #HamsterHunt</p>
        <button>
          <Link to="/"><i class="fa fa-arrow-left" aria-hidden="true"></i>This way</Link>
        </button>
      </div>
    </section>
  )
}

export default NotFound;