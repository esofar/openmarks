import TopicList from '../components/TopicList';
import topics from '../datas/development';

export default function () {
  return (
    <div>
      <TopicList topics={topics} />
    </div>
  );
}
