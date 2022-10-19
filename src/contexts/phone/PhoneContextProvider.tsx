import { useCallback, useState } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumbers, setPhoneNumbers] = useState<number[]>([]);

  const loadPhoneNumbers = useCallback((phoneNumbers: number[]) => {
    setPhoneNumbers(phoneNumbers);
  }, []);

  return (
    <PhoneContext.Provider
      value={{ phoneNumbers, onCall: true, loadPhoneNumbers }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;

//crear estado para oncall con boolean
