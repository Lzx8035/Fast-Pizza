function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;

// inset-0:
// {
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// }
