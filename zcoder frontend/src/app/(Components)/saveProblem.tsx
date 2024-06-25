import axios from "axios";
import { IoArchiveOutline } from "react-icons/io5";

axios

interface saveProblemProps {
    questionId: string,
    email: string,
}

const SaveProblem: React.FC<saveProblemProps> = ({ questionId, email }) => {

    const handleSaveProblem = async () => {
        try {
            const data = {
                saveProblem: questionId,
                email: email,
            };

            const response = await axios.patch(
                "http://localhost:8000/api/profile/saveProblem", data
            );

            console.log("Response Data: ", response.data);
            
        } catch (error) {
            console.log("Error saving problem: ", error);
        }
        
    };

    return (
        <IoArchiveOutline className="size-5" onClick={handleSaveProblem}/>
    );
};

export default SaveProblem;