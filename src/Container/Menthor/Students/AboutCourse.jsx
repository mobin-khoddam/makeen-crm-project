const AboutCourse = () => {
    const aboutCourseList = [
        {id: 1, title: 'تاریخ شروع دوره :', content: '1402/12/25'},
        {id: 2, title: 'تاریخ پایان دوره :', content: '1402/12/25'},
        {id: 3, title: 'تعداد جلسات برگزار شده:', content: '37'},
        {id: 4, title: 'تعداد جلسات تا پایان دوره:', content: '55'},
    ]
  return(
      <div className='flex justify-center items-center mt-8 mb-20'>
          <div className='grid grid-cols-2 gap-6 justify-center items-center max-xl:grid-cols-1'>
              {aboutCourseList.map((item) => (
                  <div className='bg-white w-[416px] max-w-full flex justify-center items-center py-6 rounded-2xl'
                       key={item.id}>
                      <span>{item.title}</span>
                      <span>{item.content}</span>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default AboutCourse