import React from 'react';

const HobbySection = () => {
  return (
    <section className="hobby" id="hobby">
      <div className="containerhobby">
        <h1 className="hobbytitle">My <span>Hobby</span></h1>
        <div className="hobby-list">
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAflJREFUWEftl0FuwjAQRf+wbyXCBeAmcJAK2La9Q+EObbek6kHKTZoLEKR2X1eTSSCe2HFCQEVVvIpie/z8Z2L/EK6s0ZXxoAcKZaRXqJtCezPFD+YgTAGMQ8EC/dusn7DGkOTZ0dwp25sxDDZABnKJtgVhiSElOngVSGA+L0GhYiYgzDRUFSg1H5YyBmsMELt20wralX6OPaJVOY4NtDeLPFUyRnbgzXcQKDUP2ZiIXg5jZY2nQ01K6uKi3wbamRUoGww46IMA5QEC85y/erSg7HVijGjpBkoN1458TVqd1PAu7/KJ74hIdu9rdUCcPgMuDW5bRDTzAZlD/IiO6gnMvVr71QlVTpPvmQOlxrmWnTLPIKTmC8CNAvpGRLfWO58qrvf/DejKUiY5P19Rd66hVt97PrjuK/sTIFm0ejAWm+tU1KcoFJpzESA5cefW2mwv+LBz3OTqiOhwDundlo9+nxJ8R9WBnUWh9j7JaTGyPZwFSFsTVkBSVBgt9lJ8OZeNnRuqIVD5cp1YdaBh6qzJsbYK22s7RNsEJoho4r5cd2YDwiLvlJ1x03a2iU+q1plA6XjK5miDxpKzLfAb+jY+qVnxW5moWtiq3MfvqA1MMasOSrlFnuL762ADVdhMVi3GAG8n21kxZI3i9X+uoRulV6hXKKRAqP8XX5wuNO4m2RwAAAAASUVORK5CYII=" alt="Bermain Game" />
            <h2>Bermain Game</h2>
            <p>Deskripsi tentang hobi bermain game Anda.</p>
          </div>
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAglJREFUWEftWL1uFDEQ/uZoKLk9UROa5CkQiQQdDW9wgTYPABVHRR4gbUjyBDR0ILERT5E0LDW6XUoaMpHX51t7/Le+NCeEpTS3M57P38x89oSwZYu2DA/+EUAd7+AGcxCeAthZ/TUrthswGkxwgSnVpRkoY2jJCxDeFQRR4C4wo8VYn3GAOt4H49vYTQN2o4HlAYVZUQFqEOYRkCZ9Kp3DYrzPsZUG1LJiZd/a0j1px3Nwn0ITuAHhsK8dVWfK1/0OMM4xo8MY23FAPjM1KjrwNrILPP19qL0EU2FAsmYyp8rW1gB6AKWZPJe+YUAt/7DSEGYmi0IYKFCMM6sEGlT0OA9I14Vy1ItwsImeBPFqUOqwZm+PJZ8hm50IrV6wBU/63xZ0kyXOPbDHkgtIsjOmdlp+AuBkBeQIFX1PgpLNIjLgAlrymdCWYJ7XAVt+A+CDAPAWFR1HQbXMKW1yAfm6E9aNjh+Be1ZeRAJ/BuEIU/rpfA+LrNM0EpDdXWYvt8u0JHwC8CBTL79BeOk0hNu9xt3JggTk0hnrsiVfgbCbBMS4xoz2HJvwnVgAKKaoY279Et+K1sSkUhYXxF+8i3u4SjL0F3t4SNeeTUYg40WdE8SOv4DxLAiK8BVTeh4F7MpLoqjtVOQ0aMmvQDgNBmW8xow+RgHZ8iLiSGG0H2JpDWK+jxZKh/xV4RhEfxJaNHRzUhh1ftUbSL9vxl4d2fvCMpC3gVXQOqRc8q7RJzAvwJLQYVtbqQMHDgFyWQJqMC7Xuxc82HsfVZdm6SlleIEKdsIMqV8lrfZZc8Vu26b0KtLFJU9YEypd7DYgeZGab8VPWOMYO+EYluLsJF+gdxuDJn1tNdaUoSZaXSOhgfLOY5Bhyh93SrttGI8ynnmGBlBmnt+CUdo+lR4AdWrcfzYoK6VXapi8xAT1JsPBeIZKk7Sh/X9AOeJuAZt3UjQEadWwAAAAAElFTkSuQmCC" alt="Jalan-Jalan (Travelling)" />
            <h2>Jalan-Jalan (Travelling)</h2>
            <p>Deskripsi tentang hobi jalan-jalan Anda.</p>
          </div>
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAslJREFUWEftWL1uFDEQ/uZoKLk9UROa5CkQiQQdDW9wgTYPABVHRR4gbUjyBDR0ILERT5E0LDW6XUoaMpHX51t7/Le+NCeEpTS3M57P38x89oSwZYu2DA/+EUAd7+AGcxCeAthZ/TUrthswGkxwgSnVpRkoY2jJCxDeFQRR4C4wo8VYn3GAOt4H49vYTQN2o4HlAYVZUQFqEOYRkCZ9Kp3DYrzPsZUG1LJiZd/a0j1px3Nwn0ITuAHhsK8dVWfK1/0OMM4xo8MY23FAPjM1KjrwNrILPP19qL0EU2FAsmYyp8rW1gB6AKWZPJe+YUAt/7DSEGYmi0IYKFCMM6sEGlT0OA9I14Vy1ItwsImeBPFqUOqwZm+PJZ8hm50IrV6wBU/63xZ0kyXOPbDHkgtIsjOmdlp+AuBkBeQIFX1PgpLNIjLgAlrymdCWYJ7XAVt+A+CDAPAWFR1HQbXMKW1yAfm6E9aNjh+Be1ZeRAJ/BuEIU/rpfA+LrNM0EpDdXWYvt8u0JHwC8CBTL79BeOk0hNu9xt3JggTk0hnrsiVfgbCbBMS4xoz2HJvwnVgAKKaoY279Et+K1sSkUhYXxF+8i3u4SjL0F3t4SNeeTUYg40WdE8SOv4DxLAiK8BVTeh4F7MpLoqjtVOQ0aMmvQDgNBmW8xow+RgHZ8iLiSGG0H2JpDWK+jxZKh/xV4RhEfxJaNHRzUhh1ftUbSL9vxl4d2fvCMpC3gVXQOqRc8q7RJzAvwJLQYVtbqQMHDgFyWQJqMC7Xuxc82HsfVZdm6SlleIEKdsIMqV8lrfZZc8Vu26b0KtLFJU9YEypd7DYgeZGab8VPWOMYO+EYluLsJF+gdxuDJn1tNdaUoSZaXSOhgfLOY5Bhyh93SrttGI8ynnmGBlBmnt+CUdo+lR4AdWrcfzYoK6VXapi8xAT1JsPBeIZKk7Sh/X9AOeJuAZt3UjQEadWwAAAAAElFTkSuQmCC" alt="Bermain Sepak Bola" />
            <h2>Bermain Sepak Bola</h2>
            <p>Deskripsi tentang hobi bermain sepak bola Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HobbySection;