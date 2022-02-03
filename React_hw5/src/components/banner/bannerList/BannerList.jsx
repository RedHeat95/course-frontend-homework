import { Banner } from "../Banner/Banner";
import { banners } from "./constants";

export const BannerList = () => {
    
    const OnClickPress = () => {
        alert("Вы выбрали category");    
    };

    return banners.map((banner) => {
        return (
            <Banner
                title={banner.title}
                backgroundImageUrl={banner.backgroundImageUrl}
                category={banner.category}
                commentCount={banner.commentCount}
                OnClickPress={OnClickPress}
            />
        );
    });
};