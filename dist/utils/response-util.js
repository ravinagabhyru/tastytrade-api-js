import _ from 'lodash';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function extractResponseData(httpResponse) {
    // TODO: handle errors
    if (_.has(httpResponse, 'data')) {
        // console.log('extractResponseData', _.get(httpResponse, 'data'));
        return _.get(httpResponse, 'data');
    }
    else {
        // Note: this should be the error case - to be determined
        // console.log('extractResponseData', httpResponse);
        return httpResponse;
    }
    // if (_.has(httpResponse, 'data.data.items')) {
    //   console.log('extractResponseData', _.get(httpResponse, 'data.data.items'));
    //   return _.get(httpResponse, 'data.data.items') as T;
    // } else if (_.has(httpResponse, 'data.data')) {
    //   console.log('extractResponseData', _.get(httpResponse, 'data.data'));
    //   return _.get(httpResponse, 'data.data') as T;
    // } else {
    //   console.log('extractResponseData', httpResponse);
    //   return httpResponse as T;
    // }
}
// add login parser here
// create unit tests for login parser, extractreponsedata
//# sourceMappingURL=response-util.js.map