import PersonalFiledTitle from "../Container/Students/WorkReport/PersonalFiledTitle.jsx";
import CustomInputField from "../Container/Students/PersonalInformation/CustomInput/CustomInputField.jsx";
import {
    personalInformationHomeAddress,
    personalInformationInput,
    personalInformationLanguageField, personalInformationRadioConnection,
    personalInformationRadioDutySystem,
    personalInformationRadioGender,
    personalInformationRadioStatusMarried, personalInformationRepresentative,
    personInformationBachelorsDegree,
    personInformationCompletedTrainingCourses,
    personInformationDiploma,
    personInformationMastersDegree,
    personInformationRadioExemptionType,
    personInformationRadioFamiliarLanguagesSuffering1, personInformationRadioFamiliarLanguagesSuffering2,
    personInformationRadioRelatedSoftware,
    personInformationRadioWorkHistory
} from "../helper/ProjectData/Data.jsx";
import ImageUploader from "../Container/Students/PersonalInformation/ImageUploader.jsx";
import CustomRadioInput from "../Container/Students/PersonalInformation/CustomRadioInput.jsx";
import RemoveButton from "../Container/Students/PersonalInformation/RemoveButton.jsx";
import AddButton from "../Container/Students/PersonalInformation/AddButton.jsx";
import CustomInput from "../Container/Students/PersonalInformation/CustomInput/CustomInput.jsx";
import CustomButton from "../Container/Students/CustomButton.jsx";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

