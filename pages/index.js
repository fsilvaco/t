function HomePage(props) {
  return <div>Welcome to {props.title} </div>;
}

HomePage.getInitialProps = () => {
  return {
    title: "Flavio dev",
  };
};

export default HomePage;
