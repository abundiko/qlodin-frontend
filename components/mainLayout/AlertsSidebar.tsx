// TODO
// create type AlertType and export from @/types/alert (this type should have necessary fields from the design)
// create dummyAlerts and export from @types/alert
// create component: @components/alert/AlertListTile with prop {alert:AlertType}
// map the dummyAlerts and render AlertListTile

import AlertListTile from "../alert/AlertListTile";
import { AppIcons } from "../icons/AppIcons";
import { dummyAlerts } from "@/types/alert";

export default function AlertsSidebar() {
  return (
    <div className="h-[50%] flex-shrink-0 flex flex-col justify-stretch">
      <div className={`flex justify-between`}>
        <h4 className="font-semibold font-playfair text-2xl">Alerts</h4>
        <AppIcons.alerts className="text-2xl" />
      </div>
      <div className="flex-grow overflow-y-auto">
        {dummyAlerts.map((alert) => (
          <AlertListTile key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
}
