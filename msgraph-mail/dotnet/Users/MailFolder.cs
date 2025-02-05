using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Graphdotnetv4.Users {
    public class MailFolder : Entity, IParsable<MailFolder> {
        /// <summary>The number of immediate child mailFolders in the current mailFolder.</summary>
        public int? ChildFolderCount { get; set; }
        /// <summary>The collection of child folders in the mailFolder.</summary>
        public List<MailFolder> ChildFolders { get; set; }
        /// <summary>The serialization information for the current model</summary>
        public new IDictionary<string, Action<MailFolder, IParseNode>> DeserializeFields => new Dictionary<string, Action<MailFolder, IParseNode>> {
            {
                "childFolderCount", (o,n) => { o.ChildFolderCount = n.GetIntValue(); }
            },
            {
                "childFolders", (o,n) => { o.ChildFolders = n.GetCollectionOfObjectValues<MailFolder>().ToList(); }
            },
            {
                "displayName", (o,n) => { o.DisplayName = n.GetStringValue(); }
            },
            {
                "isHidden", (o,n) => { o.IsHidden = n.GetBoolValue(); }
            },
            {
                "messageRules", (o,n) => { o.MessageRules = n.GetCollectionOfObjectValues<MessageRule>().ToList(); }
            },
            {
                "messages", (o,n) => { o.Messages = n.GetCollectionOfObjectValues<Message>().ToList(); }
            },
            {
                "multiValueExtendedProperties", (o,n) => { o.MultiValueExtendedProperties = n.GetCollectionOfObjectValues<MultiValueLegacyExtendedProperty>().ToList(); }
            },
            {
                "parentFolderId", (o,n) => { o.ParentFolderId = n.GetStringValue(); }
            },
            {
                "singleValueExtendedProperties", (o,n) => { o.SingleValueExtendedProperties = n.GetCollectionOfObjectValues<SingleValueLegacyExtendedProperty>().ToList(); }
            },
            {
                "totalItemCount", (o,n) => { o.TotalItemCount = n.GetIntValue(); }
            },
            {
                "unreadItemCount", (o,n) => { o.UnreadItemCount = n.GetIntValue(); }
            },
        };
        /// <summary>The mailFolder's display name.</summary>
        public string DisplayName { get; set; }
        /// <summary>Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.</summary>
        public bool? IsHidden { get; set; }
        /// <summary>The collection of rules that apply to the user's Inbox folder.</summary>
        public List<MessageRule> MessageRules { get; set; }
        /// <summary>The collection of messages in the mailFolder.</summary>
        public List<Message> Messages { get; set; }
        /// <summary>The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.</summary>
        public List<MultiValueLegacyExtendedProperty> MultiValueExtendedProperties { get; set; }
        /// <summary>The unique identifier for the mailFolder's parent mailFolder.</summary>
        public string ParentFolderId { get; set; }
        /// <summary>The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.</summary>
        public List<SingleValueLegacyExtendedProperty> SingleValueExtendedProperties { get; set; }
        /// <summary>The number of items in the mailFolder.</summary>
        public int? TotalItemCount { get; set; }
        /// <summary>The number of items in the mailFolder marked as unread.</summary>
        public int? UnreadItemCount { get; set; }
        /// <summary>
        /// Serialiazes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public new void Serialize(ISerializationWriter writer) {
            base.Serialize(writer);
            writer.WriteIntValue("childFolderCount", ChildFolderCount);
            writer.WriteCollectionOfObjectValues<MailFolder>("childFolders", ChildFolders);
            writer.WriteStringValue("displayName", DisplayName);
            writer.WriteBoolValue("isHidden", IsHidden);
            writer.WriteCollectionOfObjectValues<MessageRule>("messageRules", MessageRules);
            writer.WriteCollectionOfObjectValues<Message>("messages", Messages);
            writer.WriteCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", MultiValueExtendedProperties);
            writer.WriteStringValue("parentFolderId", ParentFolderId);
            writer.WriteCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", SingleValueExtendedProperties);
            writer.WriteIntValue("totalItemCount", TotalItemCount);
            writer.WriteIntValue("unreadItemCount", UnreadItemCount);
        }
    }
}
