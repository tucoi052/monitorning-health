import { Peripheral } from "react-native-ble-manager";

export interface BleState {
  loading: boolean;
  devices: Peripheral[]

}
