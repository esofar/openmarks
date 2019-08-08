import TopicList from '../components/TopicList';
import topics from '../datas/recommended';

export default function () {
  return (
    <div>
      <TopicList topics={topics} />
    </div>
  );
}
