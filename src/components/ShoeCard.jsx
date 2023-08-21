const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } 
    cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center 
        bg-card bg-center bg-cover 
        sm:h-40 sm:w-40 
         rounded-xl max-sm:p-4"
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          height={103}
          width={127}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
