import { AiFillInfoCircle} from 'react-icons/ai'

type Props = {
    type: string,
    count : number
}

export const CautionCard = ({type, count}: Props) => {
    return (
            <div className='flex'>
                <AiFillInfoCircle/>
                <div>
                    {type}
                </div>
                <div>
                    {count}
                </div>
            </div>
        )
}