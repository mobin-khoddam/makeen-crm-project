import Card from "./Card";
import { CardsOfFinance } from "../FinaceData";

const FinanceCards = () => {
  return (
    <div className="w-full  flex items-center justify-between  mb-12 max-sm:flex-col  ">
      {CardsOfFinance.map((card) => (
        <Card
          key={card.image}
          image={card.image}
          title={card.title}
          value={card.value}
        />
      ))}
    </div>
  );
};

export default FinanceCards;
