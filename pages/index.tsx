interface Props {}

const Index = (props: Props) => {
  return <div>Hello World</div>;
};

Index.getInitialProps = async () => {
  return {};
};

export default Index;
