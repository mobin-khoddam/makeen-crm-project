import MembersSection from "./MembersSection.jsx";

const MembersSectionField = () => {
    const membersData = [
        {id: 1, title: "تعداد کل مکینی ها", number: 726},
        {id: 2, title: "تعداد کل فارغ التحصیلان", number: 351},
        {id: 3, title: "تعداد استخدامی ها", number: 240},
    ]
    return (
        <div className='flex justify-between items-center flex-wrap gap-8 max-[1328px]:justify-center'>
            {membersData.map((item) => (
               <div className='max-w-full' key={item.id}>
                   <MembersSection title={item.title} number={item.number} />
               </div>
            ))}
        </div>
    )
}
export default MembersSectionField