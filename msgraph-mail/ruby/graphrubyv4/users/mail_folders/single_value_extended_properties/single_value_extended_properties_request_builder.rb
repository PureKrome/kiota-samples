require 'microsoft_kiota_abstractions'
require_relative '../../users'
require_relative '../mail_folders'
require_relative './single_value_extended_properties'

module Graphrubyv4::Users::MailFolders::SingleValueExtendedProperties
    ## 
    # Builds and executes requests for operations under \users\{user-id}\mailFolders\{mailFolder-id}\singleValueExtendedProperties
    class SingleValueExtendedPropertiesRequestBuilder
        
        ## 
        # Current path for the request
        @current_path
        ## 
        # The http core service to use to execute the requests.
        @http_core
        ## 
        # Whether the current path is a raw URL
        @is_raw_url
        ## 
        # Path segment to use to build the URL for the current request builder
        @path_segment
        ## 
        ## Instantiates a new SingleValueExtendedPropertiesRequestBuilder and sets the default values.
        ## @param currentPath Current path for the request
        ## @param httpCore The http core service to use to execute the requests.
        ## @param isRawUrl Whether the current path is a raw URL
        ## @return a void
        ## 
        def initialize(current_path, http_core, is_raw_url=true) 
            @path_segment = "/singleValueExtendedProperties"
            @http_core = http_core
            @current_path = current_path
            @is_raw_url = is_raw_url
        end
        ## 
        ## The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
        ## @param h Request headers
        ## @param o Request options for HTTP middlewares
        ## @param q Request query parameters
        ## @return a request_info
        ## 
        def create_get_request_info(q=nil, h=nil, o=nil) 
            request_info = MicrosoftKiotaAbstractions::RequestInfo.new()
            request_info.set_uri(@current_path, @path_segment, @is_raw_url)
            request_info.http_method = :GET
            request_info.set_headers_from_raw_object(h)
            request_info.set_query_string_parameters_from_raw_object(q)
            return request_info;
        end
        ## 
        ## The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
        ## @param body 
        ## @param h Request headers
        ## @param o Request options for HTTP middlewares
        ## @return a request_info
        ## 
        def create_post_request_info(body, h=nil, o=nil) 
            request_info = MicrosoftKiotaAbstractions::RequestInfo.new()
            request_info.set_uri(@current_path, @path_segment, @is_raw_url)
            request_info.http_method = :POST
            request_info.set_headers_from_raw_object(h)
            request_info.set_content_from_parsable(self.serializer_factory, "application/json", body)
            return request_info;
        end
        ## 
        ## The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
        ## @param h Request headers
        ## @param o Request options for HTTP middlewares
        ## @param q Request query parameters
        ## @param responseHandler Response handler to use in place of the default response handling provided by the core service
        ## @return a CompletableFuture of single_value_extended_properties_response
        ## 
        def get(q=nil, h=nil, o=nil, response_handler=nil) 
            request_info = self.create_get_request_info(
                q, h
            )
            return @http_core.send_async(request_info, Graphrubyv4::Users::MailFolders::SingleValueExtendedProperties::SingleValueExtendedPropertiesResponse, response_handler)
        end
        ## 
        ## The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
        ## @param body 
        ## @param h Request headers
        ## @param o Request options for HTTP middlewares
        ## @param responseHandler Response handler to use in place of the default response handling provided by the core service
        ## @return a CompletableFuture of single_value_legacy_extended_property
        ## 
        def post(body, h=nil, o=nil, response_handler=nil) 
            request_info = self.create_post_request_info(
                body, h
            )
            return @http_core.send_async(request_info, Graphrubyv4::Users::MailFolders::SingleValueExtendedProperties::SingleValueLegacyExtendedProperty, response_handler)
        end
    end
end
