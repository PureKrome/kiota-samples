import {MultiValueLegacyExtendedProperty} from '../../../../../models/microsoft/graph/multiValueLegacyExtendedProperty';
import {MultiValueExtendedPropertiesResponse} from './multiValueExtendedPropertiesResponse';
import {HttpMethod, RequestInformation, RequestOption, RequestAdapter, ResponseHandler, Parsable} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties  */
export class MultiValueExtendedPropertiesRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /** The http core service to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /**
     * Instantiates a new MultiValueExtendedPropertiesRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param isRawUrl Whether the current path is a raw URL
     * @param requestAdapter The http core service to use to execute the requests.
     */
    public constructor(currentPath: string, requestAdapter: RequestAdapter, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.pathSegment = "/multiValueExtendedProperties";
        this.requestAdapter = requestAdapter;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    count?: boolean,
                    expand?: string[],
                    filter?: string,
                    orderby?: string[],
                    search?: string,
                    select?: string[],
                    skip?: number,
                    top?: number
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: MultiValueLegacyExtendedProperty | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.POST;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueExtendedPropertiesResponse
     */
    public get(q?: {
                    count?: boolean,
                    expand?: string[],
                    filter?: string,
                    orderby?: string[],
                    search?: string,
                    select?: string[],
                    skip?: number,
                    top?: number
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MultiValueExtendedPropertiesResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<MultiValueExtendedPropertiesResponse>(requestInfo, MultiValueExtendedPropertiesResponse, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueLegacyExtendedProperty
     */
    public post(body: MultiValueLegacyExtendedProperty | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MultiValueLegacyExtendedProperty | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendAsync<MultiValueLegacyExtendedProperty>(requestInfo, MultiValueLegacyExtendedProperty, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
