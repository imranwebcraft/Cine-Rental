import comingSoon from "../assets/icons/commingSoon.svg";
import favorite from "../assets/icons/favourite.svg";
import newRelease from "../assets/icons/newRelease.svg";
import trending from "../assets/icons/trending.svg";
import watchLater from "../assets/icons/watchLater.svg";

const Sidebar = () => {
	return (
		<aside>
			<ul className="space-y-2">
				<li>
					<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary hover:bg-primary text-black">
						<img src={trending} width="24" height="24" alt="trending" />
						<span>Trending</span>
					</a>
				</li>
				<li>
					<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary">
						<img src={newRelease} width="24" height="24" alt="new release" />
						<span>New Releases</span>
					</a>
				</li>
				<li>
					<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary">
						<img src={comingSoon} width="24" height="24" alt="coming soon" />
						<span>Coming Soon</span>
					</a>
				</li>
				<li>
					<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary">
						<img src={favorite} width="24" height="24" alt="favorite" />
						<span>Favourites</span>
					</a>
				</li>
				<li>
					<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary">
						<img src={watchLater} width="24" height="24" alt="watch later" />
						<span>Watch Later</span>
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
