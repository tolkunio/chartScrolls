import { instance, instanceChSC } from "./instances";
import { ChartScrollsApi } from "./chart-scrolls-api"
import { NextJsApi } from "./next-js-api";

const chartScrollsApi = new ChartScrollsApi(instanceChSC);
const nextJsApi = new NextJsApi(instance);

export const API = {
    chartScrollsApi: chartScrollsApi,
    nextJs: nextJsApi,
};