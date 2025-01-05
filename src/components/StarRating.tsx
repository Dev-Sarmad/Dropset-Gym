import { RiStarSLine } from "react-icons/ri"; // Import the star icon

const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: stars }, (_, index) => (
        <RiStarSLine key={index} className="size-[35px]" />
      ))}
    </div>
  );
};

export default StarRating;
