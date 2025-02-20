import TastytradeSession from "../models/tastytrade-session.js";
import axios from "axios";
import qs from 'qs';
import { recursiveDasherizeKeys } from "../utils/json-util.js";
import _ from 'lodash';
const ParamsSerializer = {
    serialize: function (queryParams) {
        return qs.stringify(queryParams, { arrayFormat: 'brackets' });
    }
};
export default class TastytradeHttpClient {
    constructor(baseUrl, logger) {
        this.baseUrl = baseUrl;
        this.logger = logger;
        this.session = new TastytradeSession();
    }
    getDefaultHeaders() {
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": this.session.authToken
        };
        // Only set user agent if running in node
        if (typeof window === 'undefined') {
            headers["User-Agent"] = 'tastytrade-sdk-js';
        }
        return headers;
    }
    async executeRequest(method, url, data = {}, headers = {}, params = {}) {
        const dasherizedParams = recursiveDasherizeKeys(params);
        const dasherizedData = recursiveDasherizeKeys(data);
        const mergedHeaders = { ...headers, ...this.getDefaultHeaders() };
        const config = _.omitBy({
            method,
            url,
            baseURL: this.baseUrl,
            data: dasherizedData,
            headers: mergedHeaders,
            params: dasherizedParams,
            paramsSerializer: ParamsSerializer
        }, _.isEmpty);
        this.logger?.info('Making request', config);
        return axios.request(config);
    }
    async getData(url, headers = {}, queryParams = {}) {
        return this.executeRequest('get', url, {}, headers, queryParams);
    }
    async postData(url, data, headers) {
        return this.executeRequest('post', url, data, headers);
    }
    async putData(url, data, headers) {
        return this.executeRequest('put', url, data, headers);
    }
    async patchData(url, data, headers) {
        return this.executeRequest('patch', url, data, headers);
    }
    async deleteData(url, headers) {
        return this.executeRequest('delete', url, headers);
    }
}
//# sourceMappingURL=tastytrade-http-client.js.map