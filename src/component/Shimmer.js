import { SHIMMER_RES_CARDS_COUNT, SHIMMER_MENU_ITEMS_COUNT } from "../utils/constant"


const CardShimmer = () => {
    return (
        <div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 shadow animate-pulse">
            <div className="h-[144px] w-[230px] bg-bio mob:w-[130px] mob:h-[81px]"></div>
            <div className="w-3/5 mt-2.5 h-[15px] bg-bio"></div>
            <div className="w-4/5 mt-1 h-[15px] bg-bio"></div>
            <div className="w-full mt-[18px] h-[15px] bg-bio"></div>
        </div>
    )
}


const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {Array.from({length:SHIMMER_RES_CARDS_COUNT}).map((element,index) => {
        return <CardShimmer key={index}/>
      })}
    </div>
  )
}

export default Shimmer
