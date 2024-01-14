import { useState } from "react";

const useGeneratePassword = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const generatePassword = (checkBoxe, length) => {
        let currentPass = "", generatedpssword = "";
        const filterSelected = checkBoxe.filter((item) => item.state === true);
        if (filterSelected.length === 0) {
            setError("Please select one of those options !!");
            setPassword("");
            return;
        }
        filterSelected.forEach(element => {
            switch (element.title) {
                case "Include uppercase":
                    currentPass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include lowercase":
                    currentPass += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include characters":
                    currentPass += "!@#$%^&*()";
                    break;
                case "Include Numbers":
                    currentPass += "0123456789";
                    break;
            }
        });
        for (let index = 0; index < length; index++) {
            generatedpssword += currentPass.charAt(Math.floor(Math.random() * currentPass.length));
        }
        setError("");
        setPassword(generatedpssword)
    }
    return {password,error,generatePassword};
}
export default useGeneratePassword;