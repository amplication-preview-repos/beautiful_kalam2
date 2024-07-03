import { WebSocketConnection as TWebSocketConnection } from "../api/webSocketConnection/WebSocketConnection";

export const WEBSOCKETCONNECTION_TITLE_FIELD = "url";

export const WebSocketConnectionTitle = (
  record: TWebSocketConnection
): string => {
  return record.url?.toString() || String(record.id);
};
