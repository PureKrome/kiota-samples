import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, SerializationWriterFactory} from '@microsoft/kiota-abstractions';
import {Attachment} from '../../../../attachment';

/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/{attachment-id}  */
export class AttachmentRequestBuilder {
    /** Current path for the request  */
    public currentPath?: string | undefined;
    /** Core service to use to execute the requests  */
    public httpCore?: HttpCore | undefined;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string = "";
    /** Factory to use to get a serializer for payload serialization  */
    public serializerFactory?: SerializationWriterFactory | undefined;
    /**
     * Delete navigation property attachments for users
     * @param h Request headers
     * @returns a RequestInfo
     */
    public createDeleteRequestInfo (h?: object | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.URI = (this.currentPath ?? '') + this.pathSegment,
        requestInfo.httpMethod = HttpMethod.DELETE,
        h && requestInfo.setHeadersFromRawObject(h);
        return requestInfo;
    };
    /**
     * Get attachments from users
     * @param h Request headers
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo (q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.URI = (this.currentPath ?? '') + this.pathSegment,
        requestInfo.httpMethod = HttpMethod.GET,
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        return requestInfo;
    };
    /**
     * Update the navigation property attachments in users
     * @param body 
     * @param h Request headers
     * @returns a RequestInfo
     */
    public createPatchRequestInfo (body: Attachment, h?: object | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.URI = (this.currentPath ?? '') + this.pathSegment,
        requestInfo.httpMethod = HttpMethod.PATCH,
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(body, this.serializerFactory, "application/json");
        return requestInfo;
    };
    /**
     * Delete navigation property attachments for users
     * @param h Request headers
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of void
     */
    public delete (h?: object | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInfo(
            h
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get attachments from users
     * @param h Request headers
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Attachment
     */
    public get (q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Attachment | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h
        );
        return this.httpCore?.sendAsync<Attachment>(requestInfo, Attachment, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property attachments in users
     * @param body 
     * @param h Request headers
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of void
     */
    public patch (body: Attachment, h?: object | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createPatchRequestInfo(
            body, h
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
