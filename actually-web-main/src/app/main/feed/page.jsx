import TopBar from "@/app/components/TopBar";
import TopicCategories from "@/app/components/TopicCategories";
import TopicCard from "@/app/components/TopicCard";
import TodaysTopic from "@/app/components/TodaysTopic";
import AddTopic from "@/app/components/AddTopic";

export default function Feed() {
  return (
    <feed className="flex-column">
      <TopBar />
      <section className="category-swiper flex-row justify-center space-x-42">
        <TopicCategories 
          categoryname="For You"
        />
        <TopicCategories 
          categoryname="Following"
        />
        <TopicCategories 
          categoryname="Global"
        />
        <TopicCategories 
          categoryname="Politics"
        />
        <TopicCategories 
          categoryname="Ethics"
        />
        <TopicCategories 
          categoryname="Food"
        />
      </section>
      <hr className="divider-line w-full h-px mt-16 mb-42 bg-white"/>
      <div className="feed-content flex-row justify-between mx-36">
        <div className="feed-topics flex-row justify-between w-3/4 min-h-[100vh]">
          <div className="first-column flex-column justify-start space-y-30">
            <TopicCard
              featureimage="alec-favale-Ivzo69e18nk-unsplash.jpg"
              title="Are cats or dogs the better pet?"
              takecount="1251"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
              featureimage="peter-secan-kKXBw9Exn30-unsplash.jpg"
              title="Are hot dogs, sandwiches?"
              takecount="328"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
              featureimage="erik-mclean-OVWn1sbGIYQ-unsplash.jpg"
              title="What does the fox say?"
              takecount="1309"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
              featureimage="emre-NZMeJsrMC8U-unsplash.jpg"
              title="Coffee or tea, which is the better drink?"
              takecount="142"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
              featureimage="pablo-pacheco-D3Mag4BKqns-unsplash.jpg"
              title="Does Pineapple belong on pizza?"
              takecount="6899"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
              featureimage="marissa-rodriguez-2mKYEVGA4jE-unsplash.jpg"
              title="Is water considered wet?"
              takecount="5219"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
              featureimage="eliott-reyna-5KrZ3UoDKC4-unsplash.jpg"
              title="Gen Z vs. Gen alpha, who wins?"
              takecount="7884"
            />
          </div>
        </div>
        <div className="side-bar flex-column justify-between space-y-24 w-1/4">
          <TodaysTopic />
          <AddTopic />
        </div>
      </div>
    </feed>
  );
}