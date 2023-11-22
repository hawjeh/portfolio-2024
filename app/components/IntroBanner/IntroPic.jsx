import Cartoon from '../../assets/imgs/cartoon.webp'

export default function IntroPic({ style }) {
    return (
        <img
            src={Cartoon.src}
            className={style}
            alt="Haw Jeh Picture"
        />
    )
}
