import type { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>['items'][number];
export interface KeyValue{
    [key: string] : string
}