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

/**
 * Defines the model for managing alert notifications within an application using the Easy Peasy state management library.
 * This model includes the structure for alert configurations and an action to configure alerts.
 *
 * Enums:
 * - `AlertSeverity`: Represents the severity levels of alerts, including Error, Warning, Info, and Success.
 *
 * Interfaces:
 * - `Alert`: Represents the structure of an alert configuration, including visibility, message, and optional severity.
 *
 * The `AlertModel` interface:
 * - `alertConfig`: Holds the current configuration of an alert, including its visibility, message, and severity.
 * - `configureAlert`: An action for updating the `alertConfig` state with a new `Alert` configuration.
 *
 * The `alertsModel` object:
 * - Initializes `alertConfig` with default values indicating an invisible alert with an Info severity level.
 * - Defines `configureAlert` as an action that updates the `alertConfig` state with the provided `Alert` object.
 *
 * Usage:
 * - Import the `alertsModel` into your store configuration.
 * - Access and modify the alert configuration using the `configureAlert` action within your application's components.
 */

const alertsModel: AlertModel = {
  alertConfig: { isVisible: false, message: "", severity: AlertSeverity.Info },
  configureAlert: action((state, payload) => {
    state.alertConfig = payload;
  }),
};

export default alertsModel;
