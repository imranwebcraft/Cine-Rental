import star from "../assets/star.svg";
const Rating = () => {
	return (
		<div className="flex items-center space-x-1 mb-5">
			<img src={star} width="14" height="14" alt="start svg" />
			<img src={star} width="14" height="14" alt="start svg" />
			<img src={star} width="14" height="14" alt="start svg" />
			<img src={star} width="14" height="14" alt="start svg" />
			<img src={star} width="14" height="14" alt="start svg" />
		</div>
	);
};

export default Rating;
