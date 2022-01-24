import { Banner } from "../Banner";
import { banners } from "./constants";

export const BannerList = () => {
    return banners.map((banner) => {
        return (
            <Banner
                title={banner.title}
                backgroundImageUrl={banner.backgroundImageUrl}
                category={banner.category}
                commentCount={banner.commentCount}
            />
        );
    });
};