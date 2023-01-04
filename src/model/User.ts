export interface User {
  "@odata.context": string;

  id               : string;
  userPrincipalName: string;
  displayName      : string;
  surname          : string;
  mail             : string;
  businessPhones   : string[];
  givenName        : string;
  jobTitle         : string;
  mobilePhone      : string;
  officeLocation   : string;
  preferredLanguage: string;
}