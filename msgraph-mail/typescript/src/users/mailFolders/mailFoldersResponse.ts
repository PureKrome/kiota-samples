import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';
import {MailFolder} from '../mailFolder';

export class MailFoldersResponse implements Parsable<MailFoldersResponse> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    public readonly additionalData: Map<string, unknown> = new Map<string, unknown>();
    public nextLink?: string | undefined;
    public value?: MailFolder[] | undefined;
    /**
     * The serialization information for the current model
     * @returns a Map<string, (item: MailFoldersResponse, node: ParseNode) => void>
     */
    public deserializeFields () : Map<string, (item: MailFoldersResponse, node: ParseNode) => void> {
        return new Map<string, (item: MailFoldersResponse, node: ParseNode) => void>([
            ["@odata.nextLink", (o, n) => { o.nextLink = n.getStringValue(); }],
            ["value", (o, n) => { o.value = n.getCollectionOfObjectValues<MailFolder>(MailFolder); }],
        ]);
    };
    /**
     * Serialiazes information the current object
     * @param writer Serialization writer to use to serialize this model
     * @returns a void
     */
    public serialize (writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        writer.writeCollectionOfObjectValues<MailFolder>("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
}
