import {
  INodeType,
  INodeTypeDescription,
  ITriggerFunctions,
} from "n8n-workflow";

export class BambusaConnectTrigger implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Bambusa Connect Trigger",
    name: "bambusaConnectTrigger",
    group: ["trigger"],
    version: 1,
    description: "Listens for events from Bambusa Connect",
    defaults: {
      name: "Bambusa Connect Trigger",
    },
    inputs: [],
    outputs: ["main"],
    credentials: [
      {
        name: "bambusaConnectApi",
        required: true,
      },
    ],
    properties: [
      {
        displayName: "Webhook URL",
        name: "webhookUrl",
        type: "string",
        default: "",
        required: true,
      },
      {
        displayName: "Event Type",
        name: "eventType",
        type: "options",
        options: [
          { name: "Order Created", value: "orderCreated" },
          { name: "Stock Updated", value: "stockUpdated" },
        ],
        default: "orderCreated",
      },
    ],
  };

  async trigger(this: ITriggerFunctions) {
    const webhookUrl = this.getNodeParameter("webhookUrl") as string;
    const eventType = this.getNodeParameter("eventType") as string;

    // Listen for events
    this.helpers.httpRequest({
      method: "POST",
      url: "https://api.bambusa.com/webhooks",
      body: {
        url: webhookUrl,
        event: eventType,
      },
      json: true,
    });

    return {
      workflowData: [[]],
    };
  }
}
