import { HasNativeAd, NativeAd } from './nativeAd';
import AdsManager from './NativeAdsManager';
interface AdWrapperState {
    ad?: NativeAd;
    canRequestAds: boolean;
    mediaViewNodeHandle: number;
    adIconViewNodeHandle: number;
    clickableChildren: Set<number>;
}
interface AdWrapperProps {
    adsManager: AdsManager;
    onAdLoaded?: (ad: NativeAd) => void;
}
declare const _default: <T extends HasNativeAd>(Component: any) => {
    new (props: AdWrapperProps & T): {
        subscription?: any;
        subscriptionError?: any;
        nativeAdViewRef?: any;
        registerFunctionsForTriggerables: import("./contexts").MultipleRegisterablesContextValueType;
        registerFunctionsForMediaView: import("./contexts").RegisterableContextValueType;
        registerFunctionsForAdIconView: import("./contexts").RegisterableContextValueType;
        clickableChildrenNodeHandles: Map<any, number>;
        /**
         * On init, register for updates on `adsManager` to know when it becomes available
         */
        componentDidMount(): void;
        componentDidUpdate(_: AdWrapperProps, prevState: AdWrapperState): void;
        /**
         * Clear subscription when component goes off screen
         */
        componentWillUnmount(): void;
        registerMediaView: (mediaView: any) => any;
        unregisterMediaView: () => any;
        registerAdIconView: (adIconView: any) => any;
        unregisterAdIconView: () => any;
        registerClickableChild: (child: any) => void;
        unregisterClickableChild: (child: any) => void;
        handleAdUpdated: () => any;
        handleAdLoaded: ({ nativeEvent }: {
            nativeEvent: NativeAd;
        }) => void;
        handleNativeAdViewMount: (ref: any) => void;
        renderAdComponent(componentProps: T): any;
        render(): any;
    };
};
export default _default;