const PersonalInformationForm = () => {
    const {register, handleSubmit, unregister, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    const [trainingCoursesList, setTrainingCoursesList] = useState([{id: uuidv4()}])
    const [relatedSoftwareList, setRelatedSoftwareList] = useState([{id: uuidv4()}])
    const addTrainingCoursesHandler = () => {
        setTrainingCoursesList(list => [...list, {id: uuidv4()}])
    }
    const removeTrainingCoursesHandler = () => {
        setTrainingCoursesList((list) => {
            const lastItemId = list[list.length - 1];
            unregister(`CourseTopic${lastItemId}`);
            unregister(`CourseDuration${lastItemId}`);
            unregister(`startDate${lastItemId}`);
            unregister(`NameOfTheInstitution${lastItemId}`);
            unregister(`Considerations${lastItemId}`);
            return list.slice(0, -1);
        });
    };
    const addRelatedSoftwareHandler = () => {
        setRelatedSoftwareList(list => [...list, {id: uuidv4()}])
    }
    const removeRelatedSoftwareHandler = () => {
        setRelatedSoftwareList(list => {
            const lastItemId = list[list.length - 1];
            unregister(`relatedSoftwareMastery${lastItemId}`)
            unregister(`relatedSoftwareDegreeOfMastery${lastItemId}`)
            unregister(`relatedSoftWareWorkHistory${lastItemId}`)
            unregister(`relatedSoftwareDTheProjectIsDone${lastItemId}`)
            return list.slice(0, -1)
        })
    }
    return (
        <form
            className="text-sm text-[#6B7280] primary-gray-100 flex flex-col gap-6 [&>div]:p-6 [&>div]:bg-white [&>div]:rounded-2xl pb-10"
            onSubmit={handleSubmit(onSubmit)}>
            <div>
                <PersonalFiledTitle text='اطلاعات فردی'/>
                <div className="flex justify-between items-center gap-10 max-[1380px]:flex-col-reverse">
                    <CustomInputField isRequired={true} register={register} data={personalInformationInput}
                                      errors={errors}
                                      className="grid grid-cols-3 gap-x-7 w-fit justify-center items-center max-lg:flex max-lg:flex-wrap"/>
                    <div className='w-[333px] max-w-full'>
                        <ImageUploader/>
                    </div>
                </div>
                <div
                    className="flex items-center justify-between gap-4 w-3/6 max-[380px]:items-center max-[1380px]:flex-col max-[1380px]:w-full max-[1380px]:justify-center">
                    <CustomRadioInput register={register} data={personalInformationRadioStatusMarried}
                                      name="MaritalStatus" isRequired={true}
                                      errors={errors} title="وضعیت تاهل:"/>
                    <CustomRadioInput register={register} data={personalInformationRadioGender} name="Gender"
                                      errors={errors} title="جنسیت:" isRequired={true}/>
                </div>
            </div>
            <div>
                <PersonalFiledTitle text='محل سکونت'/>
                <div className="flex items-start gap-7 max-xl:flex-col-reverse max-xl:items-center">
                    <div className="w-full">
                            <textarea
                                {...register('homeAddress', {required: 'پر کردن این فیلد الزامیست'})}
                                className="w-full block h-[55px] min-h-[55px] max-h-[150px] min-w-[184px] p-4 rounded-xl text-sm shadow-[0px_1px_2px_3px_#0000000D] outline-none max-sm:h-[150px]"
                                placeholder="آدرس"/>
                        <span className="h-7 block text-red-600 text-xs">{errors.homeAddress?.message}</span>
                    </div>
                    <CustomInputField isRequired={true} register={register} data={personalInformationHomeAddress}
                                      errors={errors} className="flex gap-7 max-sm:flex-col"
                    />
                </div>
            </div>
            <div>
                <PersonalFiledTitle text='وضعیت نظام وظیفه'/>
                <div className='max-lg:flex justify-center gap-7 max-[385px]:flex-col-reverse'>
                    <CustomRadioInput register={register} data={personalInformationRadioDutySystem}
                                      isRequired={true}
                                      name="dutySystem" errors={errors} title="دارای کارت پایان خدمت از:"
                                      className='max-lg:flex-col'/>
                    <CustomRadioInput register={register} data={personInformationRadioExemptionType}
                                      isRequired={true}
                                      name="dutySystem" errors={errors} title="نوع معافیت:"
                                      className='max-lg:flex-col'/>
                </div>
            </div>
            <div>
                <PersonalFiledTitle text='تحصیلات'/>
                <PersonalFiledTitle text='دیپلم'/>
                <CustomInputField isRequired={false} register={register} data={personInformationDiploma}
                                  errors={errors}
                                  className='flex gap-7 flex-wrap max-[1432px]:justify-center'/>
                <PersonalFiledTitle text='لیسانس'/>
                <CustomInputField isRequired={false} register={register} data={personInformationBachelorsDegree}
                                  errors={errors}
                                  className='flex gap-7 flex-wrap max-[1432px]:justify-center'/>
                <PersonalFiledTitle text='فوق لیسانس'/>
                <CustomInputField isRequired={false} register={register} data={personInformationMastersDegree}
                                  errors={errors}
                                  className='flex gap-7 flex-wrap max-[1432px]:justify-center'/>
            </div>
            <div>
                <div className="mb-6 flex justify-between items-center max-sm:flex-col gap-1">
                    <span className="text-black">دوره های آموزشی طی شده</span>
                    <div className="flex items-center gap-1 max-sm:flex-col">
                        {
                            trainingCoursesList.length > 1 &&
                            <button onClick={removeTrainingCoursesHandler} type="button"><RemoveButton/></button>
                        }
                        <button type="button" onClick={addTrainingCoursesHandler}>
                            <AddButton/>
                        </button>
                    </div>
                </div>
                {
                    trainingCoursesList.map((item, index) => (
                        <div key={item.id}>
                            <CustomInputField data={personInformationCompletedTrainingCourses} errors={errors}
                                              className='flex items-center gap-7 flex-wrap max-[1432px]:justify-center'
                                              isRequired={false}
                                              register={register} registerHelper={index}/>
                            <hr className="my-4"/>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className="mb-6 flex justify-between items-center">
                    <span className="text-black">نرم افزار های مرتبط</span>
                    <div className="flex items-center gap-1">
                        {
                            relatedSoftwareList.length > 1 &&
                            <button onClick={removeRelatedSoftwareHandler} type="button"><RemoveButton/></button>
                        }
                        <button type="button" onClick={addRelatedSoftwareHandler}>
                            <AddButton/>
                        </button>
                    </div>
                </div>
                {
                    relatedSoftwareList.map((item, index) => (
                        <div key={item.id}>
                            <div
                                className="flex items-center gap-10 flex-wrap max-sm:justify-center max-[690px]:flex-col">
                                <CustomInput isNumber={false} register={register}
                                             name={`relatedSoftwareMastery${item.id}`}
                                             isRequired={false} placeholder="نرم افزار"/>
                                <CustomRadioInput register={register} errors={errors}
                                                  data={personInformationRadioRelatedSoftware}
                                                  name={`relatedSoftwareDegreeOfMastery${item.id}`}
                                                  title="میزان تسلط:" className='max-[445px]:flex-col'/>
                            </div>
                            <div className="flex items-center gap-10 flex-wrap max-sm:justify-center">
                                <CustomInput isNumber={false} register={register}
                                             name={`relatedSoftWareWorkHistory${index}`}
                                             isRequired={false} placeholder="سابقه کار"/>
                                <CustomRadioInput register={register} errors={errors}
                                                  data={personInformationRadioWorkHistory}
                                                  name={`relatedSoftwareDTheProjectIsDone${item.id}`}
                                                  title="پروژه انجام شده:"
                                                  isRequired={false}/>
                            </div>
                            <textarea
                                {...register('ProjectDescription',)}
                                className="w-[600px] max-w-full min-h-[55px] max-h-[300px] h-[55px] p-4 rounded-xl text-sm shadow-[0px_1px_2px_3px_#0000000D] outline-none"
                                placeholder="درباره پروژه توضیح دهید"/>
                            <hr className="my-4"/>
                        </div>
                    ))
                }
            </div>
            <div>
                <PersonalFiledTitle text='آشنایی با زبان های خارجی'/>
                <div className="flex justify-between items-center gap-2 max-[1380px]:flex-col">
                    <CustomInput isNumber={false} errors={errors.FamiliarityWithLanguages?.message}
                                 register={register}
                                 isRequired={true}
                                 placeholder="زبان " name="FamiliarityWithLanguages"/>
                    <div className='flex items-center  gap-6 flex-wrap justify-center'>
                        {
                            personalInformationLanguageField.map(item => (
                                <div key={item.id}>
                                    <div className="flex items-center gap-6 border-l-2 pl-5">
                                        <span className="mb-6">{item.title}</span>
                                        <div>
                                            <CustomRadioInput register={register} isRequired={true}
                                                              data={personInformationRadioFamiliarLanguagesSuffering1}
                                                              name={`Language${item.register}`} errors=''
                                                              title=''/>
                                            <CustomRadioInput register={register} isRequired={true}
                                                              data={personInformationRadioFamiliarLanguagesSuffering2}
                                                              name={`Language${item.register}`} errors=''
                                                              title=''/>
                                        </div>
                                    </div>
                                    <span
                                        className="text-xs text-red-600">{errors[`Language${item.register}`]?.message}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <PersonalFiledTitle text='معرف شما'/>
                <div>
                    <CustomInputField data={personalInformationRepresentative} register={register} errors={errors}
                                      className="flex items-center gap-7 flex-wrap max-[1432px]:justify-center"
                                      registerHelper=''/>
                </div>
            </div>
            <div>
                <PersonalFiledTitle text='نحوه آشنایی'/>
                <CustomRadioInput register={register} errors={errors} title='' isRequired={true}
                                  data={personalInformationRadioConnection} name='connection'
                                  className='flex-wrap max-[337px]:flex-col'/>
            </div>
            <div className='flex justify-center items-center'>
                <CustomButton className='!px-20 text-lg mx-auto block' text='ثبت اطلاعات'/>
            </div>
        </form>
    )
}
export default PersonalInformationForm