const App = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>This is a simple React web app embedded in HTML.</p>
    </div>
  );
};

const domContainer = document.getElementById('root');
ReactDOM.createRoot(domContainer).render(<App />);