import TopicList from '../components/TopicList';
import topics from '../datas/recommends';

export default function () {
  return (
    <div>
      <TopicList topics={topics} />
    </div>
  );
}
