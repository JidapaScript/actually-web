export default function Feed() {
  return (
    <section className="flex-row justify-between w-3/4">
      <div className="flex-column justify-start space-y-30">
        <TopicCard
          featureimage="alec-favale-Ivzo69e18nk-unsplash.jpg"
          title="Are cats or dogs the better pet?"
          takecount="1251"
        />
        <TopicCard
          featureimage="peter-secan-kKXBw9Exn30-unsplash.jpg"
          title="Are hot dogs, sandwiches?"
          takecount="328"
        />
        <TopicCard
          featureimage="erik-mclean-OVWn1sbGIYQ-unsplash.jpg"
          title="What does the fox say?"
          takecount="1309"
        />
      </div>
    </section>
  );
  }