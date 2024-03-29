import { useState } from "react";

const HastaEkle = ({ hastalar, setHastalar,doktorlar }) => {
  const [isim, setIsim] = useState("");
  const [tarih, setTarih] = useState("");
 console.log(doktorlar);
  const yapSubmit = (e) => {
    e.preventDefault();
    setHastalar([ ...hastalar, {
      id: hastalar.length+1,
      text: isim,
      day: tarih,
      bittiMi: false,
      doktorum: doktorlar[0].doktor,
    }]);
  };

  return (
    <div>
      <form onSubmit={yapSubmit}>
        <div className="form-control">
          <label htmlFor="text">Hasta Bilgileri</label>

          <input
            id="text"
            
            type="text"
            placeholder="Add Name"
            name="text"
            value={isim}
            onChange={(e) => setIsim(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day & Time</label>

          <input
            id="day"
            type="datetime-local"
            name="day"
            value={tarih}
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>

        <div>
          <button className=" dok btn btn-submit" type="submit">
            <span style={{ color: "#6a0707" }}>{doktorlar[0].doktor}</span> İçin
            Kayıt Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default HastaEkle;
