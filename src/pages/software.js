import TopicList from '../components/TopicList';
import topics from '../datas/software';

export default function () {
  return (
    <div>
      <TopicList topics={topics} />
    </div>
  );
}
