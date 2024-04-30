export default function Feed() {
  return (
    <section className="flex-row justify-between w-3/4">
      <div className="flex-column justify-start space-y-30">
        <topicCard
          featureImage="alec-favale-Ivzo69e18nk-unsplash.jpg"
          title="Are cats or dogs the better pet?"
          takeCount="1251"
        />
        <topicCard
          featureImage="peter-secan-kKXBw9Exn30-unsplash.jpg"
          title="Are hot dogs, sandwiches?"
          takeCount="328"
        />
        <topicCard
          featureImage="erik-mclean-OVWn1sbGIYQ-unsplash.jpg"
          title="What does the fox say?"
          takeCount="1309"
        />
      </div>
    </section>
  );
  }