
import {faqs} from '../../assets/data/faqs'
import FaqSection from './FaqSection'



function FaqList() {

   
  return (
    <ul className='mt-[38px]'>
     {
        faqs.map((item,index)=>(
            <FaqSection item={item} key={index}/>
        ))
     }
    </ul>
  )
}

export default FaqList