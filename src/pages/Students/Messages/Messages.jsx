import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage";
import Message from "../../../Container/Students/Messages/Message";
import { MessageData } from "../../../Container/Students/Messages/MessagesData";

const Messages = () => {
  return (
    <OriginalTemplatePage>
      <Message messageData={MessageData} />
    </OriginalTemplatePage>
  );
};

export default Messages;
