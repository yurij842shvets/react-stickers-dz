import stickers from '../stickers.json'
import Sticker from './Sticker'

export default function StickerList({textSelect}) {
    return(
        <div className="sticker-list" >
            <h1>Sticker List</h1>
            <div style={{width: '1000px' ,display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            border: '2px solid black',
            borderRadius: '30px',
            padding: '20px',
        }}>
                {stickers.map((sticker, index) => (
                    <Sticker key={index} img={sticker.img} label={sticker.label} onClick={textSelect}/>
                ))}
            </div>
        </div>
    )
}