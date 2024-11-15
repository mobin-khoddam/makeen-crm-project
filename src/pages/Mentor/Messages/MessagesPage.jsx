import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage";
import MessagesMentor from "../../../Container/Menthor/Messages/MessagesMentor";
import { MentorMessageData } from "../../../Container/Menthor/Messages/MessagesData";

const MessagesPage = () => {
  return (
    <OriginalTemplatePage>
      <MessagesMentor messageData={MentorMessageData} />
    </OriginalTemplatePage>
  );
};

export default MessagesPage;
