import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelPage from "./hotelPage";
import { kebabCase } from "./helpers/kebabCase";
import Layout from "./component/layout/Layout";

const data = [
  {
    key: "marom-hotel",
    שם: "מלון מרום",
    רחוב: "פלמח",
    בית: "051",
    טלפון: "8254355",
  },
  {
    key: "Elish-hotel",
    שם: "אלישע בעמ",
    רחוב: "כץ יאיר",
    בית: "012",
    טלפון: "8309009",
  },
  {
    key: "mount-carmel host",
    שם: "אירוח הר הכרמל",
    רחוב: "דרך הים",
    בית: "103",
    טלפון: "8381414",
  },
  {
    key: "mount-carmel hotel",
    שם: "מלון הר הכרמל",
    רחוב: "שושנת הכרמל",
    בית: "067",
    טלפון: "8381414",
  },
  {
    key: "krown-plaza hotel",
    שם: "קראון פלזה חיפה",
    רחוב: "יפה נוף",
    בית: "111",
    טלפון: "8350800",
  },
  {
    key: "dvir-hotel",
    שם: "מלון דביר",
    רחוב: "יפה נוף",
    בית: "124",
    טלפון: "8389139",
  },
  {
    key: "nof-hotel",
    שם: "מלון נוף",
    רחוב: "שדרות הנשיא",
    בית: "101",
    טלפון: "8354311",
  },
  {
    key: "dan-panorama-hotel",
    שם: "מלון דן פנורמה",
    רחוב: "שדרות הנשיא",
    בית: "105",
    טלפון: "8334510",
  },
  {
    key: "carmel-house-of-peace",
    שם: "בית שלום כרמל",
    רחוב: "שדרות הנשיא",
    בית: "110",
    טלפון: "8377481",
  },
  {
    key: "yeearot-hakarmel-hotel",
    שם: "מלון יערות הכרמל",
    רחוב: "יערות הכרמל",
    בית: "31900",
    טלפון: "1809442791",
  },
  {
    key: "vila-carmel-hotel",
    שם: "מלון וילה כרמל",
    רחוב: "היינריך היינה",
    בית: "1",
    טלפון: "8375777/8",
  },
  {
    key: "gallery-hotel",
    שם: "מלון גלרי חיפה",
    רחוב: "הרצל",
    בית: "061",
    טלפון: "8616161",
  },
  {
    key: "leonardo-hotel",
    שם: "מלון ליאונרדו",
    רחוב: "דוד אלעזר",
    בית: "10",
    טלפון: "8508888",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/hotels-app" element={<App />} />
          {/* <Route path="/" element={<App />} /> */}
          {data.map((hotel) => {
            return (
              <Route
                path={`/hotel/${encodeURI(kebabCase(hotel["שם"]))}`}
                element={<HotelPage hotel={hotel} />}
              />
            );
          })}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
