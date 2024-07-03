import { Action, action } from "easy-peasy";

export enum AlertSeverity {
  Error = "error",
  Warning = "warning",
  Info = "info",
  Success = "success",
}

interface Alert {
  isVisible: boolean;
  message: string;
  severity?: AlertSeverity;
}
export interface AlertModel {
  alertConfig: Alert;
  configureAlert: Action<AlertModel, Alert>;
}

const alertsModel: AlertModel = {
  alertConfig: { isVisible: false, message: "", severity: AlertSeverity.Info },
  configureAlert: action((state, payload) => {
    state.alertConfig = payload;
  }),
};

export default alertsModel;
