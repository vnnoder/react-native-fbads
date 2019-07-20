import React from 'react';
export declare type ComponentOrClass = React.ComponentClass<any> | React.Component;
declare type Receiver = (c: ComponentOrClass) => void;
export interface MultipleRegisterablesContextValueType {
    unregister: Receiver;
    register: Receiver;
}
export interface RegisterableContextValueType {
    register: Receiver;
    unregister: () => void;
}
export declare type TriggerableContextValueType = MultipleRegisterablesContextValueType;
export declare type AdIconViewContextValueType = RegisterableContextValueType;
export declare type MediaViewContextValueType = RegisterableContextValueType;
export declare type AdChoicesViewContextValueType = string;
export declare const TriggerableContext: any;
export declare const MediaViewContext: any;
export declare const AdIconViewContext: any;
export declare const AdChoicesViewContext: any;
export {};
