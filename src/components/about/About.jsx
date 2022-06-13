import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          “Education is the kindling of a flame, not the filling of a vessel.” ―
          Socrates
        </p>
        <p className="a-desc">
          For my whole life I have been fascinated with technology, especially
          with computers. During the year of 2021, I discovered all the amazing
          things that you can build using your computer and coding. It sparked
          curiosity and intrigue and I discovered a passion for coding and
          decided that I wanted to pursue this further and make a career out of
          it. For the past four years, I have been studying Biotechnology at
          Utah Valley University. During this period, I was also working
          part-time for REI because I love the outdoors. I was fortunate enough
          to learn how to listen to people and aid them effectively in gearing
          them up for a life outdoors! I learned how to communicate effectively,
          and work as a teamplayer. I love to help people where I can!
        </p>
      </div>
    </div>
  );
};

export default About;
