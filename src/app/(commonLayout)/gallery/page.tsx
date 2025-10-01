import Image from "next/image";
import nextImg from '../../../assets/nextjs.jpg'



export default function GalleryPage() {
    return (
        <div className="bg-gray-200">
            <div>
                <img src="https://i.ibb.co.com/PZVB119F/nextjs.jpg" alt="next img" width={500} height={500} className="mx-auto" />
            </div>
            <div>
                <Image src="https://i.ibb.co.com/PZVB119F/nextjs.jpg" alt="next img" width={500} height={500} className="mx-auto" />
            </div>

            {/*local folder folder */}
            <div>
                <Image src={nextImg} alt="next img" width={500} height={500} className="mx-auto" />
            </div>

            {/* public folder */}
            <div>
                <Image src="/nextjs.jpg" alt="next img" width={500} height={500} className="mx-auto" />
            </div>
        </div>
    );
}