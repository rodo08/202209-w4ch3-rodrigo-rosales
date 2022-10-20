interface ScreenProps {
  numbers: number;
  action: () => void;
}

const Screen = ({ numbers, action }: ScreenProps): JSX.Element => {
  return <div className="screen"></div>;
};

export default Screen;
