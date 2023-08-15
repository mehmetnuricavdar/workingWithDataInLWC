import { LightningElement, wire } from "lwc";
import FirstName_Field from "@salesforce/schema/Contact.FirstName";
import LastName_Field from "@salesforce/schema/Contact.LastName";
import Email_Field from "@salesforce/schema/Contact.Email";
import getContacts from "@salesforce/apex/ContactController.getContacts";

const COLUMNS = [
  {
    label: "Contact Name",
    fieldName: FirstName_Field.fieldApiName,
    type: "text"
  },
  { label: "Last Name", fieldName: LastName_Field.fieldApiName, type: "text" },
  { label: "Email", fieldName: Email_Field.fieldApiName, type: "email" }
];

export default class ContactList extends LightningElement {
  columns = COLUMNS;
  @wire(getContacts)
  contacts;
}
