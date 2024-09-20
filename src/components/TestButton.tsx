interface ITestButton {
  label: string;
}

export const TestButton = ({ label }: ITestButton) => {
  return <button>{label}</button>;
};
