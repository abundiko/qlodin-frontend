// TODO
// create type AlertType and export from @/types/alert (this type should have necessary fields from the design)
// create dummyAlerts and export from @types/alert
// create component: @components/alert/AlertListTile with prop {alert:AlertType}
// map the dummyAlerts and render AlertListTile

import AlertListTile from "../alert/AlertListTile";
import { AppIcons } from "../icons/AppIcons";


const alertData = [
  {
    id: "1",
    name: "Alert/discount deal ",
    message: "content preview",
    imageUrl: "/images/alert-img.png",
    time: "12:33",
   
  },
  {
    id: "2",
    name: "Alert/discount deal ",
    message: "content preview ",
    imageUrl: "/images/alert-img.png",
    time: "12:45",
   
  },
  {
    id: "3",
    name: "Alert/discount deal  ",
    message: "content preview",
    imageUrl:  "/images/alert-img.png",
    time: "1:00",

  },
];

export default function AlertsSidebar() {
  return (
    <div className="h-[50%] flex-shrink-0 flex flex-col justify-stretch">
      <div className={`flex justify-between`}>
        <h4 className="font-semibold font-playfair text-2xl">Alerts</h4>
        <AppIcons.alerts />
      </div>
      <div className="flex-grow h-auto overflow-y-auto ">
        <div className="h-[500px]">
                {alertData.map((alert) => (
                  <AlertListTile key={alert.id} alert={alert} />
                ))}
              </div>
        <div className="h-[500px]"></div>
      </div>
    </div>
  );
}
