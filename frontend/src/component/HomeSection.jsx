import React from 'react';
import profile from "../Assets/profil.jpg"


const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home">
        <div className="home-content">
          <h3>Hallo Nama Saya </h3>
          <h1>Anggoro Dwi Utomo </h1>
          <h3>I' am a Student of <span className="text" id="text"></span></h3>
        </div>
        <div className="photo">
          <img src={profile} alt="photo" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
