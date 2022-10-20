interface ScreenProps {
  numbers: number;
  action: () => void;
}

const Screen = ({ numbers, action }: ScreenProps): JSX.Element => {
  return <span className="number"></span>;
};

export default Screen;
