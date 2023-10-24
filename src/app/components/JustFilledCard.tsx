import { AiFillInfoCircle} from 'react-icons/ai'

type Props = {
    type: string,
    count : number
}
import {styled} from '@stitches/react'


export const JustFilledCard = ({type, count}: Props) => {
    return (
            <Root className='flex min-w-[253px] min-h-[71px] w-full h-full aspect-[253/71] 
            max-w-[350px] justify-start items-center
           gap-5 capitalize  px-5 rounded-[15px]'>
                <AiFillInfoCircle color="#E4A951" size={35}/>
                <p className=''>
                    {type}
                </p>            
                    <div className='font-semibold'>
                    {count}
                </div>
            </Root>
        )
}

const Root = styled('div', {
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"
})