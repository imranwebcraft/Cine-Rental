import star from "../assets/star.svg";
const Rating = ({ value }) => {
	const starArray = Array(value).fill(star);
	return (
		<div className="flex items-center space-x-1 mb-5">
			{starArray.map((star, index) => (
				<img key={index} src={star} width="14" height="14" alt="start svg" />
			))}
		</div>
	);
};

export default Rating;
