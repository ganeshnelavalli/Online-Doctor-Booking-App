import {faqs} from '../../assets/data/faqs';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item) => (
            <FaqItem item={item} key={item.content} />
        ))}
    </ul>
  )
};

export default FaqList;