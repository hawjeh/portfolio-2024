import Image from 'next/image'
import Cartoon from '../../assets/imgs/cartoon.webp'

export default function HomePic({ style }) {
    return (
        <Image
            src={Cartoon.src}
            className={style}
            alt="Haw Jeh Picture"
            width={450}
            height={500}
            priority={true}
        />
    )
}
