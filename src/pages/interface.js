import TopicList from '../components/TopicList';
import topics from '../datas/interface.js';

export default function () {
  return (
    <div>
      <TopicList topics={topics} />
    </div>
  );
}
