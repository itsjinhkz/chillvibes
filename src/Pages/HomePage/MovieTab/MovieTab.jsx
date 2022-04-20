import React, { useState } from "react";
import { Tabs } from "antd";
import { useEffect } from "react";
import { cinemaService } from "../../../services/cinemaService";
import ItemMovieTab from "./ItemMovieTab";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

export default function MovieTab() {
  const [dataCinema, setdataCinema] = useState([]);
  useEffect(() => {
    cinemaService
      .getCinemaInfor()
      .then((res) => {
        setdataCinema(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const renderTabInfor = (cinemasInfor) => {
    return cinemasInfor.map((cinema, cinemaIndex) => {
      // console.log("cinema", cinema);
      return (
        <TabPane
          tab={<img className="w-14 h-14" src={cinema.logo} alt="logo" />}
          key={cinemaIndex}
        >
          <Tabs onChange={callback} tabPosition="left" style={{ height: 500 }}>
            {cinema.lstCumRap.map((cinemaInfor, cinemaInforIndex) => {
              return (
                <TabPane
                  tab={<p>{cinemaInfor.tenCumRap}</p>}
                  key={cinemaInforIndex}
                >
                  <div
                    className="w-full space-y-3 overflow-scroll"
                    style={{ height: 500 }}
                  >
                    {cinemaInfor.danhSachPhim.map((movie, movieIndex) => {
                      return movieIndex < 10 ? (
                        <ItemMovieTab data={movie} />
                      ) : (
                        <></>
                      );
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="hidden lg:block container mx-auto py-20" id="cumrap">
      <Tabs style={{ height: 500 }} onChange={callback} tabPosition="left">
        {renderTabInfor(dataCinema)}
      </Tabs>
    </div>
  );
}
