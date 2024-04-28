import TopicCard from @/components/TopicCard

export default function Feed() {
  return (
    <section className="flex-row justify-between w-3/4">
      <div className="flex-column justify-start space-y-30">
        <TopicCard
        label={"Are cats or dogs the better pet?"}
        comment={"1215"}
        />
        <TopicCard 
        label={"Are hot dogs, sandwiches?"}
        comment={"328"}
        />
        <TopicCard 
        label={"What does the fox say?"}
        comment={"1309"}
        />
        <TopicCard 
        label={"Coffee or tea, which is the better drink?"}
        comment={"142"}
        />
        <TopicCard 
        label={"Does Pineapple belong on pizza?"}
        comment={"6899"}
        />
        <TopicCard 
        label={"Is water considered wet?"}
        comment={"5219"}
        />
        <TopicCard 
        label={"Gen Z vs. Gen alpha, who wins?"}
        comment={"7884"}
        />
      </div>
    </section>
  );
  }