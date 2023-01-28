export interface Email {
  id                        : string;
  createdDateTime           : Date;
  lastModifiedDateTime      : Date;
  changeKey                 : string;
  categories                : any[];
  receivedDateTime          : Date;
  sentDateTime              : Date;
  hasAttachments            : false;
  internetMessageId         : string;
  subject                   : string;
  bodyPreview               : string;
  importance                : string;
  parentFolderId            : string;
  conversationId            : string;
  conversationIndex         : string;
  isDeliveryReceiptRequested: any;
  isReadReceiptRequested    : false;
  isRead                    : false;
  isDraft                   : false;
  webLink                   : string;
  inferenceClassification   : string;
  body: {
    contentType: string;
    content    : string;
  };
  sender: {
    emailAddress: {
      name   : string;
      address: string;
    }
  };
  from: {
    emailAddress: {
      name   : string;
      address: string;
    }
  };
  toRecipients: [
    {
      emailAddress: {
        name   : string;
        address: string;
      }
    }
  ];
  ccRecipients : [];
  bccRecipients: [];
  replyTo      : [];
  flag         : {
    flagStatus: string;
  };
}