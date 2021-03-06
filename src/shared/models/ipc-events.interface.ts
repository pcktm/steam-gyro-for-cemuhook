import { TypedFilterData } from "./filter.models";
import { MethodicalEvents } from "./ipc.models";
import { MessageObject } from "./message.models";
import { MotionDataWithTimestamp } from "./motion-data.interface";
import { UserSettings } from "./user-settings.models";

/**
 * IPC events in the following order: [fromMain, toMain]
 */
export interface IpcEvents extends MethodicalEvents {
    GET: {
        "settings:server": [UserSettings["server"], void];
        "settings:filter": [UserSettings["filter"], void];
        "messages": [MessageObject[], number];
    };
    PUT: {
        "settings:server:address": [void, string];
        "settings:server:port": [void, number];
        "settings:filter": [void, TypedFilterData];
        "device-status": [boolean, void];
        "data-stream": [object, void];
        "connection-status": [boolean, void];
    };
    POST: {
        "restart-server": [void, void];
        "device-status": [void, boolean];
        "data-stream": [void, boolean];
        "connection-status": [void, boolean];
        "motion-data-stream": [[MotionDataWithTimestamp, void], [boolean, void]];
        "sync-messages": [[{ displayIndex?: number, fullSync?: true }, void], [MessageObject, void]];
    };
}
