import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('env', {
  versions: process.versions,
});
