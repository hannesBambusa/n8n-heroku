// packages/nodes-base/credentials/BambusaConnect.credentials.ts

import { ICredentialType, INodeProperties } from "n8n-workflow";

export class BambusaConnectCredentials implements ICredentialType {
  name = "BambusaConnectCredentials";
  displayName = "Bambusa Connect";
  documentationUrl = "https://docs.bambusaconnect.com";
  properties: INodeProperties[] = [
    {
      displayName: "API Key",
      name: "apiKey",
      type: "string",
      required: true,
      default: "",
      description: "Your Bambusa Connect API Key",
    },
    {
      displayName: "API Secret",
      name: "apiSecret",
      type: "string",
      required: true,
      default: "",
      description: "Your Bambusa Connect API Secret",
    },
  ];

  constructor() {
    console.log("BambusaConnectCredentials initialized"); // Add this for debugging
  }
}
