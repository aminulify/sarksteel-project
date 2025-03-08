import { FiUsers } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";
import { FiCheckSquare } from "react-icons/fi";

const ServicesBottomPart = () => {
    return (
        <div>
            <h2 className="md:text-[40px] text-[28px] text-[var(--mainColor)] font-semibold">Some facts works with us</h2>
            <p className="md:text-lg text-sm text-[var(--textColor)]">Expound the actual teachings of the great explorer of the truth, the  master-builder of human happiness. No one rejects, dislikes, or avoids  pleasure itself.</p>

            <main className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                    <FiUsers className="text-3xl text-[var(--mainColor)]"/>
                    <h3 className="py-1 font-medium md:text-xl text-lg text-[var(--mainColor)]">Professional Team</h3>
                    <p className="text-sm text-[var(--textColor)]">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables.</p>
                </div>
                <div>
                    <IoCalendarOutline className="text-3xl text-[var(--mainColor)]"/>
                    <h3 className="py-1 font-medium md:text-xl text-lg text-[var(--mainColor)]">Deadline Completion</h3>
                    <p className="text-sm text-[var(--textColor)]">Seamlessly execute projects with precision, ensuring timely and efficient delivery.</p>
                </div>
                <div>
                    <LuLayers className="text-3xl text-[var(--mainColor)]"/>
                    <h3 className="py-1 font-medium md:text-xl text-lg text-[var(--mainColor)]">Best Strategy of Work</h3>
                    <p className="text-sm text-[var(--textColor)]">Optimize every phase with strategic planning for maximum productivity and excellence.</p>
                </div>
                <div>
                    <FiCheckSquare className="text-3xl text-[var(--mainColor)]"/>
                    <h3 className="py-1 font-medium md:text-xl text-lg text-[var(--mainColor)]">Quality Work</h3>
                    <p className="text-sm text-[var(--textColor)]">Deliver superior craftsmanship with a commitment to durability and innovation.</p>
                </div>
            </main>
        </div>
    );
};

export default ServicesBottomPart;