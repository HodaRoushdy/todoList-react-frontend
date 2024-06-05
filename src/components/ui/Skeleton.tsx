const Skeleton = () => {
  // width = 57.5 px
  // width = 324 px

  return (
    <div className="flex items-center justify-between">
      <div className="h-[3vh] bg-gray-300 rounded-md dark:bg-gray-300 w-[20vw] mb-2.5"></div>
      <div className="flex gap-[1vw]">
        <div className="h-[5vh] bg-gray-300 rounded-md dark:bg-gray-300 w-[5vw]"></div>
        <div className="h-[5vh] bg-gray-300 rounded-md dark:bg-gray-300 w-[6vw]"></div>
      </div>
    </div>
  );
};

export default Skeleton;
