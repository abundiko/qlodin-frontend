// TODO
// create type AlertType and export from @/types/alert (this type should have necessary fields from the design)
// create dummyAlerts and export from @types/alert
// create component: @components/alert/AlertListTile with prop {alert:AlertType}
// map the dummyAlerts and render AlertListTile

import { AppIcons } from "../icons/AppIcons";

export default function AlertsSidebar() {
  return (
    <div className="h-[50%] flex-shrink-0 flex flex-col justify-stretch">
      <div className={`flex justify-between`}>
        <h4 className="font-semibold font-playfair text-2xl">Alerts</h4>
        <AppIcons.alerts />
      </div>
      <div className="flex-grow h-auto overflow-y-auto bg-red-800">
        @emma work on this
        <div className="h-[500px]"></div>
      </div>
    </div>
  );
}
