import { createContext } from "react";

interface PhoneContextStructure {
  phoneNumbers: number[];
  onCall: Boolean;
  loadPhoneNumbers: (phoneNumbers: number[]) => void;
}

const PhoneContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);

export default PhoneContext;
