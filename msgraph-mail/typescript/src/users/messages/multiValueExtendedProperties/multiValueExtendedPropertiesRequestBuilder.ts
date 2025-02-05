import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, SerializationWriterFactory} from '@microsoft/kiota-abstractions';
import {MultiValueLegacyExtendedProperty} from '../../multiValueLegacyExtendedProperty';
import {MultiValueExtendedPropertiesResponse} from './multiValueExtendedPropertiesResponse';

/** Builds and executes requests for operations under /users/{user-id}/messages/{message-id}/multiValueExtendedProperties  */
export class MultiValueExtendedPropertiesRequestBuilder {
    /** Current path for the request  */
    public currentPath?: string | undefined;
    /** Core service to use to execute the requests  */
    public httpCore?: HttpCore | undefined;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string = "/multiValueExtendedProperties";
    /** Factory to use to get a serializer for payload serialization  */
    public serializerFactory?: SerializationWriterFactory | undefined;
    /**
     * Get multiValueExtendedProperties from users
     * @param h Request headers
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo (q?: {
                    count?: boolean,
                    expand?: string[],
                    filter?: string,
                    orderby?: string[],
                    search?: string,
                    select?: string[],
                    skip?: number,
                    top?: number
                    } | undefined, h?: object | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.URI = (this.currentPath ?? '') + this.pathSegment,
        requestInfo.httpMethod = HttpMethod.GET,
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        return requestInfo;
    };
    /**
     * Create new navigation property to multiValueExtendedProperties for users
     * @param body 
     * @param h Request headers
     * @returns a RequestInfo
     */
    public createPostRequestInfo (body: MultiValueLegacyExtendedProperty, h?: object | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.URI = (this.currentPath ?? '') + this.pathSegment,
        requestInfo.httpMethod = HttpMethod.POST,
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(body, this.serializerFactory, "application/json");
        return requestInfo;
    };
    /**
     * Get multiValueExtendedProperties from users
     * @param h Request headers
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueExtendedPropertiesResponse
     */
    public get (q?: {
                    count?: boolean,
                    expand?: string[],
                    filter?: string,
                    orderby?: string[],
                    search?: string,
                    select?: string[],
                    skip?: number,
                    top?: number
                    } | undefined, h?: object | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MultiValueExtendedPropertiesResponse | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h
        );
        return this.httpCore?.sendAsync<MultiValueExtendedPropertiesResponse>(requestInfo, MultiValueExtendedPropertiesResponse, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Create new navigation property to multiValueExtendedProperties for users
     * @param body 
     * @param h Request headers
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueLegacyExtendedProperty
     */
    public post (body: MultiValueLegacyExtendedProperty, h?: object | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MultiValueLegacyExtendedProperty | undefined> {
        const requestInfo = this.createPostRequestInfo(
            body, h
        );
        return this.httpCore?.sendAsync<MultiValueLegacyExtendedProperty>(requestInfo, MultiValueLegacyExtendedProperty, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
