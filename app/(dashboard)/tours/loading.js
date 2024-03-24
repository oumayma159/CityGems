const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="spinner-border text-primary mr-2" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <span className="text-lg font-bold text-primary">Loading...</span>
    </div>
  );
};

export default Loading;
