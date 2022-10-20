interface KeyProps {
  text: number | string;
  action: (item: number | string) => void;
}

const Key = ({ text, action }: KeyProps): JSX.Element => {
  return <button className="key">1</button>;
};

export default KeyProps;
