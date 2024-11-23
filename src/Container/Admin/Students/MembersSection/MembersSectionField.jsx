import MembersSection from "./MembersSection.jsx";

const MembersSectionField = () => {
    const membersData = [
        {id: 1, title: "تعداد کل مکینی ها", number: 726},
        {id: 1, title: "تعداد کل فارغ التحصیلان", number: 351},
        {id: 1, title: "تعداد استخدامی ها", number: 240},
    ]
    return (
        <div className='flex justify-between items-center flex-wrap gap-8 max-[1328px]:justify-center'>
            {membersData.map((item) => (
               <div key={item.id}>
                   <MembersSection title={item.title} number={item.number} />
               </div>
            ))}
        </div>
    )
}
export default MembersSectionField