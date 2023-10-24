import { AiFillInfoCircle} from 'react-icons/ai'

type Props = {
    type: string,
    count : number
}
import {styled} from '@stitches/react'


export const CautionCard = ({type, count}: Props) => {
    return (
            <Root className='flex min-w-[243px] min-h-[61px] w-full h-full aspect-[243/61] 
            max-w-[350px] justify-between items-center
           gap-5 capitalize  px-10 rounded-[15px]
           hover:bg-[#e4a9514c] hover:font-bold hover:scale-[1.05] cursor-pointer
           '>
             <div className='flex gap-3 items-center'>
                    <AiFillInfoCircle color="#E4A951" size={35}/>
                    <p className=''>
                        {type}
                    </p>   
             </div>         
                    <div className='font-semibold'>
                    {count}
                </div>
            </Root>
        )
}

const Root = styled('div', {
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",

})