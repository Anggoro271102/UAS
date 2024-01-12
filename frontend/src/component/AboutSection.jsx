import React, {useState, useEffect} from 'react';
import profile from "../Assets/profil.jpg"

import api from "../api/api"

const AboutSection = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/data');
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="about" id="about">
      <div className="aboutIcon">
        <img src={profile} alt="photoAbout" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Beginner Of Software Engineering</h4>
        <p>
          Software engineer pemula yang bersemangat untuk belajar dan mengembangkan keterampilan di bidang UI/UX. 
          Saya memiliki pengalaman menggunakan alat dan framework UI/UX, serta mengembangkan aplikasi mobile dan web. 
          Saya ingin bekerja di perusahaan teknologi yang dapat membantu saya mewujudkan passion saya untuk menciptakan produk digital yang user-friendly dan menarik.
        </p>

        <h4>Experince :</h4>

        <ul>
            {userData.map((user) => (
              <li className="about-activity" key={user.id}>
  <span>Workplace : {user.pengalaman}</span>

              </li>
            ))}
            {userData.map((user) => (
              <li className="about-activity" key={user.id}>
  <span>Duration : {user.durasi}</span>

              </li>
            ))}

          </ul>
      </div>
      
    </section>
  );
}

export default AboutSection;
