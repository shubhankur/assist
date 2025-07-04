export interface WSMessage {
  type: 'audio' | 'text';
  payload: ArrayBuffer | string;
}
