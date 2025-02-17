import { ICredentialType, INodeProperties } from "n8n-workflow";

export class BambusaConnectApi implements ICredentialType {
  name = "bambusaConnectApi";
  displayName = "Bambusa Connect API";
  documentationUrl = "https://your-api-docs.com";
  properties: INodeProperties[] = [
    {
      displayName: "API Key",
      name: "apiKey",
      type: "string",
      default: "",
    },
  ];
}
