const Loading = () => {
  return (
    <div>
      <div className="text-6xl text-center font-bold my-[4rem]">Status</div>
      <div className="rounded-box bg-base-200 mb-10 flex justify-center">
        <div className="flex flex-col gap-4 max-w-[56rem] my-5 items-center px-10">
          <div className="skeleton w-32 h-6"></div>
          <div className="skeleton w-28 h-4"></div>
          <div className="skeleton w-28 h-4"></div>
          <div className="skeleton w-28 h-4"></div>
          <div className="skeleton w-28 h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
