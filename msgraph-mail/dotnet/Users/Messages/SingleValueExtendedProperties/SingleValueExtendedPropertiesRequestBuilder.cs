using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Graphdotnetv4.Users.Messages.SingleValueExtendedProperties.Item;
namespace Graphdotnetv4.Users.Messages.SingleValueExtendedProperties {
    /// <summary>Builds and executes requests for operations under \users\{user-id}\messages\{message-id}\singleValueExtendedProperties</summary>
    public class SingleValueExtendedPropertiesRequestBuilder {
        /// <summary>Current path for the request</summary>
        public string CurrentPath { get; set; }
        /// <summary>Core service to use to execute the requests</summary>
        public IHttpCore HttpCore { get; set; }
        /// <summary>Path segment to use to build the URL for the current request builder</summary>
        private string PathSegment { get; set; } = "/singleValueExtendedProperties";
        /// <summary>Factory to use to get a serializer for payload serialization</summary>
        public ISerializationWriterFactory SerializerFactory { get; set; }
        /// <summary>Gets an item from the Graphdotnetv4.users.messages.singleValueExtendedProperties collection</summary>
        public SingleValueLegacyExtendedPropertyRequestBuilder this[string position] { get {
            return new SingleValueLegacyExtendedPropertyRequestBuilder { HttpCore = HttpCore, SerializerFactory = SerializerFactory, CurrentPath = CurrentPath + PathSegment  + "/" + position};
        } }
        /// <summary>
        /// Get singleValueExtendedProperties from users
        /// <param name="h">Request headers</param>
        /// <param name="q">Request query parameters</param>
        /// </summary>
        public RequestInfo CreateGetRequestInfo(Action<GetQueryParameters> q = default, Action<IDictionary<string, string>> h = default) {
            var requestInfo = new RequestInfo {
                HttpMethod = HttpMethod.GET,
                URI = new Uri(CurrentPath + PathSegment),
            };
            if (q != null) {
                var qParams = new GetQueryParameters();
                q.Invoke(qParams);
                qParams.AddQueryParameters(requestInfo.QueryParameters);
            }
            h?.Invoke(requestInfo.Headers);
            return requestInfo;
        }
        /// <summary>
        /// Create new navigation property to singleValueExtendedProperties for users
        /// <param name="body"></param>
        /// <param name="h">Request headers</param>
        /// </summary>
        public RequestInfo CreatePostRequestInfo(SingleValueLegacyExtendedProperty body, Action<IDictionary<string, string>> h = default) {
            var requestInfo = new RequestInfo {
                HttpMethod = HttpMethod.POST,
                URI = new Uri(CurrentPath + PathSegment),
            };
            requestInfo.SetContentFromParsable(body, SerializerFactory, "application/json");
            h?.Invoke(requestInfo.Headers);
            return requestInfo;
        }
        /// <summary>
        /// Get singleValueExtendedProperties from users
        /// <param name="h">Request headers</param>
        /// <param name="q">Request query parameters</param>
        /// <param name="responseHandler">Response handler to use in place of the default response handling provided by the core service</param>
        /// </summary>
        public async Task<SingleValueExtendedPropertiesResponse> GetAsync(Action<GetQueryParameters> q = default, Action<IDictionary<string, string>> h = default, IResponseHandler responseHandler = default) {
            var requestInfo = CreateGetRequestInfo(
                q, h
            );
            return await HttpCore.SendAsync<SingleValueExtendedPropertiesResponse>(requestInfo, responseHandler);
        }
        /// <summary>
        /// Create new navigation property to singleValueExtendedProperties for users
        /// <param name="body"></param>
        /// <param name="h">Request headers</param>
        /// <param name="responseHandler">Response handler to use in place of the default response handling provided by the core service</param>
        /// </summary>
        public async Task<SingleValueLegacyExtendedProperty> PostAsync(SingleValueLegacyExtendedProperty body, Action<IDictionary<string, string>> h = default, IResponseHandler responseHandler = default) {
            var requestInfo = CreatePostRequestInfo(
                body, h
            );
            return await HttpCore.SendAsync<SingleValueLegacyExtendedProperty>(requestInfo, responseHandler);
        }
        /// <summary>Get singleValueExtendedProperties from users</summary>
        public class GetQueryParameters : QueryParametersBase {
            /// <summary>Include count of items</summary>
            public bool? Count { get; set; }
            /// <summary>Expand related entities</summary>
            public string[] Expand { get; set; }
            /// <summary>Filter items by property values</summary>
            public string Filter { get; set; }
            /// <summary>Order items by property values</summary>
            public string[] Orderby { get; set; }
            /// <summary>Search items by search phrases</summary>
            public string Search { get; set; }
            /// <summary>Select properties to be returned</summary>
            public string[] Select { get; set; }
            /// <summary>Skip the first n items</summary>
            public int? Skip { get; set; }
            /// <summary>Show only the first n items</summary>
            public int? Top { get; set; }
        }
    }
}
