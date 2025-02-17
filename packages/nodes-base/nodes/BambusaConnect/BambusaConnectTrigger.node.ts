// packages/nodes-base/nodes/BambusaConnectTrigger.node.ts

import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";

export class BambusaConnectTrigger implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Bambusa Connect Trigger",
    name: "bambusaConnectTrigger",
    icon: "file:bambusaConnect.png",
    group: ["trigger"],
    version: 1,
    description: "Triggers events from Bambusa Connect",
    defaults: {
      name: "Bambusa Connect Trigger",
      color: "#1F1F1F",
    },
    inputs: [],
    outputs: ["main"],
    credentials: [
      {
        name: "BambusaConnectCredentials",
        required: true,
        testedBy: "bambusaConnectTrigger",
      },
    ],
  };

  async trigger(this: INodeType): Promise<INodeExecutionData[][]> {
    // Implement your trigger logic here, such as making an API call to Bambusa Connect.
    return [];
  }
}
