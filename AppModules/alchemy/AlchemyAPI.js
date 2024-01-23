import { Network,Alchemy } from "alchemy-sdk";
import { API_KEY } from "../DevConfig/apiKeys";

const settings = {
  apiKey: API_KEY,
  network: Network.ETH_GOERLI
}
export const alchemy = new Alchemy(settings)
