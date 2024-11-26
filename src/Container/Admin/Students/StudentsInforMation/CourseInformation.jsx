import ImageUploader from "../../../Students/PersonalInformation/ImageUploader.jsx";
import CustomReadOnly from "./CustomReadOnly.jsx";
import CustomButton from "../../../Students/CustomButton.jsx";

const  CourseInformation = () => {
    const fieldData = [
        {id: 1, title: 'تیتر اصلی', text: 'فرانت اند'},
        {id: 2, title: 'نام دوره', text: 'ری اکت'},
        {id: 3, title: 'شماره دوره', text: 'دوره 14'},
        {id: 4, title: 'نام استاد', text: 'استاد زیرک'},
        {id: 5, title: 'تاریخ شروع', text: '1403/7/25'},
        {id: 6, title: 'تاریخ پایان', text: '1404/3/25'},
    ]
  return (
      <div className='bg-white p-8'>
          <div className='grid grid-cols-3 gap-12 justify-between max-xl:grid-cols-2 max-lg:grid-cols-1 mb-8'>
              {fieldData.map( item=> (
                  <div key={item.id}>
                      <CustomReadOnly title={item.title} text={item.text} />
                  </div>
              ))}
          </div>
          <ImageUploader />
          <div className='flex justify-center items-center mt-8'>
              <CustomButton text='ثبت اطلاعات' />
          </div>
      </div>
  )
}
export default CourseInformation